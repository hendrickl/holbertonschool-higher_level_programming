#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)
str0 = "Last digit of"
lastDigit = number % 10

if lastDigit > 5:
    print(str0, number, "is", lastDigit, "and is greater than 5")
elif lastDigit == 0:
    print(str0, number, "is", lastDigit, "and is 0")
elif lastDigit < 6 and lastDigit != 0:
    print(str0, number, "is", lastDigit, "and is less than 6 and not 0")
