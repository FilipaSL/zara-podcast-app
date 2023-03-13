context("Episodes Page", () => {
  before(() => {
    cy.visit("/");

    //Wait for fetch to resolves
    cy.wait(20000);

    cy.visit("/podcast/251507798/episodes/1000601464115");

    //Wait for fetch to resolves
    cy.wait(5000);
  });

  describe("The Episodes Page", () => {
    it("Fetches data", () => {
      cy.get('[data-testid="infoPlayer"]').should("exist");
    });

    it("Redirects after clicking on side info component", () => {
      cy.get('[data-testid="containerRoute"]').click();

      cy.url().should("include", "/podcast");
      cy.url().should("not.include", "/episodes");
    });
  });
});

export {};
