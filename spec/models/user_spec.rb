# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  email           :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:user) { build(:user) }

  describe "validations" do
    it { is_expected.to have_many(:projects) }
    it { is_expected.to have_many(:stories) }
    it { is_expected.to have_many(:workflows) }

    it { is_expected.to validate_presence_of(:email) }
    it { is_expected.to validate_presence_of(:password_digest) }
    it { is_expected.to validate_presence_of(:session_token) }
    
    it { is_expected.to validate_uniqueness_of(:email) }
    it { is_expected.to validate_uniqueness_of(:session_token) }

    it { is_expected.to validate_length_of(:password).is_at_least(8).allow_nil }

    describe "initialize" do
      it "sets the session_token" do
        expect(build(:user).session_token).to_not be nil
      end
    end
  end


  describe "::find_by_credentials" do
    context "when email and password are correct" do
      it "returns user" do
        user = create(:user, email: "example@example.com", password: "password")
        result = User.find_by_credentials(user.email, user.password)
        expect(result).to eq(user)
      end
    end

    context "when email incorrect" do
      it "returns nil" do
        user = create(:user, email: "example@example.com", password: "password")
        result = User.find_by_credentials("incorrect", user.password)
        expect(result).to be nil
      end
    end

    context "when password incorrect" do
      it "returns nil" do
        user = create(:user, email: "example@example.com", password: "password")
        result = User.find_by_credentials(user.email, "incorrect")
        expect(result).to be nil
      end
    end
  end

  describe "::generate_session_token" do
    it "delegates to SecureRandom::urlsafe_base64" do
      expect(SecureRandom).to receive(:urlsafe_base64)
      User.generate_session_token
    end
  end

  describe "#ensure_session_token" do
    context "when session_token nil" do
      it "assigns session_token with generate_session_token" do
        user.session_token = nil
        expect(user.session_token).to be nil
        user.ensure_session_token
        expect(user.session_token).to_not be nil          
      end
    end

    context "when session_token not nil" do
      it "doesn't change the session_token" do
        expect(user.session_token).to_not be nil
        expect {
          user.ensure_session_token
        }.to_not change(user, :session_token)
      end
    end
  end

  describe "#is_password?" do
    context "when password correct" do
      it "returns true" do
        user = build(:user, password: "somePassword")
        expect(user.is_password?("somePassword")).to be true
      end
    end
    
    context "when password incorrect" do
      it "returns false" do
        user = build(:user, password: "somePassword")
        expect(user.is_password?("wrongPassword")).to be false
      end
    end
  end

  describe "#password" do
    it "returns @password" do
      expect(user.password).to eq(user.instance_variable_get(:@password))
    end
  end
      
  describe "#password=" do
    it "sets @password" do
      user.password = "new_password"
      expect(user.password).to eq("new_password")
    end

    it "sets password_digest to a BCrypt password" do
      user.password = "new_password"
      expect {
        BCrypt::Password.new(user.password_digest)
      }.to_not raise_error
    end
  end

  describe "#reset_session_token!" do
    it "assigns a new session token" do
      expect {
        user.reset_session_token!
      }.to change(user, :session_token)
    end

    it "calls ::generate_session_token" do
      # since ::generate_session_token is called upon initialization
      expect(User).to receive(:generate_session_token).exactly(2).times
      user.reset_session_token!
    end

    it "saves the user" do
      expect(user).to receive(:save)
      user.reset_session_token!
    end

    it "returns the new session_token" do
      expect(user.reset_session_token!).to be_a(String)
    end
  end
end
