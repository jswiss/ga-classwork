#JS function
# function hello (){
#   console.log('hello')
# };
# hello();

#Ruby method
# def hello(name="no name") #no name is the default here, returns 'yo no name'
#   puts "yo #{name}"
# end

# hello

# def hello(name=) #returns whatever is called in the method ('mathilda' in this case)
#   puts "yo #{name}"
# end

# hello('mathilda')

#splat arguments
# def say_hello(*name) # splat is *. It allows you to pass along an unspecified # of arguments and puts it into an array
#   puts name.inspect #.inspect allows you to inspect the object (in this case it says name is an array with all the elements named here)
# end

# say_hello('John', 'Luke', 'Sam', 'Tom', 'Lara')

# def say_hello(*name)
#   puts "hello, #{name.join(' ')}" #converts to string
# end

# say_hello('John', 'Luke', 'Sam', 'Tom', 'Lara')

# def mixed_args(a, b, *c) #has to have two arguments, after that it can have as many as you got
#   puts a.inspect
#   puts b.inspect
#   puts c.inspect
# end

# mixed_args(1, 5, 412, 33, 7856) #anything above 2 arguments is contained in a splat!

def mixed_args(a, b, *c, d) #has to have two arguments, after that it can have as many as you got
  puts a.inspect
  puts b.inspect
  puts c.inspect
  puts d.inspect
end

mixed_args(1, 5, 412, 33, 7856, 46, 743) #anything above 2 arguments is contained in a splat!
