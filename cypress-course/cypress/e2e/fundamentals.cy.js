describe('Fundamentals Test', () => {
  // ^ Nom du groupe/suite de tests

  beforeEach(() => {
    // ^ beforeEach() est une fonction qui s'exécute avant chaque test, utile pour les préparations communes
    cy.visit('/fundamentals')
    // ^ Commande Cypress pour naviguer vers une URL
  })
  
  it('Contains the correct header text', () => {
    // ^ Nom du test individuel
    cy.getDataTest('fundamentals-header').should('contain.text', 'Testing Fundamentals')
  })

  it('Accordion works correctly', () => {
    // ^ it.only() permet de ne lancer que ce test, pratique pour le développement
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
  })
})