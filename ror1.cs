#ЗАДАНИЕ 3

checkprime = (number) -> if a[number] != 0 then a[i] = 0 for i in [number*2..n] by number

n = +prompt "Введите число, до которого надо найти простые:"

a = (i for i in [0..n])

checkprime m for m in [2..n]

result = (a[i] for i in [2..n] when a[i] != 0)

alert "Список простых чисел от 2 до #{n}: #{result}"

