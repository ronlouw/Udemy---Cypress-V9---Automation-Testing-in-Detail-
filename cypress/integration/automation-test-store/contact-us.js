/// <reference types="Cypress" />

describe('Test Contact Us form via Automation Test Store', () => {
  it('Should be able to submit a succesfull submission via contact us form', () => {
    cy.visit('https://www.automationteststore.com')
    cy.get('.info_links_footer > :nth-child(5) > a').click()
    cy.get('#ContactUsFrm_first_name').type('Joe')
    cy.get('#ContactUsFrm_email').type('joe@email.com')
    cy.get('#ContactUsFrm_enquiry').type('Do you  provide additional discount on both orders')
    cy.get('.col-md-6 > .btn').click()
  })
})
