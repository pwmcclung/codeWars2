def score_test(tests, right, omit, wrong):
    r1 = 0
    o1 = 0
    wr1 = 0
    for x in tests:
        if x == 0:
            r1 +=1
        elif x ==1:
            o1 += 1
        else:
            wr1 += 1
    r2 = r1* right
    o2 = o1 * omit
    wr2 = wr1 * wrong
    summ = r2 + o2 - wr2
    return summ