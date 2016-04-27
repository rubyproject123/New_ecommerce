class Addfieldtocart < ActiveRecord::Migration
  def change
  	add_column :carts, :product_category, :integer
  end
end
