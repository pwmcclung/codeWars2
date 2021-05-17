def b2Dec(n):
    num = n
    dVal = 0
    bottom = 1
    longness = len(num)
    for i in range(longness - 1, -1, -1):
        if (num[i] == '1'):
            dVal += bottom
        bottom = bottom * 2
    return dVal
 
def binary_to_string(str):
    nummy = int(len(str))
    result = ""
    for i in range(0, nummy, 8):
        dVal2 = b2Dec(str[i: i + 8])
        result += chr(dVal2)
    return result  