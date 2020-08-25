class Flavor < ApplicationRecord
    has_many :flavor_items
    has_many :items, through: :flavor_items
end
