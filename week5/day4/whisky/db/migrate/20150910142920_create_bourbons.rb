class CreateBourbons < ActiveRecord::Migration
  def change
    create_table :bourbons do |t|

      t.timestamps null: false
    end
  end
end
