#!/usr/bin/python3
"""Creates an instance of Square and prints its type and dict"""
Square = __import__('1-square').Square

"""Create an instance"""
my_square = Square(3)

"""Print some informations"""
print(type(my_square))
print(my_square.__dict__)

try:
    print(my_square.size)
except Exception as e:
    print(e)

try:
    print(my_square.__size)
except Exception as e:
    print(e)
