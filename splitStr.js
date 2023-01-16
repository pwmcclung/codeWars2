var splitInParts = function(s, partLength){
    let numChunks = Math.ceil(s.length / partLength)
    let chunks = new Array(numChunks)
    
    for (let i = 0, o = 0; i <numChunks; ++i, o += partLength){
      chunks[i] = s.substr(o, partLength)
    }
    return chunks.join(' ')
  }