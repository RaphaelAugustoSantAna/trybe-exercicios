const returnString = require('./returnString');

describe('Teste das funções', () => {
    test('Teste se a função retorna a string em caixa baixa.', () => {
        const mockstr1 = jest.spyOn(returnString, 'str1').mockImplementation(a => a.toLowerCase());

        expect(mockstr1('STRING')).toBe('string');
        expect(returnString.str1).toHaveBeenCalledTimes(1);
        expect(returnString.str1).toHaveBeenCalledWith('STRING');

    });

    test('Teste se retorna a última letra de uma string', () => {
        const mockstr2 = jest.spyOn(returnString, 'str2').mockImplementation(a => a.charAt(a.length -1));

        expect(mockstr2('string')).toBe('g');
        expect(returnString.str2).toHaveBeenCalledTimes(1);
        expect(returnString.str2).toHaveBeenCalledWith('string');
    });

    test('Teste se recebe três strings e concatená-las. ', () => {
        const mockstr3 = jest.spyOn(returnString, 'str3').mockImplementation((a, b, c) => a.concat(b,c));

        expect(mockstr3('st','ri','ng')).toBe('string'),
        expect(returnString.str3).toHaveBeenCalledTimes(1);
        expect(returnString.str3).toHaveBeenCalledWith('st','ri','ng');
    });
    test('Testa se restaura a implementação da primeira função.', () => {
      returnString.str1.mockRestore();

      expect(returnString.str1('string')).toBe('STRING');
    });
});