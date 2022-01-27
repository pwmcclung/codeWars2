function correctPolishLetters (string) {
    let polishVowels = {'ą':'a','ć': 'c','ę':'e', 'ł': 'l','ń': 'n','ó':'o', 'ś': 's','ź':'z', 'ż':'z'}
    return string.split('').map((e)=> polishVowels[e] || e).join('')
    
    
  }