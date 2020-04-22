import React , { Fragment , useState } from 'react';
import Error from './Error';

const Pregunta = ( {guardarRestante, guardarPresupuesto, actualizarPregunta }) => {

    // definir el state (estado)
    const [ cantidad , guardarCantidad ] = useState(0);
    const [ error, guardarError ] = useState(false);
    

    // funcion que lee el presupuesto
    const definirPresupuesto = e => {
       guardarCantidad( parseInt(e.target.value, 10) )
    }

    //submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        //validar 
        if (cantidad < 1 || isNaN( cantidad ) ) {
            guardarError(true);              
            return;
        }


        // si pasa la validacion
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }

    


    return ( 
        <Fragment>
            <h2> Controla tu bolsillo</h2>

            { error ? <Error mensaje=" El Presupuesto es incorrecto" /> : null }

            <form
              onSubmit={agregarPresupuesto}
            >
              

                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Cuanto quieres gastar ?"
                    onChange={definirPresupuesto}
                />

                <input
                   type="submit"
                   className="button-primary u-full-width"
                   value="definir presupuesto"
                   
                />

            </form>
        </Fragment>


     );
}
 
export default Pregunta;



