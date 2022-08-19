function olympicRing(a){
    let rings = { 'a':1, 'A':1, 'b':1, 'B':2, 'c':0, 'C':0,'e':1, 'E':0, 'f':0, 'F':0, 'g':1,'G':0, 'h':0, 'H':0, 'i':0, 'I':0, 
                 'j':0, 'J':0, 'k':0, 'K':0, 'l':0, 'L':0, 'm':0, 'M':0, 'n':0, 'N':0, 'p':1, 'P':1, 'q':1, 'Q':1, 
                 'r':0, 'R':1, 's':0, 'S':0, 't':0, 'T':0, 'u':0, 'U':0, 'v':0, 'V':0, 'w':0, 'W':0, 'x':0, 'X': 0, 'y':0, 'Y':0, 
                 'z':0, 'Z':0, 'd':1, 'D':1, 'o':1, 'O':1}
    let arr = a.split('').map((e)=> rings[e])
    const sumWithInitial = arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  ); 
    let sumDiv = Math.floor(sumWithInitial / 2)
    if (sumDiv <=1){
      return 'Not even a medal!'
    }else if (sumDiv== 2){
      return 'Bronze!'
    }else if (sumDiv==3){
      return 'Silver!'
    }else{
      return 'Gold!'
    }
    
  }