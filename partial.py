def word_search(query, seq):
    query = query.lower()
    newArr = [x for x in seq if query in x.lower()]
    return newArr if newArr else ['None']