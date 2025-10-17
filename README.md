# Cypress-Test-Lists-Dropdowns-Tooltips
This Cypress suite demonstrates advanced interaction with native HTML dropdowns, custom UI dropdowns, and hover-triggered tooltips, showcasing how to automate and validate dynamic UI behaviors.


What this project covers

Lists & Dropdowns:
Native <select> dropdown tested via .select() and .should('have.value')
Custom component dropdowns (<nb-select>) tested with:
Click + Option selection
Assertion of selected value
Full loop test using .each() to validate all dropdown positions dynamically
Demonstrates use of .then() with cy.wrap() for reusable scoped dropdown interaction

Tooltips:

Cypress doesn't support .hover(), so this test uses .trigger('mouseenter') to simulate a mouse hover
Verifies tooltip content using DOM selector (nb-tooltip) and .should('have.text')

Skills Practiced:
Dropdown automation (native and custom)
Dynamic test loops with .each() and indexed logic
UI behavior simulation using .trigger()
Working with scoped elements (cy.contains().find())
Conditional interactions using cy.wrap() and if (index < list.length - 1)
