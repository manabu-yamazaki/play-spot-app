class CreateSpots < ActiveRecord::Migration[7.0]
  def change
    create_table :spots do |t|
      t.string :name, null: false, default: ''
      t.text :url
      t.text :summary
      t.integer :prefecture_code, null: false, default: 0
      t.integer :min_budget
      t.integer :max_budget

      t.timestamps
    end
  end
end
