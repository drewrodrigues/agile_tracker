require 'rails_helper'

RSpec.describe Api::SessionsController, type: :controller do
  let(:valid_params) { attributes_for(:user) }
  let(:invalid_params) do
    attr = attributes_for(:user)
    attr.delete(:password)
    attr
  end
  let(:create_user) { create(:user) }
  let(:user) { build(:user) }

  before do
    create_user
  end

  describe "POST create" do
    context "when signed in" do
      it "returns :bad_request status code" do
        user = create_user
        subject.sign_in!(user)
        post :create, format: :json, params: { user: valid_params }
        expect(response).to have_http_status(:bad_request)
      end

      it "returns errors" do
        post :create, format: :json, params: { user: invalid_params }
        expect(JSON.parse(response.body)).to_not be_empty
      end
    end

    context "when signed out" do
      context "with valid params" do
        it "signs the user in" do
          expect {
            post :create, format: :json, params: { 
              user: { email: User.last.email, password: "password" } 
            }
          }.to change {session[:session_token]}.from(nil)
        end

        it "renders the user :show template" do
          post :create, format: :json, params: {
            user: { email: User.last.email, password: "password" }
          }
          expect(response).to render_template("api/users/show")
        end
      end

      context "with invalid params" do
        it "returns error messages" do
          post :create, format: :json, params: { user: invalid_params }
          expect(JSON.parse(response.body)).to_not be_empty
        end
      end
    end
  end

  describe "DELETE destroy" do
    context "when signed in" do
      it "returns :success status code" do
        subject.sign_in!(user)
        delete :destroy, format: :json
        expect(response).to have_http_status(:success)
      end

      it "clears the session" do
        subject.sign_in!(user)
        delete :destroy, format: :json
        expect(session[:session_token]).to be nil
      end
    end
  end
end
