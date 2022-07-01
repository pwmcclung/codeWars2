def alphabetic(s):
    t = ''.join(sorted(s))
    if s == t:
        return True
    else:
        return False