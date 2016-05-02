class HomeController < ApplicationController
  layout "application"
  before_action :set_mobile, only: [:mobile_desc]
  before_action :set_computer, only: [:computer_desc]
  def index
    @testimonials = Testimonial.last(3)
  end
  def mobiles
  	 # @mobiles = Mobile.all.paginate(:page => params[:page], :per_page => 10)
    #  @mobiles = 
       @products = Products.where("product_category_id =?",params[:id])
       

  end
  def computers
     @computers = Computer.all.paginate(:page => params[:page], :per_page => 10)
  end

  def products 

     @products = Product.where("product_category_id =?",params[:id]).paginate(:page => params[:page], :per_page => 10)
       
  end

  def product_desc 
      @productdesc = Product.find(params[:id])
      

  end

  def mobile_desc
    
  end
  def computer_desc
  	#@computer = Computer.find(params[:id])
  end

  def shipingAddress

   
    @user = current_user
  	
  end

  def product_sucess
    Cart.where(:tran_id => session[:CART_TEMP_RANDOM]).update_all(:status => "pending")
    session[:CART_TEMP_RANDOM] = nil
    redirect_to root_path, :flash => { :notice => "Order Purchased Sucessfully" }
  end

  def contact_us
    
  end

  def checkout
     @details = Cart.where(:tran_id => session[:CART_TEMP_RANDOM]);

     
  end

  def statuscreate
    Cart.where(:tran_id => params[:tran_id]).update_all(:status => params[:order_status])
    redirect_to admin_orders_index_path
  end

  def deals
    @products = Product.last(6)
    #@computers = Computer.last(3)
  end

  def create_contactus
    contact =  ContactU.new(contact_params)
    if contact.save
    
      UserMailer.contact_email(contact).deliver()
      redirect_to '/'
    else
      render 'contact_us'
    end
    
  end

  def cartcreate

    if session[:CART_TEMP_RANDOM] == nil

       session[:CART_TEMP_RANDOM] = SecureRandom.random_number(1_000_000_000_0)

    end
    
    ranid = session[:CART_TEMP_RANDOM]
      @cart = Cart.new(:product_id => params[:product_id] ,:user_id => params[:user_id],:tran_id => "#{ranid}", :product_category => params[:product_category])
      if @cart.save
        redirect_to home_checkout_path
      end
      # binding.pry

  end

  def cartdel
     Cart.destroy(params[:id]) 
     redirect_to home_checkout_path
  end
  private

  def contact_params
    params.require(:contact).permit(:name, :email, :message)    
  end
  def set_mobile
      @mobile = Mobile.find(params[:id])

    end
  def set_computer
      @computer = Computer.find(params[:id])
    end
end
