class Item < ApplicationRecord
    has_many :size_items
    has_many :sizes, through: :size_items
    has_many :category_items
    has_many :categories, through: :category_items
    has_many :cart_items
    has_many :carts, through: :cart_items
    has_many :allergen_items
    has_many :allergens, through: :allergen_items
    has_many :flavor_items
    has_many :flavors, through: :flavor_items
end
