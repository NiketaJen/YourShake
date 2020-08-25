class CreateAllergenItems < ActiveRecord::Migration[6.0]
  def change
    create_table :allergen_items do |t|
      t.integer :allergen_id
      t.integer :item_id
      t.timestamps
    end
  end
end
