class Api::SessionsController < ApplicationController
  before_action :require_sign_out, only: :create
  before_action :require_sign_in, only: :destroy

  def create
    @user = User.find_by_credentials(email, password)
    if @user
      sign_in!(@user)
      render "api/users/show"
    else
      render json: ["Failed to authenticate"], status: :unprocessable_entity
    end
  end

  def destroy
    sign_out!
  end

  private

  def session_params
    params.require(:user).permit(:email, :password)
  end

  def email
    session_params[:email]
  end

  def password
    session_params[:password]
  end
end
