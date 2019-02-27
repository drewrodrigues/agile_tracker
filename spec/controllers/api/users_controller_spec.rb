require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do
  let(:valid_params) { attributes_for(:user) }
  let(:invalid_params) do
    attrs = attributes_for(:user)
    attrs.delete(:password)
    attrs
  end
  
  describe "POST create" do
    context "when signed out" do
      context "with valid params" do
        it "renders :show" do
          post :create, format: :json, params: { user: valid_params }
          expect(response).to render_template(:show)
        end
        
        it "signs the user in" do
          post :create, format: :json, params: { user: valid_params }
          expect(session[:session_token]).to eq(User.last.session_token)
        end
      end

      context "with invalid params" do
        it "returns :unprocessable_entity status code" do
          post :create, format: :json, params: { user: invalid_params }
          expect(response).to have_http_status(:unprocessable_entity)
        end

        it "returns error messages" do
          post :create, format: :json, params: { user: invalid_params }
          expect(JSON.parse(response.body)).to_not be_empty
        end
      end
    end

    context "when signed in" do
      it "returns :bad_request status code" do
        user = create(:user)
        subject.sign_in!(user)
        post :create, format: :json, params: { user: valid_params }
        expect(response).to have_http_status(:bad_request)
      end
    end
  end
end
