class Changedatatypetocart < ActiveRecord::Migration
  def change
  	change_column :carts, :tran_id, :string
  end
end
