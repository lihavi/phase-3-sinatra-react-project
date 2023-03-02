class Project < ActiveRecord::Base
    belongs_to :user
  
    enum status: { incomplete: 0, in_progress: 1, complete: 2 }
  end
  