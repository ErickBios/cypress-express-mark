/// <reference types="cypress" />


describe('tarefas', () => {

    let testData;
    before (()=>{
        cy.fixture('tasks').then(t => {
            testData = t
        })

    })

    context('Cadastros', function(){

        it('Deve cadastrar uma nova tarefa', () => {

            const taskName = 'Estudar cypress todos os dias'
    
            //EC
            cy.removeTaskByName(taskName)
            cy.createTask(taskName)
    
            cy.contains('main div p', taskName)
                .should('be.visible')
    
    
        })
    
        it('não deve permitir tarefaz duplicadas', () => {
    
            const task = testData.dup;
            
            
                // {   
                //  name: 'Estudar JavaScript',
                //  is_done: false
                //  }
    
            cy.removeTaskByName(task.name)
            cy.postTaskViaApi(task)
            cy.createTask(task.name)
            
            cy.get('.swal2-html-container')
                .should('be.visible')
                .should('have.text', 'Task already exists!')
    
        })
    
        it('campo obrigatório', () => {
    
            cy.createTask()
            cy.isRequired()
    
            
        })

    } ) 

    context('atualização', function(){
        it.only('deve concluir uma tarefa', function(){

            const task = {
                   name: 'Estuda CTFL no Sylabos',
                    is_done: false
                    }

             cy.removeTaskByName(task.name)
             cy.postTaskViaApi(task)           

            cy.visit('/')

            cy.contains('p', task.name)
            .parent()
            .find('button[class*=ItemToggle]')
            .click()

            cy.contains('p', task.name).should('have.css', 'text-decoration-line', 'line-through')
        })
    })

    context('exclusão', function(){
        it.only('deve remover uma tarefa', function(){

            const task = {
                   name: 'Comprar ketchup',
                    is_done: false
                    }
             cy.removeTaskByName(task.name)
             cy.postTaskViaApi(task)           

            cy.visit('/')

            cy.contains('p', task.name)
            .parent()
            .find('button[class*=ItemToggle]')
            .click()

            cy.contains('p', task.name).should('have.css', 'text-decoration-line', 'line-through')
        })
    })
})
