class CreateCarts < ActiveRecord::Migration[6.0]
  def change
    create_table :carts do |t|
      t.float :total
      t.belongs_to :user
      t.timestamps
    end
  end
end
