require 'sinatra'
require 'sinatra/reloader' if development?
require 'pry'
require 'pg'

before do
  @db = PG.connect(dbname: 'todo', host: 'localhost')
end

after do #method where we are passing a block
  @db.close
end

get '/' do
  redirect to '/todos'
end

get '/todos' do #get index
  @header = 'All Tasks'
  sql = "select * from todo"
  @todos = @db.exec(sql)
  erb :todos
end

get '/todos/new' do #get new
  @header = 'New Task'
  erb :new
end

post '/todos' do #post create
  #insert into database
  sql = "insert todo (task, description) values ('params[:task]' 'params[:description]'')"
  @db.exec(sql)
  redirect to '/todos'
end

get '/todos/:id' do #get show
  @header = 'Show one task'
  erb :show
end

get '/todos/:id/edit' do #get edit, add delete button here
  @header = 'Edit your task'
  erb :edit
end

post '/todos/:id' do #put update
  redirect to '/todos/:id'
end

post '/todos/:id/delete' do #delete delete
  redirect to '/todos'
end

