/**
 * assign an empty string to a variable named domainName
 * assign the value of false to variable isDomain
 * Create a for loop that:
 * assigns the value of 0 to i
 * executes code block if i is less than the length property of address
 * i++
 * if isDomain is true
 *  domainName += address[i]
 * if address at i is strictly equal to '@'
 *  assign the value of true to isDomain
 * if isDomain is true and address[i] is strictly equal to '@'
 *  assign the value of an empty string to domainName
 * return domainName
 *
*/

const solution = address => {
  let domainName = '';
  let isDomain = false
  for (let i = 0; i < address.length; i++) {
    if (isDomain) {
      domainName += address[i];
    }
    if (address[i] === '@') {
      isDomain = true;
    }
    if (isDomain
      & address[i] === '@') {
      domainName = '';
    }
  }
  return domainName
}
