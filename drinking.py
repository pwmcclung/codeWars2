import re
def hydrate(drink_string): 
    drinksTotal = sum(list(map(int,re.findall('[\d]+', drink_string))))
    
    hydration = ('glass' if drinksTotal == 1 else 'glasses')
    return '{} {} of water'.format(drinksTotal, hydration)