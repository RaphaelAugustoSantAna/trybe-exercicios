const service = require('./service');

describe('testando as implementações',() => {
test('Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada', () => {
    service.numRandom = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);

    expect(service.numRandom(2, 2, 2)).toBe(8);
    expect(service.numRandom).toHaveBeenCalled();
    expect(service.numRandom).toHaveBeenCalledTimes(1);
    expect(service.numRandom).toHaveBeenCalledWith(2, 2, 2);

});
test('desenvolva uma nova implementação que receba três parâmetros', () => {
    service.numRandom.mockReset();
    expect(service.numRandom).toHaveBeenCalledTimes(0);

    service.numRandom = jest.fn().mockImplementationOnce(a => a * 2);

    expect(service.numRandom(6)).toBe(12);
    expect(service.numRandom).toHaveBeenCalled();
    expect(service.numRandom).toHaveBeenCalledTimes(1);
    expect(service.numRandom).toHaveBeenCalledWith(6);
});


});