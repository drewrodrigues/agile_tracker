require 'rails_helper'

RSpec.describe Api::ProjectsController, type: :controller do
  let(:valid_params) { attributes_for(:project) }
  let(:invalid_params) do
    attrs = attributes_for(:project)
    attrs[:title] = ""
    attrs
  end
  let(:user) { create(:user) }

  describe "action protection" do
    context "when signed out" do
      it "returns :unauthozed status code" do
        ["get :show, params: { id: 2 }",
         "post :create, params: { project: #{ valid_params } }", 
         "put :update, params: { id: 2 }",
         "get :index",
         "delete :destroy, params: { id: 2, project: #{ valid_params } }"].each do |method|
          eval(method)
          expect(response).to have_http_status(:unauthorized)
        end
      end
    end
  end

  describe "GET show" do
    before do
      subject.sign_in!(user)
      create(:project, user: user, title: "Some title")
    end

    context "when record belongs to user" do
      it "returns :success status code" do
        get :show, format: :json, params: { id: Project.last.id }
        expect(response).to have_http_status(:success)
      end

      it "renders :show" do
        get :show, format: :json, params: { id: Project.last.id }
        expect(response).to render_template(:show)
      end
    end

    context "when record doesn't belong to user" do
      it "raises record not found" do
        another_user = create(:user)
        another_users_project = create(:project, user: another_user)

        expect {
          get :show, params: { id: another_users_project.id }
        }.to raise_error ActiveRecord::RecordNotFound
      end
    end
  end  

  describe "POST create" do
    before do
      subject.sign_in!(user)
    end

    context "with valid params" do
      it "creates project" do
        expect {
          post :create, format: :json, params: { project: valid_params }
        }.to change(Project, :count).by(1)
      end

      it "returns :success status code" do
        post :create, format: :json, params: { project: valid_params }
        expect(response).to have_http_status(:success)
      end

      it "renders :show" do
        post :create, format: :json, params: { project: valid_params }
        expect(response).to render_template(:show)
      end
      
      it "creates the associated workflows" do
        post :create, format: :json, params: { project: valid_params }
        expect(Project.last.workflows.count).to eq(4)
      end
    end

    context "with invalid params" do
      it "doesn't create project" do
        expect {
          post :create, format: :json, params: { project: invalid_params }
        }.to_not change(Project, :count)
      end

      it "returns :bad_request status code" do
        post :create, format: :json, params: { project: invalid_params }
        expect(response).to have_http_status(:unprocessable_entity)
      end

      it "returns error messages" do
        post :create, format: :json, params: { project: invalid_params }
        expect(JSON.parse(response.body)).to_not be_empty
      end
    end
  end
  
  describe "PUT update" do
    before do
      subject.sign_in!(user)
      create(:project, user: user, title: "Old title")
    end

    context "with valid params" do
      it "updates project" do
        put :update, format: :json, params: { 
          id: Project.last.id,
          project: { title: "New title"}
        }
        expect(Project.last.title).to eq("New title")
      end

      it "returns :success status code" do
        put :update, format: :json, params: { 
          id: Project.last.id,
          project: { title: "New title"}
        }
        expect(response).to have_http_status(:success)
      end

      it "renders :show" do
        put :update, format: :json, params: { 
          id: Project.last.id,
          project: { title: "New title"}
        }
        expect(response).to render_template(:show)
      end
    end
  
    context "with invalid params" do
      it "doesn't update project" do
        put :update, format: :json, params: { 
          id: Project.last.id,
          project: { title: ""}
        }
        expect(Project.last.title).to eq("Old title")
      end

      it "returns :unprocessable_entity status code" do
        put :update, format: :json, params: { 
          id: Project.last.id,
          project: { title: ""}
        }
        expect(response).to have_http_status(:unprocessable_entity)
      end

      it "returns error messages" do
        put :update, format: :json, params: { 
          id: Project.last.id,
          project: { title: ""}
        }
        expect(JSON.parse(response.body)).to_not be_empty
      end
    end

    context "when record doesn't belong to user" do
      it "raises record not found" do
        another_user = create(:user)
        another_users_project = create(:project, user: another_user)

        expect {
          put :update, format: :json, params: { 
            id: another_users_project.id,
            project: { title: ""}
          }
        }.to raise_error ActiveRecord::RecordNotFound
      end
    end
  end

  describe "GET index" do
    before do
      subject.sign_in!(user)
    end

    it "returns :success status code" do
      get :index, format: :json
      expect(response).to have_http_status(:success)
    end

    it "renders :index" do
      get :index, format: :json
      expect(response).to render_template(:index)
    end
  end
  
  describe "DELETE destroy" do
    before do
      subject.sign_in!(user)
      create(:project, user: user, title: "Old title")
    end

    context "when record belongs to user" do
      it "deletes project" do
        expect {
          delete :destroy, params: { id: Project.last.id }
        }.to change(Project, :count).by(-1)
      end

      it "returns :success status code" do
        delete :destroy, params: { id: Project.last.id }
        expect(response).to have_http_status(:success)
      end
    end

    context "when record doesn't belong to user" do
      it "raises record not found" do
        another_user = create(:user)
        another_users_project = create(:project, user: another_user)

        expect {
          delete :destroy, params: { id: another_users_project.id }
        }.to raise_error ActiveRecord::RecordNotFound
      end
    end
  end
end
