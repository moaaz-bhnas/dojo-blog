/// <reference types="cypress"/>

describe("Creating new blog", () => {
  it("loads successfully", () => {
    // ARRANGE
    cy.visit("http://localhost:3000/create");

    // ACT
    // None: Loading only

    // ASSERT
    cy.get(".createForm")
      .should("be.visible")
      .within(() => {
        cy.get(".createForm__label").should("have.length", "3");
        cy.get(".createForm__control").should("have.length", "3");
        cy.get(".createForm__button").should("contain.text", "Add blog");
      });
  });

  it("activates the button when the form is filled in", () => {
    // ACT
    cy.get(".createForm__control").eq(0).type("hey!");
    cy.get(".createForm__control").eq(1).type("Life is messy");
    cy.get(".createForm__control").eq(2).select("hazem");

    // ASSERT
    cy.get(".createForm__button").should("be.enabled");
  });

  it("redirects to the home page", () => {
    // ACT
    cy.get(".createForm__control").eq(0).type("hey!");
    cy.get(".createForm__control").eq(1).type("Life is messy");
    cy.get(".createForm__control").eq(2).select("hazem");
    cy.get(".createForm__button").click();

    // ASSERT
    cy.location("pathname").should("eq", "/");
  });
});
