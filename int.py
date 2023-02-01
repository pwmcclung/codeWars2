import re

def get_strings(city):
    city = city.lower()
    city = ''.join(re.split('[^a-z]*', city))
    arr = [*city]
    print(arr)
    freq = {}
    for x in arr:
        if x in freq:
            freq[x] += 1
        else:
            freq[x] = 1
    valArr = []
    keyArr = []
    lenArr = len(keyArr)
    for x in freq:
        valArr.append(int(freq[x]) * '*')
    for k, v in freq.items():
        keyArr.append(k)
    res = {keyArr[i]:valArr[i] for i in range(len(keyArr))}
    res2 = "".join([f"{k}:{v}," for k, v in res.items()])
    res2 = [*res2]
    return ''.join(res2[0:-1])