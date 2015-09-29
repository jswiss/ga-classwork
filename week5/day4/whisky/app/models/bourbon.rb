class Bourbon < ActiveRecord::Base

	def change
		create_table :bourbons do |t|
			t.string :name
			t.integer :age
			t.text :tasting_notes 
		end

end
