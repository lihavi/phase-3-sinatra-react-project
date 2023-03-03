class User < ActiveRecord::Base
  has_many :project_memberships
  has_many :projects, through: :project_memberships
  #validates :password, length: { minimum: 8  }

  has_secure_password
  end