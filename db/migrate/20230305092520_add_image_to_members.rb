class AddImageToMembers < ActiveRecord::Migration[6.1]
  def change
    add_column :members, :image, :string
  end
end
