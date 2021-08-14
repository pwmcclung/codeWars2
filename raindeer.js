function reindeers(presents) {
    if (presents == 0 ){
      return 2
    }else if(presents >0 && presents <=30){
      return 3
    }else if (presents >30 && presents <= 60){
      return 4
    }else if (presents >60 && presents <= 90){
      return 5
    }else if (presents >90 && presents <= 120){
      return 6
    }else if (presents >120 && presents <= 150){
      return 7
    }else if (presents >150 && presents <= 180){
      return 8
    }else{
      throw new Error
    }
  }