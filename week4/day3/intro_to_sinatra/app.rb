require 'sinatra'
require 'sinatra/reloader' if development?
require 'pry'

get '/' do #when someone goes to the local host, show them 'hello world'
  @header = 'Josh\'s Homepage' #important to be above erb here, as Ruby returns the last line
  @images = ['cooking.jpg',
            'cooking.jpg',
            'cooking.jpg']
  


  @data = {
    name: 'Josh',
    age: 34,
    hobbies: ['Cycling', 
              'yoga', 
              'data visualisation', 
              'cooking']
  }
  erb :home
end


##############
#SYNTAX#
#############
#Verb 'PATH' do
#EXECUTE CODE
#end