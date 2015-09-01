# if true
#   puts 'hello'
# else
#   puts 'bye'
# end

# print 'Enter a number: '
# n = gets.to_i

# if n > 0
#   puts 'Your number is positive'
# elsif n < 0
#   puts 'Your number is negative'
# else 
#   puts 'Your number is zero'
# end

# unless n > 10
#   puts 'too small'
# else 
#   puts 'too LARGE!'
# end

# user_registered = false
# puts 'Please signup!' unless user_registered

# puts 'Exit the program (yes or no): '
# answer = gets.chomp

# case answer
# when 'yes'
#   puts 'Bye!'
#   Exit
# when 'no'
#   puts 'ok. crack on!'
# else
#   puts 'eh? I do not compute'
# end

# puts 'Continuing with program...'

# n = 1

# while n < 11
#   puts n
#   n = n + 1
# end
# puts 'done!'

# puts 'What is 2 to the 4th power?'
# value = gets.to_i

# while value != 2**4
#   if value < 2**4
#     puts 'Nope, too low'
#     value = gets.to_i
#   else 
#     puts 'Nope, too high'
#     value = gets.to_i
# end

# puts 'You are correct!'

# $i = 0
# $num = 5

# until $i > $num  do
#    puts("Inside the loop i = #$i" )
#    $i +=1;
# end

puts 'What is 2 to the 4th power?'
value = gets.to_i
while value != 2**4
  if value < 2**4
    puts 'NO! U IZ RONG! AND TOO LOW'
    value = gets.to_i
  else
    puts 'NO! U IZ RONG! AND TOO HIGH'
    value = gets.to_i
  end
end
puts 'U WIN!!!'




