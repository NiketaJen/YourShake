class AllergensController < ApplicationController
    def index
        allergens = Allergen.all 
        render json: allergens
    end

    def show
        allergen = Allergen.find(params[:id])
        render json: allergen
    end
end
