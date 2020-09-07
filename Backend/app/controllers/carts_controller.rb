class CartsController < ApplicationController
    before_action :find_cart, only: [:edit, :show, :update, :destroy]
       
    def index
        carts = Cart.all
        render json: carts
    end

    def show
        render json: cart
    end

    def new
    end

    def create
        cart = Cart.create({cart_params})
        user = User.find(params[:user_id])
        render json: cart
    end

    def edit
        @user = User.find(session[:user_id])
        cart = @user.carts.last

    end

    def update
        cart = Cart.find(params[:id])
        if(params[:cart_item] == nil)
            newItem = Item.create({
                name: params[:newItem][:name],
                price: params[:newItem][:price],
                image: params[:newItem][:image],
                description: params[:newItem][:description]
            })

            newCartItem = CartItem.create({
                item_id: newCartItem.id,
                cart_id: cart.id
            })

            new_add_order = cart.cart_items.push(newCartItem)
            cart.update_attribute(:cart_items, new_add_order)
            user = User.find_by(id: cart.user_id)
            render json: user
        else
            del_cart_item = cart.cart_item.select{|i| i.item_id == params[:cart_item][:item_id]}.first
            upd_cart_item = cart.cart_item.select{|i| i.item_id != del_cart_item.item_id}
            cart.update_attribute(:cart_item, upd_cart_item)
            user = User.find_by(id: cart.user_id)
            render json: user
        end

    end

    def destroy
        @item = CartItem.find(params)

    end

    private
    def find_cart
        @cart = Cart.find(params[:id])
    end

    def cart_params
        params.require(:Cart).permit(:user_id)
    end
end
