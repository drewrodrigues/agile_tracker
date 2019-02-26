require 'rails_helper'

RSpec.describe ApplicationController, type: :controller do
  let(:user) { build(:user) }

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
        expect(subject.require_sign_in).to be nil
      end
    end

    context "when signed out" do
      it "returns :unauthorized status code" do # TODO: how to response / short
        # debugger
        expect(subject.require_sign_in).to have_http_status(:unauthorized)
      end
    end
  end

  describe "#require_sign_out" do
    context "when signed in" do # TODO: how to response / short
      it "returns :bad_request status code" do
        # debugger
        expect(subject.require_sign_out).to have_http_status(:bad_request)
      end
    end

    context "when signed out" do
      it "returns nil" do
        expect(subject.require_sign_out).to be nil  
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