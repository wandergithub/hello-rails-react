Rails.application.routes.draw do
  get 'root/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "message#index"
  
  # Selects a random greeting from table
  get '/message', to: 'message#index'
end
