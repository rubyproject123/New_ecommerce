class Product < ActiveRecord::Base
	
	mount_uploader :image, ImageUploader
  validates :name, presence: true
  validates :product_category_id, presence: true
  validates :brand_id, presence: true
  validates :price, presence: true
  validates :image, presence: true
  validates :description, presence: true

	def self.search search_term
    return scoped unless search_term.present?

    if search_term =~ /\A\d+\z/ ? true : false
      
      where([' year = ? ', "#{search_term}"])
    else
      where(['name LIKE ? ', "%#{search_term}%"])
    end
    
  end
	
end