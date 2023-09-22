class Api::V1::LikesController < ApplicationController
  def create
    Like.create(params.require(:like).permit(:user_id, :spot_id))
    render json: { spots: Spot.list(:user_id) }
  end

  def destroy
    Like.destroy(params.require(:like).permit(:user_id, :spot_id))
    render json: { spots: Spot.list(:user_id) }
  end
end
