class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :name
      t.float :price
      t.text :description
      t.string :image
      t.integer :size_id
      t.integer :category_id
      t.timestamps
      
    end
  end
end
