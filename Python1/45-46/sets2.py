print()
print('# Операции над множествами') 
set1 = {'apple', 'banana', 'cherry'} 
set2 = {'cherry', 'melon', 'peach'}
print('# объединение |')
print(set1)
print(set2)
print(set1 | set2)
print(set1.union(set2))

print('# пересечение &')
print(set1)
print(set2)
print(set1 & set2)
print(set1.intersection(set2))

print("# симметричная разность")
print(set1)
print(set2)
print(set1* set2)
print(set1.symmetric_difference(set2))

print("# разность set1 - set2")
print(set1)
print(set2)
print(set1 - set2)
print(set1.difference(set2))

print("# разность set2 - set1")
print(set1)
print(set2)
print(set2 - set1)
print(set2.difference(set1))

print()
set1 = {'apple', 'banana', 'cherry'} 
set2 = {'cherry', 'melon', 'peach'}
set1.update(set2)
print(set1)

print()
set1 = {'apple', 'banana', 'cherry'} 
set2 = {'cherry', 'melon', 'peach'}
set1.intersection_update(set2)
print(set1)