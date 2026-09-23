# 1. FizzBuzz
# Mostre números de 1–100:
# múltiplo de 3 → Fizz
# múltiplo de 5 → Buzz
# ambos → FizzBuzz

for num in range(1, 101):
    if ((num % 3 == 0) and (num % 5 == 0)):
        print(f"{num} -> Fizz Buzz")
    elif(num % 3 == 0):
        print(f"{num} -> Fizz")
    elif(num % 5 == 0):
        print(f"{num} -> Buzz")
    else:
        print(num)
