function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        return "Error! Division by zero.";
    }
    return x / y;
}

function main() {
    console.log("Select operation:");
    console.log("1. Add");
    console.log("2. Subtract");
    console.log("3. Multiply");
    console.log("4. Divide");

    const choice = prompt("Enter choice (1/2/3/4): ");

    if (['1', '2', '3', '4'].includes(choice)) {
        const num1 = parseFloat(prompt("Enter first number: "));
        const num2 = parseFloat(prompt("Enter second number: "));

        if (choice === '1') {
            console.log(`${num1} + ${num2} = ${add(num1, num2)}`);
        } else if (choice === '2') {
            console.log(`${num1} - ${num2} = ${subtract(num1, num2)}`);
        } else if (choice === '3') {
            console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);
        } else if (choice === '4') {
            console.log(`${num1} / ${num2} = ${divide(num1, num2)}`);
        }
    } else {
        console.log("Invalid input");
    }
}

main();