function wallpaper(l, w, h) {

    let retVal= {0:'zero',1:'one', 2:'two', 3:'three', 4:'four', 5:'five', 6:'six', 7:'seven', 8:'eight', 9:'nine', 10:'ten', 
                 11:'eleven', 12:'twelve', 13:'thirteen', 14:'fourteen', 15:'fifteen',16:'sixteen', 17:'seventeen', 
                 18:'eighteen',19:'nineteen', 20:'twenty'}
    return w * h * l === 0
     ? retVal[0]
     : retVal[Math.ceil(((l * h * 2 + w * h * 2) * 1.15) / 5.2)]
 }