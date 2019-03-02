Rails.application.routes.draw do
  root "static_pages#root"
  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource  :session, only: [:create, :destroy]
    resources :projects, only: [:show, :create, :update, :index, :destroy] do
      resources :stories, only: :create
    end
    resources :stories, only: [:update, :destroy]
  end
end
