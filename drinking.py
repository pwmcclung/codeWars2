# imports the regular expression module
import re
# this creates the hydrate function
def hydrate(drink_string): 
    # initialize a variable, use pythons sum function,map function and the findall regular expression function
    # this will use the re module and map function to pick out each integer, then sum the result 
    drinksTotal = sum(list(map(int,re.findall('[\d]+', drink_string))))
    #this variable  has a if/else statement that will test if the drinks total varible one and return glass or more and return glasses
    hydration = ('glass' if drinksTotal == 1 else 'glasses')
    #this return statement will use string formatting to plug the number of drings and the proper tense into the return statement
    return '{} {} of water'.format(drinksTotal, hydration)