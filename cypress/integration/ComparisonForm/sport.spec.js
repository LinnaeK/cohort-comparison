describe('Sport Group', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('is visible and contains 12 options', () => {
    cy.get('.sportContainer').first().should('be.visible').should('contain', 'Sports')
    cy.get('.radioGroup').first().within(($sportContainer)=> {
      cy.get('.radioItem').should('have.length', 12)
    })
  })

  it('only allows one selection at a time', () => {
    cy.get('.radioGroup').first().within(($sportsContainer)=> {
      cy.get('.radioItem').eq(0).check().should('be.checked')
      cy.get('.radioItem').eq(1).check().should('be.checked')
      cy.get('.radioItem').eq(0).should('not.be.checked')
    })
  })
})