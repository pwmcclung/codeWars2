import math

def circle_diameter(sides: int, side_length: int): 
    return side_length / math.tan(math.pi / sides)