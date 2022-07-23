decodeMorse = function(morseCode){
    //  let morse = { '.-':'A', '-...':'B','-.-.':'C', '-..':'D', '.':'E', '..-.':'F', '--.':'G','....':'H',
    //     '..':'I','.---':'J','-.-':'K','.-..':'L','--':'M','-.':'N','---':'O', '.--.':'P','--.-':'Q',
    //     '.-.':'R', '...':'S','-':'T', '..-':'U','...-':'V','.--':'W','-..-':'X','-.--':'Y',
    //     '--..':'Z', '.----':'1', '..---':'2', '...--':'3','...-':'4', '.....':'5',
    //     '-....':'6', '--...':'7', '---..':'8', '----.':'9', '-----':'0'
    //      }
    //  let arr = morseCode.split(' ')
     
    //  console.log(arr) 
    //   console.log(arr.join())
    //  return  morseCode.split(' ').map((e)=> morse[e] || [e]).join( )
      
      return morseCode.split(' ').map((v,i)=>MORSE_CODE[v]!=undefined?MORSE_CODE[v]:1).join('').replace(/11/g,' ').replace(/1/g,' ').trim()
    }