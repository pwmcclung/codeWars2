def number2words(n):
    """ works for numbers between 0 and 999999 """
    writeNums1=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"]
    writeNums2=["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"]
    if 0 <= n <= 19:
        return writeNums1[n]
    elif 20 <= n <= 99:
        return "{}{}".format(writeNums2[int(str(n)[0])-2],"" if int(str(n)[1]) == 0 else "-" + number2words(int(str(n)[1])))
    elif 100 <= n <= 999:
        return "{}{}".format(number2words(int(str(n)[0])) + " hundred","" if int(str(n)[1:]) == 0 else " " + number2words(int(str(n)[1:])))
    else:
        return "{}{}".format(number2words(int(str(n)[:-3])) + " thousand","" if int(str(n)[-3:]) == 0 else " " + number2words(int(str(n)[-3:])))