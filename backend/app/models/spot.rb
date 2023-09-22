class Spot < ApplicationRecord
  has_many :likes, dependent: :destroy
  has_many :users, through: :likes
  def self.list(user_id)
    self.all.map {|spot| { **spot.attributes, like: spot.likes.where(user_id: user_id).count > 0 }}
  end
end
