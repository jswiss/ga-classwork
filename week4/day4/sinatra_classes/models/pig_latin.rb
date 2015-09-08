require 'pry'

class PigLatin

  def pig words
    words.split(' ').map { |word| pig_latin_checker word }
  end

  private

  def pig_latin_checker word
    return word.concat 'ay' if word.start_with?('a', 'e', 'i', 'o', 'u')
    word.chars.rotate.join.concat 'ay'
  end

end