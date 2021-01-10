def dirReduc(arr):
    whereGo = " ".join(arr)
    notThatWay = whereGo.replace("NORTH SOUTH",'').replace("SOUTH NORTH",'').replace("EAST WEST",'').replace("WEST EAST",'')
    bestestWay = notThatWay.split()
    return dirReduc(bestestWay) if len(bestestWay) < len(arr) else bestestWay