const service = require('./service');

test('Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada', () => {
    service.numRandom = jest.fn().mockReturnValue(10);

    expect(service.numRandom()).toBe(10);
    expect(service.numRandom).toHaveBeenCalled();
    expect(service.numRandom).toHaveBeenCalledTimes(1);
});