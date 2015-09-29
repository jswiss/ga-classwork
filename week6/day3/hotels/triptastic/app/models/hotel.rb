class Hotel < ActiveRecord::Base
	
	has_many :reviews

	validates :name, presence: true
	validates :city, presence: true
	validates :country, presence: true

	def average_rating
		return "No ratings yet" if reviews.empty?
		# ratings = []
		# self.reviews.each do |review|
		# 	ratings << review.ratings
		# end
		# ratings.inject(:+) / ratings.count
		self.reviews.map { |review| review.rating }.inject(:+) / self.reviews.count

	end

end

