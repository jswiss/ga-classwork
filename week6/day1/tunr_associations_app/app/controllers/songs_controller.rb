class SongsController < ApplicationController

	def show
		@song = Song.find(params[:id])
		# binding.pry
	end

	def new
		@song = Song.new
		@artists = Artist.all
	end

end
