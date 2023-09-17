/// <reference types= "cypress" />
cy.on('uncaught:exception', (err, runnable) => {

  return false
})
describe('test cases for aspire', () => {

  it('randomly enter the websites', () => {
    let websites = ['https://global.almosafer.com/ar', 'https://global.almosafer.com/en']
    let RandomIndex = Math.floor(Math.random() * websites.length)
    cy.visit(websites[RandomIndex]);

    let ArabicCities = ['جدة', "دبي"]
    let ArabicRandomIndex = Math.floor(Math.random() * ArabicCities.length)
    let EnglichCities = ['reiad', 'jaddah', 'dubai']
    let EnglishRandomIndex = Math.floor(Math.random() * EnglichCities.length)

    cy.get('.cta__saudi').click()
    cy.get('#uncontrolled-tab-example-tab-hotels').click()
    if (RandomIndex == 0) {
      cy.get('[data-testid="AutoCompleteInput"]').type(ArabicCities[ArabicRandomIndex])

    } else {
      cy.get('[data-testid="AutoCompleteInput"]').type(EnglichCities[EnglishRandomIndex])
    }

  })
})
