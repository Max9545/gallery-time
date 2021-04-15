context('Gallery Time', () => {

  beforeEach(() => {
    cy.allStubbedAPICalls()
    cy.visit('http://localhost:3000/')
  })

  it('Should have a Landing Page that has Denver, img and Link', () => {
    cy.get("[data-cy=landing]").should('exist')
    .get("[data-cy=header-box]").should('exist')
    .get("[data-cy=city-name]").should('contain', 'Denver')
    .get("[data-cy=city-img]").should('exist')
    .get("[data-cy=to-galleries]").should('contain', 'See Galleries')
  })

  it('Should be able to link from the landing page to the Galleries page.', () => {
    cy.get("[data-cy=to-galleries]").click()
    .get("[data-cy=galleries-page]").should("exist")
    .get('[data-cy=header-box]').should('exist')
    .get("[data-cy=gallery-card]").should("exist")
  })

  it('Should be able to link from the galleries to a GalleryDetail page', () => {
    cy.get("[data-cy=to-galleries]").click()
    .get("[data-cy=gallery-card]").first().click()
    .get("[data-cy=detail-gallery]").should("exist")
    .get("[data-cy=header-box]").should("exist")
    .get("[data-cy=top-card]").should("exist")
    .get("[data-cy=name]").should("contain", "Rocky Mountain College of Art + Design")
    .get("[data-cy=hours-card]").should("exist").and("contain", "Hours")
    .get("[data-cy=rating-card]").should("exist").and("contain", "Link to Google map")
    .get("[data-cy=button-card]").should("exist").and("contain", "Favorite")
    .get("[data-cy=fav-button]").click()
  })

  it('Should have a way to return to the landing page from any view', () => {
    cy.get("[data-cy=landing]").should('exist')
    .get("[data-cy=to-galleries]").click()
    .get("[data-cy=galleries-page]").should("exist")
    .get("[data-cy=landing-link]").click()
    .get("[data-cy=landing]").should('exist')
    .get("[data-cy=to-galleries]").click()
    .get("[data-cy=gallery-card]").first().click()
    .get("[data-cy=detail-gallery]").should("exist")
    .get("[data-cy=landing-link]").click()
    .get("[data-cy=landing]").should('exist')
  })



});
