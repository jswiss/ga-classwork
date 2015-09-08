require 'sinatra'
require 'sinatra/reloader' if development?

require_relative './models/capitalize'
require_relative './models/pig_latin'

get '/' do
  "Hello World"
end

# get '/:word' do
#   "#{Capitalize.cap params[:word]}"
# end

get '/pig' do
  erb :pig
end

post '/pig' do
  phrase = params[:pig_text]
  binding.pry
  pigger = PigLatin.new
  pigged_phrase = pigger.pig(phrase).join(' ')
end


