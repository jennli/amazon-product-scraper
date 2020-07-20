class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :asin
      t.string :category
      t.string :rank
      t.string :dimensions

      t.timestamps
    end
  end
end
