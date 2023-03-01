const functions = require('./firstUppercase')

test("check is first letter always uppercase", () => {
    expect(functions.one('anadAjds asdnAAnkjdm aksdna')).toBe('Anadajds Asdnaankjdm Aksdna')
})

test("check is first letter always uppercase", () => {
    expect(functions.two('anadAjds asdnAAnkjdm aksdna')).toBe('Anadajds Asdnaankjdm Aksdna')
})