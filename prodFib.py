def productFib(prod):
    alpha, beta = 0, 1
    while prod > alpha * beta:
        alpha, beta = beta, alpha + beta
    return [alpha, beta, prod == alpha * beta]