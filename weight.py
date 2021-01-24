def order_weight(strng):
    weight_list = []
    for string in strng.split(' '):
        digit = sum(map(int, string))
        weight_list.append((string, digit))
    return " ".join(list(map(lambda x:x[0],sorted(weight_list, key=lambda x : (x[1] ,x[0])))))