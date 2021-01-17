def to_chinese_numeral(n):

    numberString = str(n)
    if numberString[0] == '-':
        answer = '负'
        numberString = numberString[1:]
    else:
        answer = ''
    if '.' in numberString:
        partOne, partTwo = numberString.split('.')
    else:
        partOne = numberString
        partTwo = None
    answer += transform(partOne, True) + transform(partTwo, False)
    return answer

def transform(part, mode):
    if part == None:
        return ""
    numerals = {
        "-": "负",
        ".": "点",
        "0": "零",
        "1": "一",
        "2": "二",
        '3': "三",
        "4": "四",
        "5": "五",
        "6": "六",
        "7": "七",
        "8": "八",
        "9": "九",
        "10": "十",
        "100": "百",
        "1000": "千",
        "10000": "万"
    }
    if mode == False:
        res = "点"
        for char in part:
            res += numerals[char]
        if res[-1] == '零':
            return res[:-1]
        else:
            return res
    else:
        res = ""
        base = int(10 ** (len(part)-1))
        for char in part:
            if char == '0':
                if len(res) == 0 or res[-1] != '零':
                    res += '零'
            else:
                prefix = numerals[char]
                if base >= 10:
                    next_ = numerals[str(base)]
                else:
                    next_ = ""
                res += prefix + next_
            base //= 10

        if len(res) == 1:
            return res
        if res[-1] == '零':
            res = res[:-1]
        if res.startswith('一十'):
            res = res[1:]
        return res