describe('Comparison Form', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.on('window:before:load', (win) => {
      cy.stub(win.console, 'log').as('consoleLog')
    })
  })

  it('prints selections to console', () => {
    // selects sport
    cy.get('.radioGroup').first().within(($sportContainer)=> {
      cy.get('.radioItem').first().check()
    })

    // selects position
    cy.get('.positionContainer').within(($positionContainer) => {
      cy.get('.radioItem').eq(2).check().should('be.checked')
    })

    cy.get('[type="button"]').eq(1).click()

    cy.get('@consoleLog').should('be.calledWith', 'You have selected: {"sport":"all","position":"referee","weight":{"min":70,"max":295},"height":{"min":62,"max":82}}')
  })

  it('clears selection upon cancel', () => {
    // selects sport
    cy.get('.radioGroup').first().within(($sportContainer)=> {
      cy.get('.radioItem').first().check().should('be.checked')
    })

    // selects position
    cy.get('.positionContainer').within(($positionContainer) => {
      cy.get('.radioItem').eq(2).check().should('be.checked')
    })

    // selects cancel
    cy.get('[type="button"]').eq(0).click()

    // verifies selections have been cleared
    cy.get('.radioGroup').first().within(($sportContainer)=> {
      cy.get('.radioItem').first().should('not.be.checked')
    })

    cy.get('.positionContainer').within(($positionContainer) => {
      cy.get('.radioItem').should('not.exist')
    })
  })
})