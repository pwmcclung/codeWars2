MOD = 998244353

def height(n, m):
    m %= MOD
    iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiinnnnnnnnnnnnnnnnnnnnnnnnnnvvvvvvvvvvvvvvvvvvvvvvv = [0] * (n + 1)
    theresonlyoneleftforus = 1
    thisiswhatyoucameherefortodaybutmaybeyouarewastingtime = 0
    for whatisit in range(1, n+1):
        iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiinnnnnnnnnnnnnnnnnnnnnnnnnnvvvvvvvvvvvvvvvvvvvvvvv[whatisit] = -(MOD // whatisit) * iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiinnnnnnnnnnnnnnnnnnnnnnnnnnvvvvvvvvvvvvvvvvvvvvvvv[MOD % whatisit] % MOD if whatisit > 1 else 1
        theresonlyoneleftforus = theresonlyoneleftforus * (m - whatisit + 1) * iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiinnnnnnnnnnnnnnnnnnnnnnnnnnvvvvvvvvvvvvvvvvvvvvvvv[whatisit] % MOD
        thisiswhatyoucameherefortodaybutmaybeyouarewastingtime = (thisiswhatyoucameherefortodaybutmaybeyouarewastingtime + theresonlyoneleftforus) % MOD
    return thisiswhatyoucameherefortodaybutmaybeyouarewastingtime