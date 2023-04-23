def find_caterer(budget, people):
    if people > 0:
        one = people * 15
        two = people * 20
        if people > 60:
            three = (people * 30) * .80
        else:
            three = people * 30
        arr = [one, two, three]
        print(arr)
        newArr = []
    
        for x in arr:
            if x <= budget:
                newArr.append(x)
        if len(newArr) <= 0:
            return -1
        else:
            return len(newArr)
    else:
        return -1
    