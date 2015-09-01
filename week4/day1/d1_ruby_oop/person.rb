class Person

# Ruby gives us attributes readers, writters and accessors so that we don't have to create getter and setter methods
# if you don't put the instance variable here you will not be able to access it in the methods

  # attr_reader :age, :name
  # attr_writer :age, :name

  attr_accessor :age, :name

  @@count = 0

  # uppercase to tell Ruby this will be a constant variable
  # needs to be defined before all the methods
  DEFAULT_NUMBER_OF_LEGS = 13
  
  # initialize method will be run EACH time we instantiate a new instance of the class
  # using the instance variable @name is like using this.name in javascript
  def initialize(name, age)
    @@count += 1 
    @name = name
    @age = age
  end

  # this is an instance method - it will be run on a specific instances of the class 
  def talk words
    # words is a local variable
    # @name is instance variable
    puts "My name is #{@name} and I can talk! Look at me ma! #{words}"
  end

  # setter
  # def age=(age)
  #   @age = age
  # end

  # getter
  # attr_reader :age
  # def age
  #   @age
  # end

  # this is a Class method, note the use of self to refer to the CLASS Person, not to a specific instance
  def self.count
    @@count
  end

  def self.change_default_leg_number number
    DEFAULT_NUMBER_OF_LEGS = number
  end

end
# count = 0
puts Person.count
student1 = Person.new('Christine', 1)
student1.age = 3
puts "The student's name is #{student1.name} and she is #{student1.age} years old."
puts Person.count # 1

Person.new('I am Jack\'s terrible puns', 1)
puts Person.count # 2

puts Person::DEFAULT_NUMBER_OF_LEGS

Person.change_default_leg_number(2)

puts Person::DEFAULT_NUMBER_OF_LEGS














