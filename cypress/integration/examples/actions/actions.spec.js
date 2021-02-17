const url = 'https://example.cypress.io/commands/actions';

Given('I\'m on the homepage', () => {
  cy.visit(url)
});

// Inline parameter
When('I type in {string} slowly', (content) => {
  cy.get('.action-email')
    .type(content, { delay: 100 })
});

// Working with data table
Then('the following email address should be in the field:', (datatable) => {
  datatable.hashes().forEach(element => {
    cy.get('.action-email')
      .should('have.value', element.Email)
  })
});