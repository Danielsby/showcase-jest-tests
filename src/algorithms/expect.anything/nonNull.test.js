test('map calls its argument with a non-null argument', () => {
    const mock = jest.fn();
    [1].map(x => mock(x));
    console.log(mock);
    expect(mock).toBeCalledWith(expect.anything());
})

test('compare float in object properties', () => {
    expect({
        title: '0.1 + 0.2',
        sum: 0.1 + 0.2,
    }).toEqual({
        title: '0.1 + 0.2',
        sum: expect.closeTo(0.3, 5),
    });
});

describe('not.objectContaining', () => {
    const expected = {foo: 'bar'};

    it('matches if the actual object does not contain expected key: value pairs', () => {
        expect({foo: 'ba'}).toEqual(expect.not.objectContaining(expected));
    });
});

describe('not.stringContaining', () => {
    const expected = 'Hello world!';

    it('matches if the received value does not contain the expected substring', () => {
        expect('How are you?').toEqual(expect.not.stringContaining(expected));
    });
});