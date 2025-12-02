describe('Simple test', () => {
  it('accesses the home page and pauses', () => {
    cy.visit('/')
    cy.pause()
  })
})
