class CreateAllergenItems < ActiveRecord::Migration[6.0]
  def change
    create_table :allergen_items do |t|
      t.belongs_to :allergen
      t.belongs_to :item
      t.timestamps
    end
  end
end
