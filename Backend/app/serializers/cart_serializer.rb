class CartSerializer < ActiveModel::Serializer
  attributes :id, :total, :user_id

  belongs_to :user
  has_many :cart_items
  has_many :items, through: :cart_items
end
