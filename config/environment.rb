# Load the Rails application.
require File.expand_path('../application', __FILE__)

# Initialize the Rails application.
Rails.application.initialize!

ActionMailer::Base.smtp_settings = {
   :address => "smtp.gmail.com",
   :port => 587,
   :domain => "www.gmail.com",
   :user_name => "pratap224@gmail.com",
   :password => "",
   :authentication => :plain
}




