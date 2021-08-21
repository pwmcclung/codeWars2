def valid_parentheses(string):
    

    parenList = []
    for s in string:
        if(s == '('):
            parenList.append(s)
        elif(s == ')'):
            try:
                parenList.pop()
            except:
                return False

    if(len(parenList) == 0):
        return True
    else:
        return False
