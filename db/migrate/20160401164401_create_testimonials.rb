class CreateTestimonials < ActiveRecord::Migration
  def change
    create_table :testimonials do |t|
      t.string :name
      t.string :designation
      t.string :image
      t.text :descrition

      t.timestamps null: false
    end
  end
end
