Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "products#index"
  resources :products, only: [:index, :create]
  namespace :api do
    resources :products, only: [:index, :show, :create]
  end
end
