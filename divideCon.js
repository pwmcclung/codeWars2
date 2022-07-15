function divCon(x){
    let nummy1 = 0;
    let nummy2 = 0;
    x.map(y => (typeof y === "string" ? (nummy2 += y * 1) : (nummy1 += y)));
    return nummy1 - nummy2;
    }