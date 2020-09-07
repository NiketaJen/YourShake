class CartSerializer < ActiveModel::Serializer
  attributes :id, :total, :user_id, :items

  belongs_to :user
  has_many :cart_items
  has_many :items, through: :cart_items

  def items
    self.object.items.map do | items_object |
      {
        id: items_object.id, 
        name: items_object.name,
        image: items_object.image,
        price: items_object.price,
      }
    end
  end

end
