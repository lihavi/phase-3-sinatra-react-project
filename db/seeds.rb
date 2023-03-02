puts "🌱 Seeding spices..."

# Make 5 users
5.times do
    User.create(
      username: Faker::Internet.username,
      email: "#{Faker::Internet.username}@gmail.com",
      password: Faker::Internet.password(min_length: 8),
      )
  end
  
  # Make 10 projects
  10.times do
    # create a projects with random data
  project = Project.create(
      name: Faker::ProgrammingLanguage.name,
      title: Faker::Lorem.sentence,
      description: Faker::Lorem.sentence,
    )
    
    # create between 1 and 5 members for each project
    rand(1..5).times do
      # get a random user for every member
      # https://stackoverflow.com/a/25577054
      user = User.order('RANDOM()').first
  
      # A member belongs to a project and a user, so we must provide those foreign keys
      Member.create(
        name: Faker::Name.name,
        email: "#{Faker::Internet.name}@gmail.com",
        user: user,
        project: project
      )
    end
  end

puts "✅ Done seeding!"
