#!/usr/bin/python3
"""Declaration of class Square"""


class Square:
    """Class Square with size"""
    def __init__(self, size=0):
        """Initialization method with size"""
        self.__size = size
        if not isinstance(size, int):
            raise TypeError("size must be an integer")
        elif size < 0:
            raise ValueError("size must be >= 0")

    @property
    def size(self):
        return self.__size

    @size.setter
    def size(self, value):
        if not isinstance(value, int):
            raise TypeError("size must be an integer")
        elif value < 0:
            raise ValueError("size must be >= 0")
        self.__size = value

    def area(self):
        """Method to calculate the area of the square"""
        return self.__size ** 2
