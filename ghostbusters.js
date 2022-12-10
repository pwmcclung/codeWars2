function ghostBusters(building) {
    if (building.indexOf(' ') >= 0){
      return building.replace(/\s/g, "")
    }else{
      return "You just wanted my autograph didn't you?"
    }
   }
    