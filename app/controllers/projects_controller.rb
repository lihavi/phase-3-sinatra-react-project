class ProjectsController < ApplicationController
    before do
      authenticate
    end
  
    get '/projects' do
      projects = @user.projects
      projects.to_json(include: :user)
    end
  
   # post '/' do
      #project = @user.projects.build(title: params[:title], description)
  end