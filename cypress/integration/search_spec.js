describe("Search Spec Tests", () => {
  it("Visits the Home", () => {
    cy.visit("http://localhost:3000/");
    cy.get("form#navbar-search-form");
  });

  it("Searches Iphone", () => {
    cy.visit("http://localhost:3000/");
    cy.get("form#navbar-search-form").type("iPhone").submit();

    cy.url().should("include", "/items");
    cy.get("div.item").should("have.length.greaterThan", 1);
  });

  it("Searches Iphone, Visits first result", () => {
    cy.visit("http://localhost:3000/");
    cy.get("form#navbar-search-form").type("iPhone").submit();

    cy.url().should("include", "/items");
    cy.get("div.item").should("have.length.greaterThan", 1);

    cy.get("div.item").first().click();
    cy.url().should("include", "/items/MLA");
    cy.contains("iPhone");
    cy.contains("Descripción del Producto");
  });

  it("Visits iPhone Product Page", () => {
    cy.visit("http://localhost:3000/items/MLA846526085");
    cy.contains("iPhone");
    cy.contains("Descripción del Producto");
  });

  it("Search Sees No Results", () => {
    cy.visit("http://localhost:3000/");
    cy.get("form#navbar-search-form").type("asdasdasdasdasd").submit();

    cy.url().should("include", "/items");
    cy.get("div.item").should("not.exist");
  });
});
