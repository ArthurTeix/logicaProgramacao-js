# Encontrar maior número do array
# Sem usar Math.max

def max_array(array):
    max = 0
    for item in array:
        if item > max:
            max = item

    print(max)

max_array([3, 2, 5, 7, 9, 4, 1])