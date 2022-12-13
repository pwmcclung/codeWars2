geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
def goose_filter(birds):
    newL = []
    for bird in birds:
        if bird not in geese:
            newL.append(bird)
            
    return newL