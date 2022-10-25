export class Foo {
  bar() {
    return 'bar'
  }
}


export function isCuteNumberGreaterThan10(numbers: number[]): boolean{
  const evenNumbers = findAllEvenNumbers(numbers)
  const maxNum = findTheMax(evenNumbers)
  if (!maxNum) {
    return false
  }
  return isGreaterThan10(maxNum)
}

function findAllEvenNumbers(numbers: number[]){
  return numbers.filter( num => num % 2 === 0)
}

function findTheMax(numbers: number[]){
  return Math.max(...numbers)
}

function isGreaterThan10(num: number){
  return num > 10
}


