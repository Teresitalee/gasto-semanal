import React , { Fragment , useState } from 'react';
import Error from './Error';

const Pregunta = () => {

    // definir el state (estado)
    const [ cantidad , guardarCantidad ] = useState(0);
    const [ error, guardarError ] = useState(false);

    // funcion que lee el presupuesto
    const definirPresupuesto = e => {
       guardarCantidad( parseInt(e.target.value) )
    }

    //submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventeDefault();

        //validar 
        if (cantidad < 1 || NaN(cantidad) ) {
            guardarError(true);
            return;
        }


        // si pasa la validacion
        guardarError(false);



    }




    return ( 
        <Fragment>
            <h2> Controla tu bolsillo</h2>

            { error ? <Error mensaje=" El Presupuesto es incorrecto" /> : null }

            <form
              onSubmit = {agregarPresupuesto} 
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



