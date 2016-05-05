class Testimonial < ActiveRecord::Base
	mount_uploader :image, TestImageUploader
	validates :name, presence: true
	validates :designation, presence: true
	validates :image, presence: true
	validates :descrition, presence: true
end