
# this is in python 
def count(array):
    #this line initializes an empty dict
    elements = {}
    # this is a for loop that iterates over the input array 
    for el in array:
        # an if statement that asks if element is not in the elements dict
        if el not in elements:
            # if it is not it adds the element as a key and adds one as its count
            elements[el] = 1
        # and an else, if the element is in the elements dict
        else:
            #this will add one to the already present element
            elements[el] += 1
    # this line returns the elements dict
    return elements