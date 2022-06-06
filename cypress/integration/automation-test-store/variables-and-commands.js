/// <reference types="Cypress" />

describe('Verifying variables , cypress commands and jquery commands', () => {
  it('Navigating to specific product pages', () => {
    cy.visit('https://www.automationteststore.com')
    // The folowing will not work
    // const makeupLink = cy.get("a[href*='product/category&path=']").contains('Makeup')
    // const skinCareLink = cy.get("a[href*='product/category&path=']").contains('Skincare')

    // makeupLink.click()
    // skinCareLink.click()

    // // The following will work
    // cy.visit('https://www.automationteststore.com')
    // const makeupLink = cy.get("a[href*='product/category&path=']").contains('Makeup')
    // makeupLink.click()
    // const skinCareLink = cy.get("a[href*='product/category&path=']").contains('Skincare')
    // skinCareLink.click()

    // Recommended Approach
    cy.get("a[href*='product/category&path=']").contains('Makeup').click()
    cy.get("a[href*='product/category&path=']").contains('Skincare').click()
  })

  it('Navigating to specific product pages', () => {
    cy.visit('https://www.automationteststore.com')
    cy.get("a[href*='product/category&path=']").contains('Makeup').click()

    // Following code will fail
    //     const header = cy.get('h1 .maintext')
    //     cy.log(header)

    cy.get('h1 .maintext').then(($headerText) => {
      const headerText = $headerText.text()
      cy.log('Found header text: ' + headerText)
      expect(headerText).is.eq('Makeup')
    })
  })

  it.only('Validate properties of the Contact Us page', () => {
    cy.visit('https://www.automationteststore.com/index.php?rt=content/contact')

    // Uses cypress command and chaining
    cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')

    // jquerty approach

    cy.contains('#ContactUsFrm', 'Contact Us Form').then((text) => {
      const firstNameText = text.find('#field_11').text()
      expect(firstNameText).to.contain('First name')

      // Embedde commands (Closure)
      cy.get('#field_11').then((fnText) => {
        cy.log(fnText.text())
        cy.log(fnText)
      })
    })
  })
})
