#this file is for MY CHEMICAL ROMANCE




tasks = []

while True:
    print("\n--- TO DO LIST ---")
    print("1. Add task")
    print("2. View tasks")
    print("3. Remove task")
    print("4. Exit")

    choice = input("Choose an option (1-4): ")

    if choice == "1":
        task = input("Enter a task: ")
        tasks.append(task)
        print("Task added.")

    elif choice == "2":
        if len(tasks) == 0:
            print("No tasks yet.")
        else:
            print("\nYour tasks:")
            for i in range(len(tasks)):
                print(i + 1, ".", tasks[i])

    elif choice == "3":
        if len(tasks) == 0:
            print("No tasks to remove.")
        else:
            for i in range(len(tasks)):
                print(i + 1, ".", tasks[i])

            num = int(input("Enter task number to remove: "))
            if 1 <= num <= len(tasks):
                removed = tasks.pop(num - 1)
                print("Removed:", removed)
            else:
                print("Invalid task number.")

    elif choice == "4":
        print("Goodbye.")
        break

    else:
        print("Invalid choice. Try again.")
