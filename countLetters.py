# this is in python 
def char_freq(message):
    #initialize an empty dictionary, called count
    count = {}
    #use a for loop to iterate over the elements in message, x
    for x in message:
        #use an if statement to look in count and see if x is in it
        if x in count:
            #if x is in count, add one to it inside the count dict
            count[x] += 1
        else:
            # if x is not in count, add x to count and make its value one
            count[x] = 1
    # return the count dictionary
    return count