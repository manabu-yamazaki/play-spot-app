class CreateSpotFavorites < ActiveRecord::Migration[7.0]
  def change
    create_table :spot_favorites do |t|
      t.references :user
      t.references :spot
      t.timestamps
    end
  end
end
