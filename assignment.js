let enteredValues = []

for(let i = 1; i <= 10; i++) {
    enteredValues.push(i * 10)
}

function product() {
    return enteredValues[enteredValues.length - 1] * enteredValues[enteredValues.length - 2]
}

function average() {
    return (enteredValues[0] + enteredValues[enteredValues.length - 1]) / 2
}

function lowest() {
    return enteredValues[0]
}

function highest() {
    return enteredValues[enteredValues.length - 1]
}

function quotient() {
    return enteredValues[enteredValues.length - 1] / enteredValues[0]
}