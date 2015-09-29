# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Song.delete_all
Album.delete_all
Artist.delete_all
# Album_song.delete_all

a1 = Album.create!(name: 'Ten', year: Date.new(1991, 8, 27), image: 'http://ecx.images-amazon.com/images/I/617W9ZTJGBL._SY300_.jpg')
a2 = Album.create!(name: 'Tetsuo & Youth', year: Date.new(2015, 1, 20), image: 'https://upload.wikimedia.org/wikipedia/en/1/12/Lupe_Fiasco_Tetsuo_&_Youth.jpg')
a3 = Album.create!(name: 'Surf', year: Date.new(2015, 5, 28), image: 'https://upload.wikimedia.org/wikipedia/en/d/d3/Surf_%28Donnie_Trumpet_cover%29.png')
a4 = Album.create!(name: 'Summertime!', year: Date.new(2010, 3, 12), image: 'http://ecx.images-amazon.com/images/I/61FxXzR-B6L._SL1000_.jpg')

s1 = Song.create!(title: 'Black')
s2 = Song.create!(title: 'Mural')
s3 = Song.create!(title: 'Slip Slide')
s4 = Song.create!(title: 'Let\'s go Surfing')

artist1 = Artist.create!(name: 'Pearl Jam')
artist2 = Artist.create!(name: 'Lupe Fiasco')
artist3 = Artist.create!(name: 'Donnie Trumpet')
artist4 = Artist.create!(name: 'The Drums')
artist5 = Artist.create!(name: 'Gwen Stefani')

#Best Practice
# s5 = Song.create!(title: 'Hollaback', artist_id: artist5.id)

#or
artist1.songs.create!(title: 'Black')
artist2.songs.create!(title: 'Mural')
artist3.songs.create!(title: 'Slip Slide')
artist4.songs.create!(title: 'Let\'s go Surfing')
artist5.songs.create!(title: 'Hollaback')


a1.album_songs.create!(song_id: s1.id, track_number: 5)
a2.album_songs.create!(song_id: s2.id, track_number: 2)
a3.album_songs.create!(song_id: s3.id, track_number: 3)
a4.album_songs.create!(song_id: s4.id, track_number: 1)
