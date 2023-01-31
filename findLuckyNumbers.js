function findLuckyNumbers(n) {
  let array = []
  let isDuplicate = false
  for (let i = 0; i < n; i++) {
    let num = Math.floor(Math.random() * (11 - 1) + 1)
    for (let j = i - 1; j >= -1; j--) {
      if (num == array[i] || num == array[j]) {
        isDuplicate = true
      }
    }
    if (isDuplicate != true)
      array.push(num)
    else
      i--
    isDuplicate = false
  }
  return array
}
console.log(findLuckyNumbers(6))