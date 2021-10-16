# Write a function that converts hours into seconds.

# Examples
# how_many_seconds(2) ➞ 7200

# how_many_seconds(10) ➞ 36000

# how_many_seconds(24) ➞ 86400

def how_many_seconds(hours):
	seconds = hours * 60 * 60
	return seconds

    # ------------------------------------------------------------

# Create a function that takes the age in years and returns the age in days.

# Examples
# calc_age(65) ➞ 23725

# calc_age(0) ➞ 0

# calc_age(20) ➞ 7300

def calc_age(age):
	ageInDays = age * 365
	return ageInDays

    # ------------------------------------------------------------

# Write a function that takes the base and height of a triangle and return its area.

# Examples
# tri_area(3, 2) ➞ 3

# tri_area(7, 4) ➞ 14

# tri_area(10, 10) ➞ 50

def tri_area(base, height):
	area = base * height / 2
	return area

    # ------------------------------------------------------------

# Create a function that takes a string and returns it as an integer.

# Examples
# string_int("6") ➞ 6

# string_int("1000") ➞ 1000

# string_int("12") ➞ 12

def string_int(txt):
	return int(txt)

    # ------------------------------------------------------------

# Create a function that takes a base number and an exponent number and returns the calculation.

# Examples
# calculate_exponent(5, 5) ➞ 3125

# calculate_exponent(10, 10) ➞ 10000000000

# calculate_exponent(3, 3) ➞ 27

def calculate_exponent(num, exp):
	return pow(num, exp)	

    # ------------------------------------------------------------

# Write a function that takes an integer minutes and converts it to seconds.

# Examples
# convert(5) ➞ 300

# convert(3) ➞ 180

# convert(2) ➞ 120

def convert(minutes):
	return minutes * 60

    # ------------------------------------------------------------

# Create a function that takes length and width and finds the perimeter of a rectangle.

# Examples
# find_perimeter(6, 7) ➞ 26

# find_perimeter(20, 10) ➞ 60

# find_perimeter(2, 9) ➞ 22

def find_perimeter(length, width):
	return length * 2 + width * 2

    # ------------------------------------------------------------

# Create a function that takes voltage and current and returns the calculated power.

# Examples
# circuit_power(230, 10) ➞ 2300

# circuit_power(110, 3) ➞ 330

# circuit_power(480, 20) ➞ 9600

def circuit_power(voltage, current):
	return voltage * current 

    # ------------------------------------------------------------

# Create a function that takes a number as an argument, increments the number by +1 and returns the result.

# Examples
# addition(0) ➞ 1

# addition(9) ➞ 10

# addition(-3) ➞ -2

def addition(num):
	return num + 1

    # ------------------------------------------------------------

# In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

# chickens = 2 legs
# cows = 4 legs
# pigs = 4 legs
# The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

# Examples
# animals(2, 3, 5) ➞ 36

# animals(1, 2, 3) ➞ 22

# animals(5, 2, 8) ➞ 50

def animals(chickens, cows, pigs):
	total = chickens * 2 + cows * 4 + pigs * 4
	return total

    # ------------------------------------------------------------

# Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

# Examples
# cubes(3) ➞ 27

# cubes(5) ➞ 125

# cubes(10) ➞ 1000

def cubes(a):
	return a ** 3

    # ------------------------------------------------------------

# Create a function that takes a boolean variable flag and returns it as a string.

# Examples
# bool_to_string(True) ➞ "True"

# bool_to_string(False) ➞ "False"

def bool_to_string(flag):
	return str(flag)

    # ------------------------------------------------------------

# Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

# Examples
# convert(1, 3) ➞ 3780

# convert(2, 0) ➞ 7200

# convert(0, 0) ➞ 0

def convert2(hours, minutes):
	hours_in_sec = hours * 60 * 60
	minutes_in_sec = minutes * 60
	return hours_in_sec + minutes_in_sec

    # ------------------------------------------------------------

# Create a function that takes a list containing only numbers and return the first element.

# Examples
# get_first_value([1, 2, 3]) ➞ 1

# get_first_value([80, 5, 100]) ➞ 80

# get_first_value([-500, 0, 50]) ➞ - 500

def get_first_value(number_list):
	return number_list[0]

    # ------------------------------------------------------------

# Create a function which returns the Modulo of the two given numbers.

# Examples
# mod(-13, 64) ➞ 51

# mod(50, 25) ➞ 0

# mod(-6, 3) ➞ 0

def mod(m, n):
	return m % n


    # ------------------------------------------------------------

# Write two functions:

# to_int(): A function to convert a string to an integer.
# to_str(): A function to convert an integer to a string.
# Examples
# to_int("77") ➞ 77

