import re

def solve(s):
    list1 = []
    list2 = []
    d = {'a':1, 'b':2, 'c':3, 'd':4, 'e':5,'f':6, 
                 'g':7, 'h':8, 'i':9, 'j':10,'k':11,'l':12, 'm':13,'n':14,'o':15,
                  'p':16,'q':17,'r':18,'s':19,'t':20,
                  'u':21,'v':22,'w':23,'x':24,'y':25,'z':26}
    res = re.split('a|e|i|o|u', s)
    
    for i in res:
        if len(i) == 1:
            list1.append(d[i])
        else:
            list1.append([d[item] for item in i])
    for i in list1:
        if type(i) ==list:
            list2.append(sum(i))
        else:
            list2.append(i)
    return max(list2)