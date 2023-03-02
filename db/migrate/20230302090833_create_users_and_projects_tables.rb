class CreateUsersAndProjectsTables < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.timestamps
    end
    create_table :projects do |t|
      t.string :title
      t.string :description
      t.integer :status
      t.references :user, null: false, foreign_key: true
      t.timestamps
  end
end
end
