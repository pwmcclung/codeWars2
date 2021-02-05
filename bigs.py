def case_sensitive(s):
    t = s.lower()
    bigs = []
    if s == t:
        return [True, []]
    else:
        for x in s:
            if x != x.lower():
                bigs.append(x)
                return [False,bigs]