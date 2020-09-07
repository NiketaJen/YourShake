class UsersController < ApplicationController
    before_action :find_user, only: [ :edit, :update, :destroy]

    def index
        users = User.all 
        render json: users
    end

    def show
        @current_user = User.find(params[:id])
        render json: @current_user
    end


    def create
        user = User.create(user_params)

        if user.valid?
            # user.save
            # byebug
            current_user = user
            session[:user_id] = user.id
            cart = Cart.create(user_id: user.id)
            render json: {success: true, id: user.id}
        else
            render json: {
                success: false
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
