describe('Multi Range Slider', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('displays two times in the form', () => {
    cy.get('[data-test-id="multiRangeSlider"]').should('have.length', 2)
  })

  it('displays slider values', () => {
    cy.get('[data-test-id="leftBubble"]').first().should('contain.text', 'Under 70')
    cy.get('[data-test-id="rightBubble"]').first().should('contain.text', 'Over 295')
  })

})