class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.integer :product_category_id
      t.integer :brand_id
      t.integer :price
      t.string :image
      t.text :description

      t.timestamps null: false
    end
  end
end
