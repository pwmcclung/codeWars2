def simplify(poly):
    import re
    m = re.findall(r'([+\-]?)(\d*)([a-z]+)', poly)
    e = [[int(i[0] + (i[1] if i[1] != "" else "1")), ''.join(sorted(i[2]))] for i in m]
    v = sorted(list(set(i[1] for i in e)), key=lambda x: (len(x), x))
    c = {v:sum(i[0] for i in e if i[1] == v) for v in v}
    return '+'.join(str(c[v]) + v for v in v if c[v] != 0).replace('1','').replace('+-','-')