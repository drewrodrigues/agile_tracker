class ApplicationController < ActionController::Base
  helper_method :current_user, :signed_in?
  
  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def sign_in!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def sign_out!
    current_user.try(:reset_session_token!)
    session[:session_token] = nil
  end
  
  def require_sign_in
    if signed_out?
      render json: ["Sign in required"], status: :unauthorized
    end
  end
  
  def require_sign_out
    if signed_in?
      render json: ["Already signed in"], status: :bad_request
    end
  end

  def signed_in?
    !!current_user
  end

  def signed_out?
    !current_user
  end
end
