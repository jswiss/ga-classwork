require 'sinatra'
require 'sinatra/contrib/all'
require 'json'
require 'pg'
require 'pry-byebug'


get '/' do
  redirect to('/items')
end

get '/items' do
	#send back all items in the DB
	sql = 'select * from items'
	@items = run_sql(sql)

	if request.xhr?
		json @items.entries
		# json @items.to_a -- same as above
	else
  erb :index
	end
end

post '/items' do
	#I have sent data to the server, check what w/ binding.pry
	sql = "insert into items (item, done)  values ('#{params[:item]}', 'false') returning *"
	item = run_sql(sql)
	if request.xhr?
		json item.entries.first
	end
end

put '/items/:id' do

  sql = "update items set done ='#{params[:done]}' where id = #{params[:id]}"
  @item = run_sql(sql)
  if request.xhr?
    # json @item
    [200, {"Content-Type" => "application/json"}, {status: :ok}]
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
