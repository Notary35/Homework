print()
# строки
united_str = 'Hello ' + 'world' + '!'
print(united_str)
multiple_str = 'Hello ' * 3
print(multiple_str)

# в python мы не можем сложить строки и числа
# print('Hello' + 5)
# TypeError: can only concatenate str (not "int") to str


# индексация строк
# строка в Python является коллекцией
print()
print('# индексация строк')
hello_str = 'Hello'
print(hello_str[0])  # H
print(hello_str[1])  # e
print(hello_str[2])  # l
print(hello_str[3])  # l
print(hello_str[4])  # o

print(hello_str[-1])  # o
print(hello_str[-2])  # l
print(hello_str[-3])  # l
print(hello_str[-4])  # e
print(hello_str[-5])  # H

first_char = hello_str[0]
last_char = hello_str[-1]
print(f'{first_char}{last_char}' * 3)  # HoHoHo

print()
# срезы (slice)
print('# срезы (slice)')
str_for_slice = 'Python Programming!'
# срезы задаются так [x:y]
# где x начало среза (включается)
# а y конец среза (не включается)

print(str_for_slice[0:6])  # Python
print(str_for_slice[7:13])  # Progra
print(str_for_slice[3:9])  # hon Pr

# если мы не указываем начало среза, то он по умолчанию равен 0,
# то есть срез начинается с первого символа
print(str_for_slice[:6])  # Python

# если мы не указываем конец среза, то он по умолчанию равен длине строки
# то есть срез заканчивается на последнем символе
print(str_for_slice[7:])  # Programming!

# третий параметр в срезе — шаг среза
print(str_for_slice[0:6:2])  # Pto

# если шаг среза не указан, он по умолчанию равен 1
# шаг среза может быть отрицательный
print(str_for_slice[::-1])  # !gnimmargorP nohtyP
