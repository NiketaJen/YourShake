Rails.application.routes.draw do
  resources :category_items
  resources :size_items
  resources :sizes
  resources :categories
  resources :allergens
  resources :allergen_items
  resources :flavor_items
  resources :flavors
  post("/singleItem", to: "items#singleItem")
  resources :items
  resources :cart_items
  resources :carts
  resources :users
  post '/account/login', to:'authentication#create'
  get '/check-loggin', to:'authentication#check_loggin'
  get '/logout', to:'authentication#logout'
 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
