def greek_comparator(lhs, rhs):
    # the tuple greek_alphabet is defined in the global namespace
    return 1 if  ((greek_alphabet.index(lhs))>(greek_alphabet.index(rhs))) else -1 if (greek_alphabet.index(lhs)<greek_alphabet.index(rhs)) else 0