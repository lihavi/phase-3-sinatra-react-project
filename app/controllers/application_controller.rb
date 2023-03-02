class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  # define route for login page
get '/' do
  erb :login
end

# handle login form submission
post '/login' do
  user = User.find_by(email: params[:email], password: params[:password])
  if user
    session[:user_id] = user.id
    redirect '/dashboard'
  else
    @error = 'Invalid email or password'
    erb :login
  end
end

# define route for dashboard
get '/dashboard' do
  @user = User.find(session[:user_id])
  @projects = @user.projects
  erb :dashboard
end

# handle new project form submission
post '/projects' do
  @user = User.find(session[:user_id])
  @project = Project.create(name: params[:name], description: params[:description], due_date: params[:due_date], status: params[:status])
  ProjectMembership.create(user_id: @user.id, project_id: @project.id)
  redirect '/dashboard'
end

# handle project deletion
delete '/projects/:id' do
  @project = Project.find(params[:id])
  @project.destroy
  redirect '/dashboard'
end

# handle project status update
put '/projects/:id' do
  @project = Project.find(params[:id])
  @project.update(status: params[:status])
  redirect '/dashboard'
end

# handle project membership form submission
post '/project_memberships' do
  @user = User.find_by(email: params[:email])
  @project = Project.find(params[:project_id])
  if @user && @project
    ProjectMembership.create(user_id: @user.id, project_id: @project.id)
    redirect '/dashboard'
  else
    @error = 'Invalid email or project'
    erb :dashboard
  end
end

# handle logout
get '/logout' do
  session.clear
  redirect '/'
end
end