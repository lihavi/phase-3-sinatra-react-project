class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  configure do
    enable :sessions
    set :session_secret, "secret"
  end

  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end

  # Users routes
  get '/users' do
    users = User.all
    users.to_json
  end

  post '/register' do
    user = User.new(username: params[:username], email: params[:email], password: params[:password])
    if user.save
      token = encode_token(user.id)
      { user: user, token: token }.to_json
    else
      { error: user.errors.full_messages }.to_json
    end
  end

  post '/login' do
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      token = encode_token(user.id)
      { user: user, token: token }.to_json
    else
      { error: 'Invalid username or password' }.to_json
    end
  end

  # Projects routes
  get '/projects' do
    projects = Project.all
    projects.to_json
  end

  post '/projects' do
    project = Project.new(name: params[:name], description: params[:description], user_id: params[:user_id])
    if project.save
      project.to_json
    else
      { error: project.errors.full_messages }.to_json
    end
  end

  put '/projects/:id' do
    project = Project.find(params[:id])
    if project.update(name: params[:name], description: params[:description])
      project.to_json
    else
      { error: project.errors.full_messages }.to_json
    end
  end

  delete '/projects/:id' do
    project = Project.find(params[:id])
    if project.destroy
      project.to_json
    else
      { error: project.errors.full_messages }.to_json
    end
  end
end