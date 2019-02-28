# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Project.destroy_all

ActiveRecord::Base.transaction do
  demo_user = User.create!(
    email:    "example@example.com",
    password: "password"
  )

  Project.create!([
    { title: "Cool project",         user: demo_user },
    { title: "Another cool project", user: demo_user },
    { title: "Agile Tracker",        user: demo_user },
    { title: "Trip Mates",           user: demo_user }
  ])
end