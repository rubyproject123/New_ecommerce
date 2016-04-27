class Testimonial < ActiveRecord::Base
	mount_uploader :image, TestImageUploader
end
