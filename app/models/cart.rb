class Cart < ActiveRecord::Base
	validates :product_id, presence: true
	validates :user_id, presence:true
	validates :tran_id, presence:true
	validates :product_category, presence:true
end
			