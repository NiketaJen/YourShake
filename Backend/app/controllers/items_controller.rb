class ItemsController < ApplicationController
    def index
        items = Item.all
        render json: items
    end

    def singleItem
        item = Item.find(params[:id]) 
        render json: item
    end
end
