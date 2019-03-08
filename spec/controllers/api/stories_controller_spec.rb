require 'rails_helper'

RSpec.describe Api::StoriesController, type: :controller do
  let(:valid_params) { attributes_for(:story) }
  let(:invalid_params) do
    attrs = attributes_for(:story)
    attrs[:title] = ""
    attrs
  end
  let(:user) { create(:user) }
  let(:create_project) { create(:project) }

  describe "action protection" do
    context "when signed out" do
      it "returns :unauthorized status code" do
        ["post :create, format: :json, params: { workflow_id: 2, id: 2 }",
         "put :update, format: :json, params: { id: 2 }",
         "delete :destroy, format: :json, params: { id: 3 }"
        ].each do |method|
          eval(method)
          expect(response).to have_http_status(:unauthorized)
        end
      end
    end
  end

  
  describe "POST create" do
    before do
      subject.sign_in!(user)
      create(:project, user: User.last)
    end

    context "with valid params" do
      it "creates the story" do
        expect {
          post :create, format: :json, params: { workflow_id: Workflow.last.id, story: valid_params }
        }.to change(Story, :count).by(1)
      end
      
      it "renders :show" do
        post :create, format: :json, params: { workflow_id: Workflow.last.id, story: valid_params }
        expect(response).to render_template(:show)
      end
    end

    context "with invalid params" do
      it "doesn't create story" do
        expect {
          post :create, format: :json, params: { workflow_id: Workflow.last.id, story: invalid_params }
        }.to_not change(Story, :count)
      end
      
      it "returns :unprocessable_entity status code" do
        post :create, format: :json, params: { workflow_id: Workflow.last.id, story: invalid_params }
        expect(response).to have_http_status(:unprocessable_entity)
      end
      
      it "returns error messages" do
        post :create, format: :json, params: { workflow_id: Workflow.last.id, story: invalid_params }
        expect(JSON.parse(response.body)).to_not be_empty
      end
    end
  end
  
  describe "PUT update" do
    before do
      subject.sign_in!(user)
      create(:project, user: User.last)
      create(:story, workflow: Workflow.last)
    end

    context "when record belongs to user" do
      context "with valid params" do
        it "updates story" do
          new_params = valid_params
          new_params[:title] = "New title"
          put :update, format: :json, params: { id: Story.last.id, story: new_params }
          expect(Story.last.title).to eq("New title")
        end
  
        it "returns :success status code" do
          new_params = valid_params
          new_params[:title] = "New title"
          put :update, format: :json, params: { id: Story.last.id, story: new_params }
          expect(response).to have_http_status(:success)
        end
  
        it "renders :show" do
          new_params = valid_params
          new_params[:title] = "New title"
          put :update, format: :json, params: { id: Story.last.id, story: new_params }
          expect(response).to render_template(:index)
        end
      end

      context "with invalid params" do
        it "doesn't update story" do
          expect {
            put :update, format: :json, params: { id: Story.last.id, story: invalid_params }
          }.to_not change(Story.last, :title)
        end

        it "returns :unprocessable_entity status code" do
          put :update, format: :json, params: { id: Story.last.id, story: invalid_params }
          expect(response).to have_http_status(:unprocessable_entity)
        end

        it "returns error messages" do
          put :update, format: :json, params: { id: Story.last.id, story: invalid_params }
          expect(JSON.parse(response.body)).to_not be_empty
        end
      end
    end

    context "when record doesn't belong to user" do
      it "raises record not found" do
        another_user = create(:user)
        another_users_project = create(:project, user: another_user)
        another_users_story = create(:story, workflow: Workflow.last)
  
        expect {
          put :update, format: :json, params: {
            id: another_users_story.id,
            story: valid_params
          }
        }.to raise_error ActiveRecord::RecordNotFound
      end
    end
  end
  
  describe "DELETE destroy" do
    before do
      subject.sign_in!(user)
      create(:project, user: User.last)
      create(:story, workflow: Workflow.last)
    end

    context "when record belongs to user" do
      it "deletes story" do
        expect {
          delete :destroy, params: { id: Story.last.id }
        }.to change(Story, :count).by(-1)
      end
    end

    context "when record doesn't belong to user" do
      it "raises record not found" do
        another_user = create(:user)
        another_users_project = create(:project, user: another_user)
        another_users_story = create(:story, workflow: Workflow.last)

        expect {
          delete :destroy, format: :json, params: { id: another_users_story.id }
        }.to raise_error ActiveRecord::RecordNotFound
      end
    end
  end
end
