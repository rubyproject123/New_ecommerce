class BrandsController < ApplicationController
  layout "admin"
  before_filter :authorize
  before_action :set_brand, only: [:show, :edit, :update, :destroy]

  # GET /brands
  # GET /brands.json
  def index
    @brandnames = Brand.all
  end

  # GET /brands/1
  # GET /brands/1.json
  def show
  end

  # GET /brands/new
  def new
    @brandname = Brand.new
  end

  # GET /brands/1/edit
  def edit
  end

  # POST /brands
  # POST /brands.json
  def create
    @brandname = Brand.new(brand_params)

    respond_to do |format|
      if @brandname.save
        format.html { redirect_to @brandname, notice: 'Brand was successfully created.' }
        format.json { render :show, status: :created, location: @brandname }
      else
        format.html { render :new }
        format.json { render json: @brandname.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /brands/1
  # PATCH/PUT /brands/1.json
  def update
    respond_to do |format|
      if @brandname.update(brand_params)
        format.html { redirect_to @brandname, notice: 'Brand was successfully updated.' }
        format.json { render :show, status: :ok, location: @brandname }
      else
        format.html { render :edit }
        format.json { render json: @brandname.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /brands/1
  # DELETE /brands/1.json
  def destroy
    @brandname.destroy
    respond_to do |format|
      format.html { redirect_to brands_url, notice: 'Brand was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_brand
      @brandname = Brand.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def brand_params
      params.require(:brand).permit(:name)
    end
end
