class WhiskyController < ApplicationController

	def home
		render text: 'home'
	end

	def about_us
		render text: 'about'
	end

	def locations
		render text: 'locations'
	end

	def styles
		render text: 'styles'
	end

end