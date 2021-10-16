
# Create a function that takes a number num and returns its length.

# Examples
# number_length(10) ➞ 2

# number_length(5000) ➞ 4

# number_length(0) ➞ 1

def number_length(num):
	num_to_string = str(num)
	length = len(num_to_string)
	return length

  # ------------------------------------------------------------

# Create a function that returns True when num1 is equal to num2
# otherwise return False.

# Examples
# is_same_num(4, 8) ➞ False

# is_same_num(2, 2) ➞  True

# is_same_num(2, "2") ➞ False

def is_same_num(num1, num2):
	if (num1 == num2):
		return True
	return False

  # ------------------------------------------------------------
