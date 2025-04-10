// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Encapsular comandos repetitivos
Cypress.Commands.add('createTask', (taskName = ' ') => {

    cy.visit('/')

    cy.get('input[placeholder="Add a new Task"]').as('inputTask')

    if(taskName !== ' '){

        cy.get('@inputTask')
        .type(taskName) 
    }
     
    cy.contains('button', 'Create')
        .click()

    cy.request({
        url: Cypress.env('ipiUrl') + '/tasks',
        method: 'POST',
        body: taskName,
        failOnStatusCode: false
    }).then(response => {
        expect(response.status).to.eq(400);
    });


})

Cypress.Commands.add('isRequired', () => {

    cy.get('@inputTask')
    .then(($input) => {
        // Aciona a validação manualmente
        $input[0].reportValidity();
        // Verifica a mensagem de validação do input
        expect($input[0].validationMessage).to.eq('This is a required field');
    });
})
Cypress.Commands.add('removeTaskByName', (taskName) => {

    cy.request({
        url: Cypress.env('ipiUrl') + '/helper/tasks/',
        method: 'DELETE',
        body: { name: taskName },
        failOnStatusCode: true
    }).then(response => {
        expect(response.status).to.eq(204)
    })

})

Cypress.Commands.add('postTaskViaApi', (task) => {
    cy.request({
        url: Cypress.env('ipiUrl') +'/tasks',
        method: 'POST',
        body: task
    }).then(response => {
        expect(response.status).to.eq(201);
    });

})