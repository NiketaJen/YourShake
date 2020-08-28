class CreateCategoryItems < ActiveRecord::Migration[6.0]
  def change
    create_table :category_items do |t|
      t.belongs_to :category
      t.belongs_to :item
      t.timestamps
    end
  end
end
