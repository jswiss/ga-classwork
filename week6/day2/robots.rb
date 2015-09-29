class Robot

	attr_reader :instruction_count

	def initialize
		@instruction_count = 0
	end
	
	def set_name
		random_letters = ('a'..'z').to_a.sample(2)
		random_numbers = (0..9).to_a.sample(3)
		(random_letters + random_numbers).join()
	end

	def name
		@instruction_count += 1
		@name = @name || set_name
	end

	def reset
		@instruction_count += 1
		@name = nil #since @name is now nil, the name method will set it equal to set_name rather than @name, thus giving it a new name!
	end

	# def instruction_count #getter method. Allows us to access instance variable from outside of class
	# 	@instruction_count
	# end

end

puts robot1 = Robot.new
puts robot1.instruction_count
puts robot1.name
puts robot1.name
puts robot1.name

robot1.reset
puts robot1.instruction_count
puts robot1.name
puts robot1.name
puts robot1.name

