/// <reference types="cypress" />

describe('Home page action test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('.click() - click on a DOM element', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.

    cy.get('.nav-link').eq(0).should('have.class', 'active')

    cy.get('.btn').first().click()
    cy.get('.nav-link').eq(1).should('have.class', 'active')

    cy.visit('http://localhost:3000/')

    cy.get('.btn').last().click()
    cy.get('.nav-link').eq(2).should('have.class', 'active')
  })
})