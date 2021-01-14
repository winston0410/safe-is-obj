// https://medium.com/javascript-in-plain-english/javascript-check-if-a-variable-is-an-object-and-nothing-else-not-an-array-a-set-etc-a3987ea08fd7

const safeIsObj = (v) => Object.prototype.toString.call(v) === '[object Object]'

export default safeIsObj
