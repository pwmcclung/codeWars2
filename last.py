def last_digit(lst):
    if lst == []:
        return 1
    ans = 1
    for num in lst[::-1]:
        ans = num ** (ans if ans < 4 else ans % 4 + 4)
    return ans % 10