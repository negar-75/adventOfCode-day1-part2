import re

# Part 1


def first_and_last_digits(input_string):
    digits = re.findall(r"\d", input_string)

    if digits:
        first_digit = digits[0]
        last_digit = digits[-1]

        return float(f"{first_digit}{last_digit}")
    else:
        return None


output = []

with open("input.txt") as input_file:
    lines = input_file.readlines()

for line in lines:
    line = line.strip()
    if result := first_and_last_digits(line):
        output.append(result)

print("Part 1:", sum(output))

# Part 2


def concatenate_first_and_last_digits(input_string):
    word_to_digit = {
        "one": "1",
        "two": "2",
        "three": "3",
        "four": "4",
        "five": "5",
        "six": "6",
        "seven": "7",
        "eight": "8",
        "nine": "9",
    }

    all_digits = re.findall(
        r"\d|one|two|three|four|five|six|seven|eight|nine", input_string
    )

    if all_digits:
        all_numeric_digits = [word_to_digit.get(digit, digit) for digit in all_digits]

        first_digit = all_numeric_digits[0]
        last_digit = all_numeric_digits[-1]

        concatenated_number = int(str(first_digit) + str(last_digit))
        return concatenated_number

    return None


output = []

with open("./input.txt") as input_file:
    lines = input_file.readlines()

for line in lines:
    line = line.strip()
    if result := concatenate_first_and_last_digits(line):
        output.append(result)

print("Part 2:", sum(output))
