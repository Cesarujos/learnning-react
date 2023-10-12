import React from 'react';

function Testimonio(){
    return (
      <div className='testimonio-container'>
        <img
          className='imagen-testimonio'
          src={ require('../images/testimonio-emma.png')}
          alt='Foto del testigo'
        />
        <div className="container-text-testimonio">
          <p className='nombre-testimonio'>ENMMA</p>
          <p className="cargo-testimonio">INGENIERA DE SOFTWARE</p>
          <p className="text-testimonio">SIEMPRE HE TENIDO PROBLEMAS, PERO AHORA ME PARECE FÁCIL</p>
        </div>
      </div>
    );
}

export default Testimonio