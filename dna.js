function DNAStrand(dna){
    let newComp = {'A':'T', 'T':'A', 'G':'C', 'C':'G'}
    return dna.split('').map((e)=> newComp[e] ).join('')
    }