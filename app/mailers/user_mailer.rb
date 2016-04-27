class UserMailer < ApplicationMailer
	#default from: 'pratap224@gmail.com'

	def contact_email(user)
    @user = user
    # @url  = 'http://example.com/login'
    mail(:from => @user, to: "pratap224@gmail.com", subject: 'Welcome to My Awesome Site')
  end
end
