class Api::V1::SpotsController < ApplicationController
  def index
    render json: { spots: Spot.all}
  end

  def show
    render json: { spot: Spot.find(params[:id])}
  end

  def create
  end

  def update
  end
end
