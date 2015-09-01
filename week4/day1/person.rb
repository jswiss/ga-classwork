class Person
  #allows us to execute getter method on instance variable, pass name of instance variable as a symbol

  # attr_reader :age, :name
  # attr_writer :age, :name

  attr_accessor :age, :name

  @@count = 0


  def initialize(name, age) #everytime you call Method.new, it actually calls initialize
    puts 'initialize'
    @@count += 1
    @name = name
    @age = age
  end

  # def self.count #class method #self is like this in JS, self refers to the class it is called within
  #   @@count += 1 #class variable
  # end

  def talk words
    puts "I am speaking! #{words}"
  end

  def self.count
    @@count
  end

end

people = []
josh = Person.new('Josh', 34) #instantiation
people << josh
puts josh.inspect
josh.talk 'here are my words!'
puts josh.age
puts Person.count #calling class method

gary = Person.new('Gary', 22) #instantiation
people << gary
puts gary
gary.talk 'blah!'
puts gary.age
puts Person.count #calling class method

people.each do |person|
  puts "#{person.name} is #{person.age} years old"
end



