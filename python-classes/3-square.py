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

    def area(self):
        return self.__size**2
