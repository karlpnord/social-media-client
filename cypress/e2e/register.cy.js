describe('register', () => {
  it('a new user with username, email, password and avatar', () => {
    // Open the application
    cy.openApplication();

    // Register User
    cy.registerUser();

    // Verify that user details is saved in localstorage
    cy.checkLocalStorageForLoggedInUser();
  });
});
