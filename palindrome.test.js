
const functions = require('./palindrome')

test('is palindrome', ()=>{
    expect(functions.one('kobylamamalybok')).toBe(true)
})

test('no palindrome',() => {
    expect(functions.one('hello')).toBe(false)
})