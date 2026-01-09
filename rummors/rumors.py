for i in range(1, 11):
    if i % 3 == 0:
        continue
    print(i)
n = int(input("Enter n: "))
j = 1
total = 0

while j <= n:
    total += j
    j += 1

print(total)
