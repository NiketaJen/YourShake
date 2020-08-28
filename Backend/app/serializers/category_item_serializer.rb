class CategoryItemSerializer < ActiveModel::Serializer
  attributes :id, :category_id, :item_id
end
