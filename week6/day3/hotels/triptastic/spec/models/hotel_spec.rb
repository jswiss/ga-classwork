require 'rails_helper'

	describe Hotel do 
		
		# let(:ice_hotel) { Hotel.new(name: 'The Ice Hotel',
		# 												city: 'New Swindon',
		# 												country: 'United States of America')}

		it 'must have a name' do
			hotel = Hotel.new
			expect(hotel.valid?).to eq false
		end

		it 'must have a city' do
			hotel = Hotel.new(name: 'Rohotel')
			expect(hotel.valid?).to eq false
		end

		it 'must have a country' do
			hotel = Hotel.new(name: 'Rohotel', city: 'Swindon')
			expect(hotel.valid?).to eq false
		end

		context 'no ratings' do

			it 'returns no ratings yet' do
			ice_hotel = Hotel.new(name: 'The Ice Hotel',
														city: 'New Swindon',
														country: 'United States of America')
			
			expect(ice_hotel.average_rating).to eq 'No ratings yet'
			end
		end

		# context 'one rating' do
		# 	it 'returns that rating' do
		# 		ice_hotel = Hotel.new(name: 'The Ice Hotel',
		# 												city: 'New Swindon',
		# 												country: 'United States of America')

		# 		ice_hotel.reviews << Review.new(description: 'Great!', rating: 5)

		# 		expect(ice_hotel.average_rating).to eq 5
		# 	end
		# end

		context 'many ratings' do
			it 'returns the average of all of the ratings' do
				ice_hotel = Hotel.new(name: 'The Ice Hotel',
														city: 'New Swindon',
														country: 'United States of America')
				ice_hotel.reviews << Review.new(description: 'Great', rating: 5)
				ice_hotel.reviews << Review.new(description: 'Ok!', rating: 4)
				ice_hotel.reviews << Review.new(description: 'Decent', rating: 3)
				ice_hotel.reviews << Review.new(description: 'A bit shit', rating: 2)
				ice_hotel.reviews << Review.new(description: 'The blurst', rating: 1)
			
				expect(ice_hotel.average_rating).to eq 3
			end 
		end

	end

