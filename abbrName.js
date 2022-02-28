
function abbrevName(name){
    let n1 = name.split(" ")
    let n2 = n1[0].toUpperCase()
    let n3 = n1[1].toUpperCase()
    return`"${n2[0]}.${n3[0]}"`   
}

abbrevName('Pat Mcc')