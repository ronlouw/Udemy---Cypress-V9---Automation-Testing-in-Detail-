/// <reference types="Cypress" />

describe('Test Contact Us form via webdriverUni', () => {
  it('Should be able to submit a succesfull submission via contact us form', () => {
    cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
    // cy.get('#contact-us').click({ force: true })
    cy.get('[name="first_name"]').type('Ronald')
    cy.get('[name="last_name"]').type('van der Louw')
    cy.get('[name="email"]').type('ronald@email.com')
    cy.get('textarea.feedback-input').type('Some feedback in this input')
    cy.get('[type="submit"]').click()
  })

  it.only('Should not be able to submit a succesfull submission via contact us form as all fields are required', () => {
    cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
    cy.get('[name="first_name"]').type('Tom')
    cy.get('[name="last_name"]').type('Blogs')
    cy.get('textarea.feedback-input').type('Some feedback in this input')
    cy.get('[type="submit"]').click()
  })
})
