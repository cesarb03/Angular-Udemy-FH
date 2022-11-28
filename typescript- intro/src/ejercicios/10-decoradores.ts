/*
    ===== Código de TypeScript =====
*/

function classDecorator<T extends {new (...args: any[]): {}}>(
    constructor: T )
{
    return class extends constructor {
        newProperty= 'New Property';
        hello= 'override';
    }
}

@classDecorator
class miSuperclass {
    public miPropiedad: string = 'ABC123';

    imprimir(){
        console.log('Hola mundo')
    }
}

console.log( classDecorator)

const miClase = new miSuperclass();
console.log( miClase.miPropiedad)
