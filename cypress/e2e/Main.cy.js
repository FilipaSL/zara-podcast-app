context("Main Page", () => {
  before(() => {
    cy.visit("/");

    //Wait for fetch to resolves
    cy.wait(20000);
  });

  describe("The Main Page", () => {
    it("Fetches data", () => {
      cy.get('[data-testid="card"]', {
        withinSubject: null,
      }).should("have.length.greaterThan", 0);
    });

    it("Display correct number of results", () => {
      cy.get('[data-testid="results"]', {
        withinSubject: null,
      })
        .invoke("text")
        .then((value) => {
          cy.get('[data-testid="card"]', {
            withinSubject: null,
          }).should("have.length", value);
        });
    });

    it("Search renders list with corresponding results after each insertion", () => {
      //type on search
      cy.get('[data-testid="search"]', {
        withinSubject: null,
      }).type("k");

      //results number update so as list
      cy.get('[data-testid="results"]', {
        withinSubject: null,
      })
        .invoke("text")
        .then((value) => {
          cy.get('[data-testid="card"]', {
            withinSubject: null,
          }).should("have.length", value);
        });
    });

    it("Navigates after clicking a card", () => {
      cy.get('[data-testid="card"]', {
        withinSubject: null,
      })
        .first()
        .click();

      cy.url().should("include", "/podcast");
    });
  });
});

export {};
