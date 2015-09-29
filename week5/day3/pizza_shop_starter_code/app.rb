class PizzaShop < Sinatra::Base

	#INDEX
	get '/' do
		@pizzas = Pizza.all 
		#redirect_to '/pizzas'
	end

	#SHOW
	get '/pizzas/:id' do
		@pizza = Pizza.find_by(params[:id])
		#erb :show
	end

	#NEW
	get '/pizzas/new' do
		@pizza = Pizza.new
		#erb :new
	end

	#CREATE
	post '/pizzas' do
		hash = {name: "test pie", sauce: "red", cheese: true, mushrooms: false, extra_toppings: "pepperoni"}
		@pizza = Pizza.create(hash)
		#redirect
	end
	
	#EDIT
	get '/pizzas/:id/edit' do
		@pizza = Pizza.find(params[:id])
		#erb :edit
	end

	#UPDATE
	put '/pizzas' do
		changes = {sauce: params[:sauce], mushrooms: params[:mushrooms]}
		@pizza = Pizza.find(params[:id])
		@pizza.update_attributes(changes)
		#redirect
	end

	#DESTROY
	delete '/pizzas/:id' do
		@pizza = Pizza.find(params[:id])
		@pizza.destroy
		#redirect
	end

end
