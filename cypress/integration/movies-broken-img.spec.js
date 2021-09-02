/// <reference types="cypress" />

describe('Hompage test for broken images', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/movies')
    })
    // Cypress.$('document').

    it('check if there are broken images', () => {

        cy.get('img').each(($el) => {
            cy.wrap($el)
              .should('have.attr', 'src')
              .and('not.deep.include', 'img-not-found')
        });
    })
})