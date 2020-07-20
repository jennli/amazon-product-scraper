require 'nokogiri'
require 'httparty'

class ProductsController < ApplicationController
  before_action :set_product, only: [:show]

  # GET /products
  def index
    @products = Product.all

    respond_to do |format|
      format.html { render :index }
      format.json { render json: @products.to_json }
    end

  end

  # # GET /products/1
  # def show
  #   render json: @product
  # end

  # # POST /products
  # def create
  #   @product = Product.new(product_params)

  #   if @product.save
  #     render json: @product, status: :created, location: @product
  #   else
  #     render json: @product.errors, status: :unprocessable_entity
  #   end
  # end

  # private
  #   # Use callbacks to share common setup or constraints between actions.
  #   def set_product
  #     @product = Product.find(params[:id])
  #   end

  #   # Only allow a trusted parameter "white list" through.
  #   def product_params
  #     params.require(:product).permit(:name, :category, :dimensions, :rank, :asin)
  #   end
end
