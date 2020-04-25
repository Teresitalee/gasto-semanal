export const revisarPresupuesto = (presupuesto, restante) => {
    let porcentaje;

    if ( ( presupuesto / 4 ) > restante ){
        porcentaje = 'alert alert-danger';
    } else if ( ( presupuesto / 2) > restante ){
        porcentaje = 'alert alert-warning';
    } else {
        porcentaje = 'alert alert-success';
    }

    return porcentaje;

}
