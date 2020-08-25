class Allergen < ApplicationRecord
    has_many :allergen_items
    has_many :items, through: :allergen_items
end
