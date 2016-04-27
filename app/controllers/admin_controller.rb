class AdminController < ApplicationController
	layout "admin"
  before_filter :authorize
  
  def index
  end

  def admin_index
    @users = User.where("role_id = 1").paginate(:page => params[:page], :per_page => 10)
  end

  def user_index
    @users = User.where("role_id = 2").paginate(:page => params[:page], :per_page => 10)
  end
  def admin_new
    
  end
  def admin_create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      redirect_to '/admin/admin_index'
    else
      render 'admin_new'
    end    
  end

  def user_new
    
  end

  def user_create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      redirect_to '/admin/user_index'
    else
      render 'admin_new'
    end    
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation, :role_id)
  end
end
