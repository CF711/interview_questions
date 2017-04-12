def fizzbuzz():
	for num in range(1, 101):
		message = ''
		if num % 3 == 0:
			message += 'Fizz'
		if num % 5 == 0:
			message += 'Buzz'
		if not message:
			message = str(num)
		print(message)

fizzbuzz()