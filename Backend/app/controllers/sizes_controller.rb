class SizesController < ApplicationController
    def index
        sizes = Size.all 
        render json: sizes
    end

    def show
        size = Size.find(params[:id])
        render json: size
    end
end
