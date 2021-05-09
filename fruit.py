
## walkthrough
## this sets up the function, with one parameter, bag of fruits
def remove_rotten(bag_of_fruits):
    ## this creates an empy list called fruits
    fruits = []
    # this creates the empty newFruits list
    newFruits = []
    # i had trouble with the empty arrays and other issues to I used a try/except block
    try:
        # try a for loop : iterating over the bag of fruits
        for x in bag_of_fruits:
            # if the first 5 letters spell rotten
            if x[0:6] == 'rotten':
                # use slicing to get the last letters after rotten and append to fruits list
                fruits.append(x[6:])
            # else append to fruits list
            else:
                #append to fruits list
                fruits.append(x)
        # once the rotten is removed from all bad fruits 
        for y in fruits:
            # use the lower method to turn all the words into lower case and append them into newFruits
            newFruits.append(y.lower())
        # return the new fruits list
        return newFruits 
    # if there is a type error
    except TypeError as e:
        #return an empty list
        return []