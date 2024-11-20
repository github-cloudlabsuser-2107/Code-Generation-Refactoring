MAX = 100

def calculate_sum(arr):
    return sum(arr)

def get_number_of_elements():
    while True:
        try:
            n = int(input("Enter the number of elements (1-100): "))
            if 1 <= n <= MAX:
                return n
            else:
                print(f"Invalid input. Please provide a number between 1 and {MAX}.")
        except ValueError:
            print("Invalid input. Please enter a valid integer.")

def get_elements(n):
    arr = []
    print(f"Enter {n} integers:")
    for _ in range(n):
        while True:
            try:
                num = int(input())
                arr.append(num)
                break
            except ValueError:
                print("Invalid input. Please enter a valid integer.")
    return arr

def main():
    n = get_number_of_elements()
    arr = get_elements(n)
    result = calculate_sum(arr)
    print(f"The sum of the elements is: {result}")

if __name__ == "__main__":
    main()