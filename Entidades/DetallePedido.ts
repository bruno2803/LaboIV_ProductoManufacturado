import Pedido from "./Pedido";
import Instrumento from "./Instrumento";

export default class DetallePedido{
    id: number = 0;
    cantidad: number = 0;
    instrumento: Instrumento = new Instrumento();
    pedido: Pedido = new Pedido();

}