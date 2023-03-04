def barbell_weight(barbell):
    weightDict = {'R': 25, 'B': 20, 'Y':15, 'G': 10, 'W':5, 'r':2.5, 'b':2, 'y':1.5, 'g':1, 'w':0.5, 'c':2.5}
    arr = [*barbell]
    arr1 = [weightDict[x] for x in arr if x in weightDict]
#     for x in arr:
#         if x in weightDict:
#             arr1.append(weightDict[x])
    arrSum = int(sum(arr1)+ 20)
    return arrSum