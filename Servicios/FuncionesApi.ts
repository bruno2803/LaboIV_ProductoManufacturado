import Instrumento from "../Entidades/Instrumento";
import DetallePedido from "../Entidades/DetallePedido";
import Pedido from "../Entidades/Pedido";
import Productos from "../Entidades/Productos";

export function getAllInstrumentos(){
    return fetch(`http://localhost:9000/api/v1/Instrumentos`)
            .then(res=>res.json())
            .then(json=>json)
}

export function getOneInstrumento(id:number){
    return fetch(`http://localhost:9000/api/v1/Instrumentos/${id}`)
            .then(res=>res.json())
            .then(json=>json)
}

export function getAllCategorias(){
    return fetch(`http://localhost:9000/api/v1/Categorias`)
            .then(res=>res.json())
            .then(json=>json)
}

export function deleteInstrumento(id:number) {
    return fetch(`http://localhost:9000/api/v1/Instrumentos/${id}`, {
        method: 'DELETE'
    })
}

{/*
export function saveInstrumento(instrumento: Instrumento) {
    return fetch('http://localhost:8080/api/v1/Instrumentos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(instrumento)
    })
}
*/}
export function updateInstrumento(id: number, instrumento: any) {
    return fetch(`http://localhost:9000/api/v1/Instrumentos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(instrumento)
    })
}



export async function saveInstrumento(data: Instrumento): Promise<Instrumento> {
    const response = await fetch( "http://localhost:9000/api/v1/Instrumentos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const newData = await response.json();
    return newData as Instrumento;
  }

  export async function saveDetallePedido(data: DetallePedido): Promise<DetallePedido> {
    const response = await fetch( "http://localhost:9000/api/v1/DetallePedido", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const newData = await response.json();
    return newData as DetallePedido;
  }

  export async function savePedido(data: Pedido): Promise<Pedido> {
    const response = await fetch( "http://localhost:9000/api/v1/DetallePedido", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const newData = await response.json();
    return newData as Pedido;
  }


export function getProductosJson(){
    let datos:Productos[] = [
    {
      "id": 1,
      "img": "https://s7d1.scene7.com/is/image/mcdonalds/DC_202201_0007-005_QuarterPounderwithCheese_832x472:nutrition-calculator-tile",
      "categoria": "hamburguesas",
      "denominacion": "Chesse Burguer",
      "precioVenta": "7500",
      "tiempoEstimadoMinutos": "25",
      "descripción": "Hamburugesa doble carne, doble cheddar",
      "cantidad": 1,
    },
    {
      "id": 2,
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu4DrAA29-nenpFQkc6gjkOeSy8zJ6ukGHMw&s",
      "categoria": "Papas",
      "denominacion": "Papas con cheddar",
      "precioVenta": "4500",
      "tiempoEstimadoMinutos": "15",
      "descripción": "Papas con cheddar caseras.",
      "cantidad": 1,
    }
];


return datos
}