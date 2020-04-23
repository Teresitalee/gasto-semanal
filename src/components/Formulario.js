import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';


const Formulario = ({agregarNuevoGasto}) => {

    // state de gastos
    const [nombre, guadarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    // cuando el usuario agrega un gasto
    const agregarGasto = e => {
        e.preventDefault();


        // validar
        if(cantidad < 1 || isNaN( cantidad) || nombre.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false);


        // construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()

        }


        // pasar el gasto al componente principal
        agregarNuevoGasto(gasto);


        // resetear el form
        guadarNombre('');
        guardarCantidad(0);

    }


    
    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aquí</h2>
            
            {error ? <Error mensaje="Ambos campos son obligatorios" /> : null }

            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                   type="text"
                   className="u-full-width"
                   placeholder="Ej. supermercado"
                   value={nombre}
                   onChange={e => guadarNombre(e.target.value)}
                />
            </div>


            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                   type="number"
                   className="u-full-width"
                   placeholder="Ej. $ 200"
                   value={cantidad}
                   onChange={e => guardarCantidad( parseInt( e.target.value, 10 ) )}
                />
            </div>

            <input
               type="submit"
               className="button-primary u-full-width"
               value="Agregar gasto"
            />

        </form>
     );
}
 
export default Formulario;

