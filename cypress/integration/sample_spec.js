describe("Home Test", () => {
  it("Visits the Home", () => {
    cy.visit("http://localhost:3000/");
    cy.get("form#navbar-search-form");
  });
});
