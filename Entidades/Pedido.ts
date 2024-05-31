import DetallePedido from "./DetallePedido";

export default class Pedido{

    id: number = 0;
  fecha: Date = new Date();
  totalPedido: number = 0;
  detalles: Set<DetallePedido> = new Set<DetallePedido>();
    

}