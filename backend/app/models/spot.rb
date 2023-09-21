class Spot < ApplicationRecord
  has_many :spot_favorites, dependent: :destroy
  has_many :users, through: :spot_favorites
end
