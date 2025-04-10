describe('home', () => {
  it('webapp deve esta oline', () => {
    cy.visit('/')
    
    cy.title().should('eq', 'Gerencie suas tarefas com Mark L')
  })
})