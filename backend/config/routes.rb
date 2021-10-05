Rails.application.routes.draw do
  resources :toddlers
  resources :daycares do
    resources :children
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
