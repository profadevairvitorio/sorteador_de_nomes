describe('Single Name Selection', () => {
  beforeEach(() => {
    cy.visit('index.html');
  });

  it('should correctly draw one name when one name is requested', () => {
    cy.get('textarea#namesInput').type('Alice, Bob, Charlie');
    cy.get('input#quantityInput').type('1');
    cy.get('button#drawButton').click();
    cy.get('#result').should('exist');
    cy.get('#result').invoke('text').should('match', /Name drawn: (Alice|Bob|Charlie)/);
  });
});