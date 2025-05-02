

function nbDig(n, d) {
  let str = ''
  for (let i = 0; i <= n; i++) {
      str += i ** 2
  }
  console.log(str)
  return str.split(d).length - 1
  
}

nbDig(5, 1)