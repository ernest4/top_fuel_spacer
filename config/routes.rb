# frozen_string_literal: true

require 'sidekiq/web'
require 'sidekiq/cron/web'
# require_relative '../app/controllers/concerns/secured'

Rails.application.routes.draw do
  root 'game#index'
  # post '/' => 'home#index'

  # get 'auth/auth0/callback' => 'auth0#callback'
  # get 'auth/failure' => 'auth0#failure'
  # get 'auth/auth0/logout' => 'auth0#logout'
  # get 'auth/authenticated' => 'auth0#authenticated'

  # admin
  # namespace :admin do
  #   get '/' => 'admin#index'

  #   resources :users
  #   resources :things do
  #     collection do
  #       get 'some-thing'
  #     end
  #   end
  # end

  # constraints ->(request) { AuthConstraint.admin?(request) } do
  #   mount Sidekiq::Web => '/admin/sidekiq'
  # end

  # # public
  # mount ActionCable.server => '/cable'

  # resources :game

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
