/// <reference types="cypress" />

beforeEach('Open application', () => {
    cy.visit('/') // for now no specific page as we go to diffrent ones 
})


//Lists and Dropdowns 

it.only('Lists and Dropdowns', () => {
    cy.contains('Modal & Overlays').click()
    cy.contains('Toastr').click()

    //Native dropdown (can select the value from dropdown directly without expanding the dropdown) simply by use .should have value
    cy.contains('div', 'Toast type:').find('select').select('info').should('have.value', 'info')

    //Custom dropdown
    cy.contains('div', 'Position:').find('nb-select').click()
    cy.get('.option-list').contains('bottom-right').click()
    cy.contains('div', 'Position:').find('nb-select').should('have.text', 'bottom-right')

    //run all test with loop to check all posions .each
    cy.contains('div', 'Position:').find('nb-select').then(dropdown => {
        cy.wrap(dropdown).click()
        cy.get('.option-list nb-option').each((option, index, list) => {
            cy.wrap(option).click()
            if (index < list.length - 1)
                cy.wrap(dropdown).click()

        })
    })

})

//Cyprress does not have method .hover
// Tooltips gp tp inspect and open event Listener/ uncheck Ancestor 

it.only('Tooltips', () => {
    cy.contains('Modal & Overlays').click()
    cy.contains('Tooltip').click()
        //use method .trigger 
    cy.contains('button', 'Top').trigger('mouseenter')
    cy.get('nb-tooltip').should('have.text', 'This is a tooltip')

})
