describe("visit homepage", () => {
  it("visits hard coded landing page successfully", () => {
    cy.visit("http://localhost:3000");
  });
});

describe("navigate to new guestbook entry form", () => {
  it("can click on guestbook link", () => {
    cy.visit("http://localhost:3000");
    cy.get("#guestbookLink").click();
  });
});

describe("write in the guestbook", () => {
  it("can add new items", () => {
    const newAuthor = "Fred";
    const newSubject = "test";
    const newEntry = "test entry";

    cy.visit("http://localhost:3000/form");

    cy.get("#author").type(`${newAuthor}{enter}`);
    cy.get("#subject").type(`${newSubject}`);
    cy.get("#contents").type(`${newEntry}`);
  });

  it("submit the form", () => {
    cy.visit("http://localhost:3000/form");
    cy.get("#author").type("Joe {enter}");
    cy.get("#subject").type(`Joe's entry`);
    cy.get("#submitButton").click();
    cy.get(".subject-line").should("contain", "Joe's entry");
  });
});
