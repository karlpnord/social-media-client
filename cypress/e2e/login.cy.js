describe('login', () => {
  it('open up the login form and successfully login with user credentials and show profile page', () => {
    // Open the application
    cy.openApplication();

    // Login user
    cy.loginUser();

    // Verify that loggedinuser is saved in localstorage
    cy.checkLocalStorageForLoggedInUser();

    // Check that user posts are displayed on the profile
    cy.checkProfilePosts();
  });
});
