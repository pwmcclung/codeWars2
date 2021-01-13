def valid(a):   
    dayo = {}
    dayLen = len(a[0])
    bigness = len(a[0][0])
    oldPros = {g for p in a[0] for g in p}

    for day in a:
        if len(day) != dayLen: return False
        for group in day:
            if len(group) != bigness: return False
            for golfer in group:
                if golfer not in oldPros: return False
                if golfer not in dayo:
                    dayo[golfer] = set(group)
                else:
                    if len(dayo[golfer] & set(group)) > 1: return False
                    else: dayo[golfer].add(group)
    return True