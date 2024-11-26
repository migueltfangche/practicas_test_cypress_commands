
 Cypress.Commands.add('escribir', (selector,texto ) => {
        cy.get(selector).type(texto);
        //cy.wait(2000)

  })

  Cypress.Commands.add('miclick', (selector) => {
    cy.get(selector).click();
    cy.wait(2000)

})
