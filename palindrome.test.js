
const functions = require('./palindrome')

test('is palindrome', ()=>{
    expect(functions.one('kobylamamalybok')).toBe(true)
})

test('is not palindrome',() => {
    expect(functions.one('hello')).toBe(false)
})

test('is palindrome', () => {
    expect(functions.two('kobylamamalybok')).toBe(true)
})

test("isn't palindrome", () => {
    expect(functions.two("hello9")).not.toBe(true)
})