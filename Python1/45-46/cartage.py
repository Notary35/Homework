# кортежи неизменлемая коллекция
print() 
print("# создание кортежей")
my_tuple = (1, 2, 3)
print(my_tuple)
print(type(my_tuple))
my_tuple = 1, 2, 3
print(my_tuple)
print(type(my_tuple))
my_tuple = (1,)
print(my_tuple)
print(type(my_tuple))

my_tuple = 1,
print(my_tuple)
print(type(my_tuple))

names = ('Bob', 'Alice', 'Charlie')
print(names[0])
# names[0] = 'David'

print('# Методы кортежа')
person = ("Alice", [30, "New York"], 35000, "Alice", 'Alice')
print(person.count("Alice"))
print(person.index(35000))
print(person.index('Alice'))
print(person.index('Alice', 1))
