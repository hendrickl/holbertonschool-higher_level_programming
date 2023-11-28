#!/usr/bin/python3
"""Creates an instance of Square and prints its type and dict"""
Square = __import__('0-square').Square

"""Create an instance"""
my_square = Square()

"""Print the type and dictinary of the instance"""
print(type(my_square))
print(my_square.__dict__)
