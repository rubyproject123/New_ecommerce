class ProductcategoriesController < ApplicationController
  layout "admin"
  before_filter :authorize
  before_action :set_productcategory, only: [:show, :edit, :update, :destroy]

  # GET /productcategories
  # GET /productcategories.json
  def index
    @productcategories = Productcategory.all.paginate(:page => params[:page], :per_page => 10)
  end

  # GET /productcategories/1
  # GET /productcategories/1.json
  def show
  end

  # GET /productcategories/new
  def new
    @productcategory = Productcategory.new
  end

  # GET /productcategories/1/edit
  def edit
  end

  # POST /productcategories
  # POST /productcategories.json
  def create
    @productcategory = Productcategory.new(productcategory_params)

    respond_to do |format|
      if @productcategory.save
        format.html { redirect_to @productcategory, notice: 'Productcategory was successfully created.' }
        format.json { render :show, status: :created, location: @productcategory }
      else
        format.html { render :new }
        format.json { render json: @productcategory.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /productcategories/1
  # PATCH/PUT /productcategories/1.json
  def update
    respond_to do |format|
      if @productcategory.update(productcategory_params)
        format.html { redirect_to @productcategory, notice: 'Productcategory was successfully updated.' }
        format.json { render :show, status: :ok, location: @productcategory }
      else
        format.html { render :edit }
        format.json { render json: @productcategory.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /productcategories/1
  # DELETE /productcategories/1.json
  def destroy
    @productcategory.destroy
    respond_to do |format|
      format.html { redirect_to productcategories_url, notice: 'Productcategory was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_productcategory
      @productcategory = Productcategory.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def productcategory_params
      params.require(:productcategory).permit(:name)
    end
end
