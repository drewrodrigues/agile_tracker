require 'rails_helper'

class MockController < ApplicationController
  before_action :require_sign_in, only: :sign_in_required
  before_action :require_sign_out, only: :sign_out_required

  def sign_in_required
    render json: ["Got through"], status: 200
  end

  def sign_out_required
    render json: ["Got through"], status: 200
  end
end

RSpec.describe MockController, type: :controller do
  let(:user) { build(:user) }

  before do
    Rails.application.routes.draw do
      constraints format: :json do
        get "/sign_in_required" => "mock#sign_in_required"
        get "/sign_out_required" => "mock#sign_out_required"
      end
    end
  end

  after do
    Rails.application.reload_routes!
  end

  describe "#current_user" do
    context "when signed in" do
      it "returns the current user" do
        subject.sign_in!(user)
        expect(subject.current_user).to eq(user)
      end
    end

    context "when signed out" do
      it "returns nil" do
        expect(subject.current_user).to be nil
      end
    end
  end

  describe "#sign_in!" do
    it "calls reset_session_token on user" do
      expect(user).to receive(:reset_session_token!)
      subject.sign_in!(user)
    end
  
    it "sets current_user to user" do
      subject.sign_in!(user)
      expect(subject.current_user).to eq(user)
    end

    it "sets the session_token to the same as the user's session token" do
      subject.sign_in!(user)
      expect(session[:session_token]).to eq(user.session_token)
    end
  end

  describe "#sign_out!" do
    it "calls reset_session_token! on user" do
      subject.sign_in!(user)
      expect(user).to receive(:reset_session_token!)
      subject.sign_out!
    end

    it "clears the session token" do
      subject.sign_in!(user)
      subject.sign_out!
      expect(session[:session_token]).to be nil
    end
  end

  describe "#require_sign_in" do
    context "when signed in" do
      it "returns nil" do
        subject.sign_in!(user)
        get :sign_in_required
        expect(response).to have_http_status(:success)
      end
    end

    context "when signed out" do
      it "returns :unauthorized status code" do # TODO: how to response / short
        get :sign_in_required
        expect(response).to have_http_status(:unauthorized)
      end
    end
  end

  describe "#require_sign_out" do
    context "when signed in" do # TODO: how to response / short
      it "returns :bad_request status code" do
        subject.sign_in!(user)
        get :sign_out_required
        expect(response).to have_http_status(:bad_request)
      end
    end

    context "when signed out" do
      it "returns success" do
        get :sign_out_required
        expect(response).to have_http_status(:success)  
      end
    end
  end

  describe "#signed_in?" do
    context "when signed in" do
      it "returns true" do
        subject.sign_in!(user)
        expect(subject.signed_in?).to be true
      end
    end

    context "when signed out" do
      it "returns false" do
        expect(subject.signed_in?).to be false
      end
    end
  end

  describe "#signed_out?" do
    context "when signed in" do
      it "returns false" do
        expect(subject.signed_in?).to be false
      end
    end

    context "when signed out" do
      it "returns true" do
        expect(subject.signed_out?).to be true
      end
    end
  end
end