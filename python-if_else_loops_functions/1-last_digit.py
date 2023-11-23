#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)
str0 = "Last digit of"
lastDigit = abs(number) % 10
str1 = "is"

if number < 0:
    lastDigit *= -1

if lastDigit > 5:
    print(str0, number, str1, lastDigit, "and is greater than 5")
elif lastDigit == 0:
    print(str0, number, str1, lastDigit, "and is 0")
elif lastDigit < 6 and lastDigit != 0:
    print(str0, number, str1, lastDigit, "and is less than 6 and not 0")
