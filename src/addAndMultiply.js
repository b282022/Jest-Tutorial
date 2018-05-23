import sum from './sum'
export default addAndMultiply

function addAndMultiply(a, b) {
  return sum(sum(a, b), (a * b));
}
