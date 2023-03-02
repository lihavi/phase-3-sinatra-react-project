class UsersController < ApplicationController

  get '/users' do
    # code to retrieve and return user data
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
  end
  