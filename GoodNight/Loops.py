count = 1
while count <= 5:
    print("Hello")
    count += 1


print("START")

mcr = 1
while mcr <= 5:
    print("I'm not okay")
    mcr += 1

print("END")


# new section starts
nums = (1, 4, 9, 16, 25, 36, 49, 64, 81, 100)
x = int(input("Enter number to search: "))

i = 0
while i < len(nums):
    if nums[i] == x:
        print("Found at index", i)
        break
    i += 1
else:
    print("Not found")
