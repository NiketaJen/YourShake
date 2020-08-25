class FlavorItem < ApplicationRecord
    belongs_to :flavor 
    belongs_to :item
end
