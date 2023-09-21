class Api::V1::SpotFavoritesController < ApplicationController
  def create
    SpotFavorite.create(params.require(:spot_favorite).permit(:user_id, :spot_id))
    render json: { spots: Spot.all }
  end

  def destroy
    SpotFavorite.destroy(params.require(:spot_favorite).permit(:user_id, :spot_id))
    render json: { spots: Spot.all }
  end
end
