class Api::V1::SpotsController < ApplicationController
  def index
    render json: { spots: Spot.all }
  end

  def show
    render json: { spot: Spot.find(params[:id]) }, methods: [:image_url]
  end

  def create
    spot = Spot.create(params.require(:spot).permit(:name, :url, :summary, :prefecture_code, :min_budget, :max_budget, :image))
    render json: { spot: spot }, methods: [:image_url]
  end

  def update
    spot = Spot.find(params[:id])
    spot.update(params.require(:spot).permit(:name, :url, :summary, :prefecture_code, :min_budget, :max_budget, :image))
    spot.image.attach(params[:image])
    render json: { spot: spot }, methods: [:image_url]
  end
end
