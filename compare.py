def compare(a, b):
    newA = [ int(x) for x in str(a) ]
    newB = [ int(y) for y in str(b) ]
    res = [x for x in newA + newB if x not in newA or x not in newB]
    if len(res) == 0:
        return '100%'
    elif len(res) <= 2:
        return '50%'
    elif len(res) > 2:
        return '0%'