class CreateLikes < ActiveRecord::Migration[7.0]
  def change
    create_table :likes do |t|
      t.references :user
      t.references :spot
      t.timestamps
    end
    add_index :likes, [:user_id, :spot_id], unique: true
  end
end
