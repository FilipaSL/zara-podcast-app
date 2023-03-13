context("Details Page", () => {
  before(() => {
    cy.visit("/");

    //Wait for fetch to resolves
    cy.wait(20000);

    cy.visit("/podcast/251507798");

    //Wait for fetch to resolves
    cy.wait(5000);
  });

  describe("The Details Page", () => {
    it("Fetches data", () => {
      cy.get('[data-testid="infoTable"]').should("exist");

      cy.get('[data-testid="infoTable"]')
        .find("tr")
        .should("have.length.greaterThan", 0);
    });

    it("Navigates after clicking a card", () => {
      cy.get('[data-testid="infoTable"]')
        .find("tr")
        .eq(1)
        .find("td")
        .first()
        .click();

      cy.url().should("include", "/episodes");
    });
  });
});

export {};
