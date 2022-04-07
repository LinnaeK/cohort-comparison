describe('Position Group', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('only displays radio buttons once a sport has been selected', () => {
    // verify that radio buttons are hidden
    cy.get('.positionContainer').first().scrollIntoView().should('be.visible').should('contain', 'Positions')
    cy.get('.positionContainer').within(($positionContainer) => {
      cy.get('.radioItem').should('not.exist')
    })
    cy.get('.positionContainer').should('contain', 'Select a Sport First')

    // selects sport
    cy.get('.radioGroup').first().within(($sportContainer)=> {
      cy.get('.radioItem').first().check()
    })

    // verifies that the radio buttons are displayed
    cy.get('.positionContainer').within(($positionContainer) => {
      cy.get('.radioItem').should('be.visible').should('have.length', 6)
    })
    cy.get('.positionContainer').should('not.contain', 'Select a Sport First')
  })

  it('only allows one selection at a time', () => {
    // selects sport
    cy.get('.radioGroup').first().within(($sportContainer)=> {
      cy.get('.radioItem').first().check()
    })

    // selects position
    cy.get('.radioGroup').eq(1).within(($sportsContainer)=> {
      cy.get('.radioItem').eq(0).check().should('be.checked')
      cy.get('.radioItem').eq(1).check().should('be.checked')
      cy.get('.radioItem').eq(0).should('not.be.checked')
    })
  })
})