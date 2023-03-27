# this is a walkthrough of a fibonacci function that returns the nth element of the fib sequence

def fibonacci(n):
    first = 0
    second = 1
    if n < 0:
        print("Incorrect input")
    elif n == 0:
        return first
    elif n == 1:
        return second
    else:
        for i in range(1, n):
            third = first + second
            first = second
            second = third
        return second