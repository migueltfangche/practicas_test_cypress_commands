/// <reference types="Cypress" />

describe('Test con Studio Cypress', () => {
var mydata  // variale global que guarda los datos obtenidos del archivo

  beforeEach('Conexión a Institutoweb Login', () => {
    cy.visit('https://institutoweb.com.ar/test/login.html')
    cy.fixture('./datos_test')  // conectar con el archivo
    .then(test =>{  // cuando llegan los datos
        mydata = test // lo que llegó lo paso a mydata 
    })
  })

  it('Test Login Usuario', () => {
    
    mydata.forEach((data) =>{  // leo un renglón de los 10 que contiene el json
          
          cy.escribir('#tuusuario',data.usuario);
          cy.escribir('#tuclave',data.clave);
          cy.escribir('#tumail',data.casilla_mail);
          
          //cy.wait(2000)
          // click del botón ingresar
          cy.miclick(':nth-child(8)');
          // ingresamos en la segunda pantalla
          // Aserción del Título
          cy.get('h3').should('have.text', 'Acceso correcto!');
          cy.miclick('#volver');
          
    })   
  })

})