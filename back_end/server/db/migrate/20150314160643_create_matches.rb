class CreateMatches < ActiveRecord::Migration
  def change
    create_table :matches do |t|
      t.string :section
      t.string :level
      t.string :contend

      t.timestamps null: false
    end
  end
end
