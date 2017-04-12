def reverse_method(str):
	return ''.join(reversed(str))

def reverse_method_2(str):
	return str[::1]

def reverse_loop(str):
	arr = []
	count = 1

	for x in range(0, len(str)):
		arr.append(str[len(str) - count])
		count = count + 1

	return ''.join(arr)

print(reverse_method('join string'))
print(reverse_method_2('reverse'))
print(reverse_loop('loop string'))