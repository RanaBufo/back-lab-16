function divide(a, b) {
    if (b === 0) {
        return 'Error: division by zero';
    }
    return a / b;
}

const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

colors.forEach(color => {
    console.log(`Color: ${color}`);
});