function tripleTrouble(one, two, three){
    return one.split('').reduce((x,y,z)=>`${x}${one[z]}${two[z]}${three[z]}`,'')
   }