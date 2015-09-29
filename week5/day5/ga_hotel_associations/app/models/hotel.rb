class Hotel < ActiveRecord::Base
	has_many :reviews
	has_many :guests, through: :reviews
end
