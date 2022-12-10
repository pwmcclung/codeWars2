def uncensor(infected, discovered):
    sent = ""
    for element in infected:
        if element == "*":
            sent += discovered[0]
            discovered = discovered[1:]
        else:
            sent += element
    return sent