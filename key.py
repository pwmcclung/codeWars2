import keyword
from functools import reduce
from operator import or_
keywords = {}
lst = keyword.kwlist
for x in lst:
    if x in keywords:
        keywords[x] +=1
    else:
        keywords[x] = 1
keywords = set(keywords.keys())