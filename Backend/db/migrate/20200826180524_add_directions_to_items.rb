class AddDirectionsToItems < ActiveRecord::Migration[6.0]
  def change
    add_column :items, :directions, :string
  end
end
