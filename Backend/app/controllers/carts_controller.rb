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
    end

    def edit
        @user = User.find(session[:user_id])
        cart = @user.carts.last
    end

    def update
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
