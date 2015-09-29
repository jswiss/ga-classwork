require 'sinatra'
require 'sinatra/contrib/all'
require 'json'
require 'pg'
require 'pry-byebug'


get '/' do
  redirect to('/items')
end

get '/items' do
   # send back all items in the DB
  sql = 'select * from items'
  @items = run_sql(sql) 

  if request.xhr?
    json @items.entries
    # same as json @items.to_a
  else
    erb :index
  end
end

post '/items' do
  sql = "insert into items (item, done)  values ('#{params[:item]}', 'false') returning *"
  item = run_sql(sql)
  if request.xhr?
    json item.entries.first
  end
end

put '/items/:id' do
  # params[:id] exists because of the dynamic url - we didnt need to pass it in the request
  sql = "update items set done ='#{params[:done]}' where id = #{params[:id]}"
  run_sql(sql)
  if request.xhr?
    [200, {"Content-Type" => "application/json"}, {status: :ok}].to_json
  end
end

delete '/items/:id' do 
  # params[:id] exists because of the dynamic url - we didnt need to pass it in the request
  sql = "delete from items where id = '#{params[:id]}'"
  run_sql(sql)
  if request.xhr?
    [200, {"Content-Type" => "application/json"}, {status: :ok}].to_json
  end
end



private
def run_sql(sql)
  conn = PG.connect(:dbname =>'todo', :host => 'localhost')
  begin
    result = conn.exec(sql)
  ensure
    conn.close
  end

  result
end
