class CreateFlavorItems < ActiveRecord::Migration[6.0]
  def change
    create_table :flavor_items do |t|
      t.belongs_to :flavor
      t.belongs_to :item
      t.timestamps
    end
  end
end
