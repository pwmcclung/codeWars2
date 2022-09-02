def count(array):
    elements = {}
    for el in array:
        if el not in elements:
            elements[el] = 1
        else:
            elements[el] += 1
    return elements