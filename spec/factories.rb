FactoryBot.define do
  factory :user do
    sequence(:email) { |n| "example#{n}@example.com" }
    password { "password" }
  end

  factory :project do
    title { "Cool project" }

    before :create do |project|
      project.user { create(:user) }
    end
  end
end