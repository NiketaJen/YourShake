class CartItemsController < ApplicationController

    def create
        cart_item = CartItem.new(cartItem_params)
        render json: cart_item
    end

    private
    def cartItem_params
        params.require(:cart_item).permit(:item_id, :cart_id)
    end
end
