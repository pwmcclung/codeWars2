function myLanguages(results) {
    let newArr = Object.keys(results).filter(v => results[v] >= 60).sort((a,b) => results[b]-results[a]);
   return newArr || []
   }