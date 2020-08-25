class CreateFlavorItems < ActiveRecord::Migration[6.0]
  def change
    create_table :flavor_items do |t|
      t.integer :flavor_id
      t.integer :item_id
      t.timestamps
    end
  end
end
