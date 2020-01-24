import { calcularTotal, calcularPeso } from './index';
import { equal } from "assert";


describe(('Cálculo del total'), () => {
  it('carrito vacío', () => { equal(calcularTotal([]), 0) })
  it('Comprar Pan', () => { equal(calcularTotal([{producto:"Pan", precio:1}]), 1)});
  it('Comprar Pan y leche', () => { equal(calcularTotal([
    {producto:"Pan", precio:1},
    {producto:"Leche", precio:1}
  ]), 2)});
  it('Comprar Huevo', () => { equal(calcularTotal([
    {producto:"Huevo", precio:30, cantidad:12}]),360)});

    describe(('Cálculo del peso'), () => {
      it('carrito vacío', () => { equal(calcularPeso([]), 0) })
 

    });

})