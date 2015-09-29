# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# %w(London Paris Milan Toronto Miami Berlin New York Los Angeles Detroit).each do |city|
# 	h1 = Hotel.create

# end

h1 = Hotel.create(name: 'GA London Palace', city: 'London')
h2 = Hotel.create(name: 'GA Paris Palace', city: 'Paris')
h3 = Hotel.create(name: 'GA Milan Palace', city: 'Milan')
h4 = Hotel.create(name: 'GA Toronto Palace', city: 'Toronto')
h5 = Hotel.create(name: 'GA Miami Palace', city: 'Miami')
h6 = Hotel.create(name: 'GA Berlin Palace', city: 'Berlin')
h7 = Hotel.create(name: 'GA New York Palace', city: 'New York')
h8 = Hotel.create(name: 'GA Detroit Palace', city: 'Detroit')

g1 = Guest.create(name: 'Barry Grape', age: 57)
g2 = Guest.create(name: 'Jane Dusseldorf', age: 32)
g3 = Guest.create(name: 'Islam Goldstein', age: 14)
g4 = Guest.create(name: 'Sakajawia Jones', age: 25)
g5 = Guest.create(name: 'Jack Burton', age: 56)

h1.reviews.create(content: 'Smells of stinky pits', rating: 4, guest: g1)
h1.reviews.create(content: 'I love lamp', rating: 5, guest: g2)
h2.reviews.create(content: 'Ooh la la', rating: 3, guest: g3)
h4.reviews.create(content: 'Loved the drinks, hated the staff', rating: 2, guest: g4)
h7.reviews.create(content: 'The rusty apple is lovely', rating: 5, guest: g5)
h7.reviews.create(content: 'Decent food, ok service', rating: 4, guest: g3)

puts 'seeded!'