class Airport

# Ruby gives us attributes readers, writters and accessors so that we don't have to create getter and setter methods
# if you don't put the instance variable here you will not be able to access it in the methods

  attr_reader :name
  attr_accessor :flights

  # initialize method will be run EACH time we instantiate a new instance of the class
  # using the instance variable @name is like using this.name in javascript
  # in this case we do not pass an argument for the flight since we want them to be an empty array by default
  # however we still must define the instance variable @flight in order to access it later
  def initialize name
    @name = name
    @flights = []
  end

  def add_flight(number_of_seats, destination)
    flights << Flight.new(number_of_seats, destination)
  end
end