class UsersController < ApplicationController
    before_action :find_user, only: [:show, :edit, :update, :destroy]

    def index
        users = User.all 
        render json: users
    end

    def new
        user = User.new
       
    end

    def create
        user = User.new(user_params)

        if user.valid?
            user.save
            cart = Cart.create(user_id: user.id)
            render json: user
        else
            render json: {
                message: user.errors.messages
            }
        end
    end

    def edit
    end

    def update
        user.update(user_params)
        render json: user
    end

    def destroy
    end

    private
    def find_user
        user = User.find(params[:id])
    end

   

    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :password, :username)
    end
end
