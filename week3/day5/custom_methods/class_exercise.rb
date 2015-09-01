def silly_check(num)
  if num < 5
    puts "#{num} is less than five"
  else 
    puts "#{num} is greater than or equal to five"
  end
end
silly_check(6)

def drunken_person(age)
  if age < 21
    puts "You are only #{age}, and can only drink milk"
  else 
    puts "You are #{age} years old. Drink up!"
  end
end
drunken_person(18) 

def city_borough(loc)
case loc
 when 'Shoreditch'
   puts "You live in #{loc} and are a silly hipster" 
 when 'Lewisham'
   puts "You live in #{loc} and have been stabbed" 
 when 'Chelsea'
   puts "You live in #{loc} and hate poor people"
else
    puts "I never heard of #{loc}, where is that"
 end 
end
city_borough('Shoreditch')

#first question - variable.start_with? 'a'
#2nd - 
