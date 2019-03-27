  function takeANumber(line, newCustomer) {
    line.push(newCustomer)
    return `Welcome, ${newCustomer}. You are number ${(line.length)} in line.`
  }
  
  function nowServing(array) {
    if (array.length === 0) {
      return `There is nobody waiting to be served!`
    } else {
      return `Currently serving ${array.shift()}.`
    }
  }
  
  function currentLine(array) {
    let result = `The line is currently: `
    if (array.length === 0) {
      return `The line is currently empty.`
    } else {
      for(let i=0; i<array.length; i++) {
        result += `${i + 1}. ${array[i]}, `
      }
      return result.slice(0, -2)
    }
  }
  
  
  var example = []
  
  function currentNumber(line, newCustomer) {
    
    
    line.push(newCustomer)
    return `Welcome, ${newCustomer}. You are number ${(line.length)} in line.`
  }
  
  