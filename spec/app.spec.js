class testEntrada {
    
    testValor(valor){
        if(valor < 0){
            return false;
        }else if ( valor > 10){
            return false;
        }else if (isNaN(valor) || valor==0){
            return false;
        }else {
            return true;
        }
    }
}


describe('Test de entradas', function(){

    var entrada = new testEntrada;

    it('Un entero menor de 10', function(){
        console.log('Un entero menor de 10');
        expect(entrada.testValor(5)).toBeLessThan(10);

    });
    it('Un entero mayor de 0', function(){
        console.log('Un entero mayor de 0');
        expect(entrada.testValor(5)).toBeGreaterThan(0);

    });
    it('Un entero entre el 0 y el 10 como el 5 debería ser correcto', function(){
        console.log('Un entero entre el 0 y el 10 como el 5 debería ser correcto');
        expect(entrada.testValor(5)).toBe(true);

    });
    it('Una letra no es correcto', function(){
        console.log('Una letra no es correcto');
        expect(entrada.testValor('r')).toBe(false);

    });
    
});