def acronym_buster(message):
    acroDict = {'CTA':'call to action', 'EOD': 'the end of the day', 
               'IAM':'in a meeting', 'KPI':'key performance indicators', 'NRN':'no reply necessary',
               'OOO': 'out of office', 'SWOT':'strengths, weaknesses, opportunities and threats', 
               'TBD': 'to be decided', 'WAH':'work at home'}
    resultList = []
    for words in message.split('.'):
        temporaryList = []
        for i, word in enumerate(words.split()):
            if word.isupper() and len(word) >2:
                try:
                    word = acroDict[word]
                except KeyError:
                    return ('{} is an acronym. I do not like acronyms. Please remove them from your email.'.format(word))
            temporaryList.append(word[0].upper() + word[1:] if i == 0 else word)
        resultList.append(' '.join(temporaryList))
    return '. '.join(resultList).rstrip()