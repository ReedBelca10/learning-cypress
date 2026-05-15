describe('Form Tests', () => {
    beforeEach(() => {
        cy.visit('/forms');
    })

    it('Test subcribe form', () => {
        cy.contains(/testing forms/i)
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
        cy.get('@subscribe-input').type('reed@domain.com')
        cy.contains(/successfully subbed: reed@domain.com/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/successfully subbed: reed@domain.com/i).should('exist')
        cy.wait(3000)
        cy.contains(/successfully subbed: reed@domain.com/i).should('not.exist')
    })
})