function bloodAlcoholContent(drinks, weight, sex, time){
    if (sex === 'male'){
      let bac;
      let a = drinks['ounces'] * drinks['abv']
      console.log(a)
       bac = ((a * 5.14 )/ weight * 0.73 )- 0.015 * time
      return Number(bac.toFixed(4))
    }else if (sex === 'female'){
      let b = drinks['ounces'] * drinks['abv']
      bac = ((b * 5.14 )/ weight * 0.66 )- 0.015 * time
      return Number(bac.toFixed(4))
    }
   
  }