Rails.application.routes.draw do
  resources :products
  resources :brands
  resources :productcategories
  resources :testimonials
  get 'admin/index'
  get 'admin/admin_new'
  post "admin_create" => "admin#admin_create", :as => :admin_create 
  get 'admin/user_new'
  get 'admin/orders_index'
  post "user_create" => "admin#user_create", :as => :user_create 
  #get 'home/products' => "home#products", :as => :home_product
  #get 'home/index'
   get 'home/products/:id' => "home#products", :as => :home_product
  get "product_desc/:id" => "home#product_desc", :as => :product_desc
  #get 'home/product_desc'
  get 'home/shipingAddress'
  get 'home/contact_us'
  post 'home/create_contactus'
  get 'home/mobiles'
  get 'home/computers'
  get 'home/product_sucess'
  post 'home/statuscreate'
  get "mobile_desc/:id" => "home#mobile_desc", :as => :mobile_desc
  get "computer_desc/:id" => "home#computer_desc", :as => :computer_desc
  get "cartdel/:id" => "home#cartdel", :as => :cartdel
  # get 'admin/user_index'
  # get 'admin/user_show'
  # get 'admin/user_new'
  # get 'admin/add_admin'
  # get 'admin/admin_new'
   get 'admin/admin_index'
   get 'admin/user_index'
   get 'home/checkout'
   get 'home/deals'
   get 'home/cartcreate'
  # post 'admin_create' => 'admin#admin_create'
  # get 'admin/admin_show'
  # get 'admin/admin_edit'
  # post 'admin/admin_update'
  # delete 'admin/admin_destroy'

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
   root 'home#index'
   get '/signup' => 'users#new'
    post '/users' => 'users#create'

  get '/login' => 'users#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
