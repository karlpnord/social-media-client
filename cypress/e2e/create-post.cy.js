describe('create post', () => {
  it('should successfully create and display a post on the users profile', () => {
    // Open the application
    cy.openApplication();

    // Login user
    cy.loginUser();

    // Verify that loggedinuser is saved in localstorage
    cy.checkLocalStorageForLoggedInUser();

    // Click new post button
    cy.get('#footerActions .btn-outline-success').click();

    // Fill in create post form
    cy.createPost();

    // Verify that the post title is correct when viewing post
    cy.get('.card-header b').should('have.text', 'test post2');

    // Relocate to profile page
    cy.get('#footerActions .profile').click();

    // Verify the last post's post title
    cy.wait(1000);
    cy.get('.profile-posts .list > :last b').should('have.text', 'test post2');
  });
});
