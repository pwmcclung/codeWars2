def format_duration(seconds):
    if seconds == 0:
        return "now"
    else:
        min, sec = divmod(seconds, 60)
        hor, min = divmod(min, 60)
        dayy, hor = divmod(hor, 24)
        yearly, dayy = divmod(dayy, 365)
        result = [yearly, dayy, hor, min, sec]
        theThing = ['year','day','hour','minute','second']
        sent = []
        for index in range(len(result)):
            if result[index] == 0:
                continue
            elif result[index] > 0 and result[index] <= 1:
                sent.append(str(result[index]) + ' ' + theThing[index])
            else:
                sent.append(str(result[index]) + ' '+ theThing[index] + 's')
        if len(sent) == 1:
            return "".join(sent)
        else:
            join_sent = ", ".join(sent)
            find_Next = join_sent.rindex(',')
            str_join_sent = list(join_sent)
            str_join_sent[find_Next] = ' and'
            return "".join(str_join_sent)