# to_int("532") ➞ 532

# to_str(77) ➞ "77"

# to_str(532) ➞ "532"

def to_int(txt):
	return int(txt)


def to_str(num):
	return str(num)

    # ------------------------------------------------------------

# Create a function that takes a number as its only argument and returns True if it's less than or equal to zero, otherwise return False.

# Examples
# less_than_or_equal_to_zero(5) ➞ False

# less_than_or_equal_to_zero(0) ➞ True

# less_than_or_equal_to_zero(-2) ➞ True

def less_than_or_equal_to_zero(num):
	if (num <= 0):
		return True
	return False


    # ------------------------------------------------------------

# Create a function that takes a list of numbers and returns the smallest number in the list.

# Examples
# find_smallest_num([34, 15, 88, 2]) ➞ 2

# find_smallest_num([34, -345, -1, 100]) ➞ - 345

# find_smallest_num([-76, 1.345, 1, 0]) ➞ - 76

# find_smallest_num([0.4356, 0.8795, 0.5435, -0.9999]) ➞ - 0.9999

# find_smallest_num([7, 7, 7]) ➞ 7

def find_smallest_num(lst):
	smallest_number = min(lst)
	return smallest_number

    # ------------------------------------------------------------

# You call your spouse in anger and a "little" argument takes place. Count the total amount of insults used. Given a dictionary of insults, return the total amount of insults used.

# Examples
# total_amount_adjectives({"a": "moron"}) ➞ 1

# total_amount_adjectives({"a": "idiot", "b": "idiot", "c": "idiot"}) ➞ 3

# total_amount_adjectives({"a": "moron", "b": "scumbag", "c": "moron", d: "d

def total_amount_adjectives(dct):
	number_of_insults = len(dct)
	return number_of_insults

    # ------------------------------------------------------------

# A student learning Python was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.

# Examples
# name_string("Mubashir") ➞ "MubashirEdabit"

# name_string("Matt") ➞ "MattEdabit"

# name_string("python") ➞ "pythonEdabit"

def name_string(name):
  b = "Edabit"
  return name + b

  # ------------------------------------------------------------

# Fix the code in the Code tab so the function returns true if and only if x is equal to 7. Try to debug code and pass all the tests.

# Examples
# is_seven(4) ➞ False

# is_seven(9) ➞ False

# is_seven(7) ➞ True

def is_seven(x):
	if (x == 7):
		return True
	return False

  # ------------------------------------------------------------

# Given a list of integers, return the difference between the largest and smallest integers in the list.

# Examples
# difference([10, 15, 20, 2, 10, 6]) ➞ 18
# # 20 - 2 = 18

# difference([-3, 4, -9, -1, -2, 15]) ➞ 24
# # 15 - (-9) = 24

# difference([4, 17, 12, 2, 10, 2]) ➞ 15

def difference(nums):
	min_value = (min(nums))
	max_value = (max(nums))
	return max_value - min_value

  # ------------------------------------------------------------

# Given two numbers, return True if the sum of both numbers is less than 100. Otherwise return False.

# Examples
# less_than_100(22, 15) ➞ True
# # 22 + 15 = 37

# less_than_100(83, 34) ➞ False
# # 83 + 34 = 117

# less_than_100(3, 77) ➞ true

def less_than_100(a, b):
	sum_of_nums = a + b
	if (sum_of_nums < 100):
		return True
	return False

  # ------------------------------------------------------------

# There is a single operator in Python, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

# Examples
# remainder(1, 3) ➞ 1

# remainder(3, 4) ➞ 3

# remainder(5, 5) ➞ 0

# remainder(7, 2) ➞ 1

def remainder(x, y):
	remainder_of_nums = x % y
	return remainder_of_nums

  # ------------------------------------------------------------

# Create a function to concatenate two integer lists.

# Examples
# concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]

# concat([7, 8], [10, 9, 1, 1, 2]) ➞ [7, 8, 10, 9, 1, 1, 2]

# concat([4, 5, 1], [3, 3, 3, 3, 3]) ➞ [4, 5, 1, 3, 3, 3, 3, 3]

def concat(lst1, lst2):
	return lst1 + lst2

  # ------------------------------------------------------------

# You are counting points for a basketball game, given the amount of 3-pointers scored and 2-pointers scored, find the final points for the team and return that value([2 - pointers scored, 3-pointers scored]).

# Examples
# points(1, 1) ➞ 5

# points(7, 5) ➞ 29

# points(38, 8) ➞ 100

def points(twopointers, threepointers):
	twopointers = 2 * twopointers
	threepointers = 3 * threepointers
	return twopointers + threepointers

  # ------------------------------------------------------------
