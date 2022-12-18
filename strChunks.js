function stringChunk(str, n) {
    if (n < 1 || typeof n != "number" || n === undefined) return [];
   const numChunks = Math.ceil(str.length / n)
    const chunks = new Array(numChunks)
  
    for (let i = 0, o = 0; i < numChunks; ++i, o += n) {
      chunks[i] = str.substr(o, n)
    }
  
   return chunks 
  }
  