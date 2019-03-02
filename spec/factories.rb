FactoryBot.define do
  factory :story do
    description { "MyString" }
    kind { "Feature" }
    order { 1 }
    points { 1 }
    project
    status { "Unstarted" }
    title { "Agile Tracker" }
    workflow { "Icebox" }
  end

  factory :user do
    sequence(:email) { |n| "example#{n}@example.com" }
    password { "password" }
  end

  factory :project do
    title { "Cool project" }
    user
  end
end