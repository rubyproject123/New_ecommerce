# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
@adminuser = User.find_by_email("admin@gmail.com")
if @adminuser.nil?
  @admin = User.new(:email => "admin@gmail.com",:password => "testing123",:password_confirmation => "testing123",:name => "admin",:role_id => 1)
  # binding.pry
# @admin.skip_confirmation!
@admin.save
end