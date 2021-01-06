def mix(s1, s2):
    newH = {}
    for char in "abcdefghijklmnopqrstuvwxyz":
        value1, value2 = s1.count(char), s2.count(char)
        if max(value1, value2) > 1:
            which = "1" if value1 > value2 else "2" if value2 > value1 else "="
            newH[char] = (-max(value1, value2), which + ":" + char * max(value1, value2))
    return "/".join(newH[char][1] for char in sorted(newH, key=lambda x: newH[x]))