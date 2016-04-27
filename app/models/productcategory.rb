class Productcategory < ActiveRecord::Base
	validates :name, presence: true
end
