class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :description, :image, :size_id, :category_id

  has_many :sizes
  has_many :categories
  has_many :cart_items
  has_many :carts, through: :cart_items
  has_many :allergen_items
  has_many :allergens, through: :allergen_items
  has_many :flavor_items
  has_many :flavors, through: :flavor_items
end
