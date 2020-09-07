class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :email, :password

  has_many :carts

  def cart_items
    self.object.cart_items.map do | cart_items_object |
      {
        id: cart_items_object.id, 
        cart_id: cart_items_object.cart_id,
        item_id: cart_items_object.item_id,
      }
    end
  end

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
