function nextItem(xs, item) {
    let itsInThere = false;
      let whatsUpNext;
    
      for (let i of xs) {
        if (itsInThere) {
          whatsUpNext = i;
          break;
        }
    
        if (i === item) itsInThere= true;
      }
    
      return whatsUpNext;
    }