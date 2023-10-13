describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");

    cy.get("button").click();
    cy.get("button").should("have.text", "click: 1");

    for (let i = 0; i < 10; i++) {
      cy.get("button").click();
    }
    cy.get("button").should("have.text", "click: 10");
  });
});
