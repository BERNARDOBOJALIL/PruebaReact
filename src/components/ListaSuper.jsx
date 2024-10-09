import React from "react"
import { Item } from "./Item"

export const ListaSuper = ({productos}) => {
    return (
        // TODO: Cargar y mostrar la lista del super
        <div>
            <h1>Lista del Super</h1>
            {productos.map((item, index) => {
                return <Item key = {index} nombre={item.nombre} precio={item.precio} />   
            })}     
        </div>
    )
}