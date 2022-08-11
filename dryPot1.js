function potatoes(p0, w0, p1) {
    let wetWeight = w0
    let initWtr = p0
    let finalWtr = p1
    return Math.floor(wetWeight * (100 - initWtr) / (100 - finalWtr))
}