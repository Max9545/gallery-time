context('Gallery Time', () => {

  it('Should confirm true is equal to true', () => {
    expect(true).to.be.equal(true)
  });

  beforeEach(() => {
    // cy.citySearchAPICall()
    cy.visit('http://localhost:3000/')
  })

  it('Should have a Landing Page that has Denver, img and Link', () => {
    cy.get("[data-cy=landing]").should('exist')
    cy.get("[data-cy=city-name]").should('contain', 'Denver')
    cy.get("[data-cy=city-img]").should('exist')
    cy.get("[data-cy=to-galleries]").should('contain', 'See Galleries')
  })

  it('Should be able to link from the landing page to the Galleries page.', () => {
    cy.get("[data-cy=to-galleries]").click()
    cy.get("[data-cy=galleries-page]").should("exist")
    cy.get("[data-cy=gallery-card]").should("exist")
  })

  it('Should be able to link from the galleries to a GalleryDetail page', () => {
    cy.get("[data-cy=to-galleries]").click()
    cy.get("[data-cy=gallery-card]").first().click()
    cy.get("[data-cy=detail-gallery]").should("exist")
  })


});
