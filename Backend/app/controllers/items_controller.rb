class ItemsController < ApplicationController
    def index
        items = Item.all
        render json: items
    end

    def singleItem
        item = Item.find_by(id: params[:id]) 
        render json: item
    end
end
