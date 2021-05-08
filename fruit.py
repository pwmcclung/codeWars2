def remove_rotten(bag_of_fruits):
    fruits = []
    newFruits = []
    try:
        for x in bag_of_fruits:
            if x[0:6] == 'rotten':
                fruits.append(x[6:])
            else:
                fruits.append(x)
        for y in fruits:
            newFruits.append(y.lower())

        return newFruits 
    except TypeError as e:
        return []