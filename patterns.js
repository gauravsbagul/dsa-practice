

let arr = [2, 3, 45, 103, 5002, 4038, 4, 42, 4500]

const getLargetNumber = (arr) => {
    let ln = -Infinity
    let sln = -Infinity

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > ln) {
            sln = ln
            ln = arr[i]
        } else if (arr[i] > sln) {
            sln = arr[i]
        }
    }

    return sln

}

const largestNum = getLargetNumber(arr)
console.log('largestNum', largestNum)

const n = 5
console.log('-----------')
for (let i = 0; i < n; i++) {
    let row = ''

    for (let j = 0; j <= i; j++) {
        row = row + ' ' + (j + 1)
    }
    console.log(row)
}
console.log('-----------')
for (let i = 0; i < n; i++) {
    let row = ''
    for (let j = 0; j <= i; j++) {
        row = row + (i + 1) + ' '
    }
    console.log(row)
}
console.log('-----------')
for (let i = n; i > 0; i--) {
    let row = ''
    for (let j = i; j > 0; j--) {
        row = (j) + ' ' + row
    }
    console.log(row)
}
console.log('-----------')
for (let i = n; i > 0; i--) {
    let row = ''
    for (let j = i; j > 0; j--) {
        row = '* ' + row
    }
    console.log(row)
}
console.log('-----------')
for (let i = 0; i <= n; i++) {
    let row = ''
    for (let j = 0; j < n; j++) {
        row = ' '.repeat(n - i) + '*'.repeat(i + 1)
    }
    console.log(row)
}

console.log('-----------')
for (let i = n; i >= 0; i--) {
    let row = ''
    for (let j = 0; j < n; j++) {
        row = ' '.repeat(n - i) + '*'.repeat(i + 1)
    }
    console.log(row)
}

console.log('-----------')
for (let i = 0; i < n; i++) {
    let row = '';
    let toggle = 1

    for (let j = 0; j <= i; j++) {
        row = row + toggle + ' '
        if (toggle == 1) {
            toggle = 0
        } else toggle = 1
    }
    console.log(row)
}

console.log('-----------')
let toggle = 1
for (let i = 0; i < n; i++) {
    let row = '';

    for (let j = 0; j <= i; j++) {
        row = row + toggle + ' '
        if (toggle == 1) {
            toggle = 0
        } else toggle = 1
    }
    console.log(row)
}
console.log('-----------')

const digit = -1234

const getLengthOfTheDigit = (d) => {
    let n = d
    let length = 0
    if (n == 0) {
        return 1
    }

    while (n > 0) {
        n = Math.floor(n / 10)
        length++
    }

    return length

}

console.log('getLengthOfTheDigit', getLengthOfTheDigit(digit))



