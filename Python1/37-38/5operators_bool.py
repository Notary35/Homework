x = 10
y = 7
print(x > 5 and y < 10) # True 
print(x > 5 and y > 10) # False

print(x < 5 and y < 10) # False
print(x < 5 and y > 10) # False
print()
# or 
# 0 0 0
# 0 1 1
# 1 0 1
# 1 1 1
print(x > 5 or y < 10)# True 
print(x > 5 or y > 10)# True 
print(x < 5 or y < 10)# True 
print(x < 5 or y > 10)# False
print()
# not
print(not True) # False
print(not False) # True
print(not x > 5) # False
print(not x < 5) # True

x = int(input('Введите число: '))

if x > 0:
    print('Число положительное')
elif x == 0:
    print('Число равно 0')
else:
    print('Число отрицательное')

grade = int(input('Введите оценку: '))

if grade >= 80:
    print(f'Оценка {grade} - в пятибальной шкале 5')
elif grade >= 60:
    print(f'Оценка {grade} - в пятибальной шкале 4')
elif grade >= 40:
    print(f'Оценка {grade} - в пятибальной шкале 3')
elif grade >= 20:
    print(f'Оценка {grade} - в пятибальной шкале 2')
elif grade >= 0:
    print(f'Оценка {grade} - в пятибальной шкале 1')
else:
    print('Оценка должна быть в диапозоне от 0 до 100!')