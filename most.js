function topThreeWords(text) {
    let newArr = []
    text = text.toLowerCase().split` `.map(word=>{
      if (word===`'`) return ''
      return word.replace(/[^'a-z]/gi,'')
    }).filter(word=>word)
    let it = text.reduce((a,b)=>(a[b]=a[b]?a[b]+1:1,a),{})
    for (let i in it){
      newArr.push([i,it[i]])
    }
    return newArr.sort((a,b)=>b[1]-a[1]).slice(0,3).map(v=>v[0])
  }