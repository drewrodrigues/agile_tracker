FactoryBot.define do
  factory :workflow do
    title { "MyString" }
    project_id { 1 }
    position { 1 }
  end

  factory :story do
    description { "MyString" }
    kind { "Feature" }
    points { 1 }
    position { 1 }
    status { "Unstarted" }
    title { "Agile Tracker" }
    workflow
  end

  factory :user do
    sequence(:email) { |n| "example#{n}@example.com" }
    password { "password" }
  end

  factory :project do
    sequence(:title) { |n| "Cool project #{n}" }
    user
  end
end