require 'sinatra'
require 'sinatra/reloader' if development?
require 'pry'
require 'pg'
require 'httparty'

before do #method where we are passing a block
  @db = PG.connect(dbname: 'movies_app', host: 'localhost')  
end

after do #method where we are passing a block
  @db.close
end

get '/' do 
  if params[:title]
    movie_name = params[:title].downcase.gsub(' ', '+')
    movie_object = HTTParty.get "http://www.omdbapi.com/?t=#{movie_name}"
    @movie_hash = movie_object
    @movie_hash = movie_object.each {|key, value| value.gsub!("'","''") }   
    sql = "INSERT INTO movies (title, poster, year, released, runtime, genre, director, writers, actors, plot) VALUES ('#{@movie_hash['Title']}', '#{@movie_hash['Poster']}', '#{@movie_hash['Year']}', '#{@movie_hash['Released']}', '#{@movie_hash['Runtime']}', '#{@movie_hash['Genre']}', '#{@movie_hash['Director']}', '#{@movie_hash['Writers']}', '#{@movie_hash['Actors']}', '#{@movie_hash['Plot']}')"
    @db.exec(sql)
  end
  erb :index
end

get '/movies' do
  sql = 'select * from movies'
  @movies = @db.exec(sql)

  erb :movies
end

get '/movies/:title' do
  sql = "select * from movies where title LIKE '%#{params[:title]}%'"
  #binding.pry
  @movie = @db.exec(sql)

  erb :movie
end
