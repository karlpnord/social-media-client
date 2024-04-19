describe('login', () => {
  it('open up the login form and successfully login with user credentials and show profile page', () => {
    cy.visit('https://karlpnord.github.io/social-media-client/');
    cy.wait(1000);
    cy.get('#registerForm').find('button[data-auth=login]').click();
    cy.get('#loginForm').contains('Login').wait(1000);
    cy.get('#loginEmail').type('karlpnord5-test@noroff.no');
    cy.get('#loginPassword').type('karlpnord5');
    cy.get('#loginForm').find('.btn-success').click();
    cy.wait(1000);
    cy.get('h4').should('contain', 'karlpnord5');
  });
});
