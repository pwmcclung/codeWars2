def make_string(s):
    strArr = s.split()
    lst = []
    for  x in strArr:
        lst.append(x[0])
    str1 = ''
    for ele  in lst:
        str1 += ele
    return str1
