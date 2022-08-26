def starts_with(st, prefix):
    if prefix == '':
        return True
    if len(prefix) > len(st):
        return False
    return st[0] == prefix[0]