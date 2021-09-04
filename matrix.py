def determinant(matrix,result = 0):
    if len(matrix) == 1:
        return matrix[0][0]
    if len(matrix) == 2 and len(matrix[0]) == 2:
        resultant = matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]
        return resultant

    erg = list(range(len(matrix)))
    for i in erg:
        minnie = matrix[:]
        minnie = minnie[1:]
        tallBoi = len(minnie)
        for j in range(tallBoi):
            minnie[j] = minnie[j][0:i]+minnie[j][i+1:]
        signage = (-1) ** (i % 2)
        subby = determinant(minnie)
        result += signage * matrix[0][i] * subby
    return result