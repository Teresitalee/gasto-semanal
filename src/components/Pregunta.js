import React , { Fragment } from 'react';


const Pregunta = () => {
    return ( 
        <Fragment>
            <h2> Coloca aqui tu presupuesto</h2>

            <form>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Cuanto quieres gastar ?"
                    
                
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



