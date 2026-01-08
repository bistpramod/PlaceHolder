s = "Apple"
print(s[-3:-1])
print(s[2:4])

s = "Apple"

print(s[1:3])   # pp
print(s[0:3])   # App
print(s[:3])    # App (start defaults to 0)
print(s[2:])    # ple (end defaults to len(s))
print(s[:])     # Apple (entire string)

s = "I am a coder."

print(len(s))               # length of string
print(s.endswith("."))      # True
print(s.count("am"))        # 1
print(s.capitalize())       # I am a coder.
print(s.find("coder"))      # index where "coder" starts
print(s.replace("coder", "developer"))
name = input("Enter your first name: ")
print(len(name))
