function part(x){
    let count = ''
   let words = ['Partridge', 'PearTree', 'Chat', 'Dan', 'Toblerone', 'Lynn', 'AlphaPapa', 'Nomad']
   let sum = x.filter(x => words.includes(x))
   console.log(sum)
   for (let i = 0; i < sum.length; i++){
      count += '!'
   }
    
   if (count.length > 0){
     return `Mine\'s a Pint${count}`
   }else{
     return 'Lynn, I\'ve pierced my foot on a spike!!'
   }
  }