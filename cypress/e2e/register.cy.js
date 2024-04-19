describe('register', () => {
  it('a new user with username, email, password and avatar', () => {
    cy.visit('https://karlpnord.github.io/social-media-client/');
    cy.wait(1000);
    cy.get('#registerForm').contains('Create Profile').wait(1000);

    //update the name and email

    cy.get('#registerName').type('karlpnord100');
    cy.get('#registerEmail').type('karlpnord100@noroff.no');
    cy.get('#registerPassword').type('randompassword');
    const avatar =
      'https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/pass/Monkey-Selfie.jpg';
    cy.get('#registerAvatar').type(`${avatar}{enter}`, { log: false });
    cy.wait(2000);
    cy.get('footer').should('contain', 'karlpnord100');
  });
});
