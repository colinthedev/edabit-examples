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

