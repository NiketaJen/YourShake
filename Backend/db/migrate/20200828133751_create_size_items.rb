class CreateSizeItems < ActiveRecord::Migration[6.0]
  def change
    create_table :size_items do |t|
      t.belongs_to :size
      t.belongs_to :item
      t.timestamps
    end
  end
end
