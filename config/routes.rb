Rails.application.routes.draw do
  root 'root#index'

  get '/message', to: 'message#index'
end