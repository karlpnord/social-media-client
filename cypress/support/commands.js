// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('checkLocalStorageForLoggedInUser', () => {
  cy.window().then((window) => {
    const loggedInUser = window.localStorage.getItem('profile');
    expect(loggedInUser).to.exist;
  });
});

Cypress.Commands.add('checkProfilePosts', () => {
  cy.get('.profile-posts').then(($container) => {
    if ($container.find('.post').length > 0) {
      cy.get('.post').should('be.visible');
    } else {
      cy.get('.alert-info').should('contain.text', 'There are no posts yet...');
    }
  });
});

Cypress.Commands.add('loginUser', () => {
  // User clicks on login button to change modal to loginform
  cy.get('#registerForm').find('button[data-auth=login]').click();

  // Verify that the loginform is presented to the user
  cy.get('#loginForm').contains('Login').wait(1000);

  // Fill in the login form and submit
  cy.get('#loginEmail').type('karlpnord1000@stud.noroff.no');
  cy.get('#loginPassword').type('karlpnord1000');
  cy.get('#loginForm').find('.btn-success').click();

  // Verify that the user is redirected to theyre profile
  cy.wait(1000);
  cy.get('h4').should('contain', 'karlpnord1000');
});

Cypress.Commands.add('registerUser', () => {
  // Verify that the user sees a register profile modal
  cy.get('#registerForm').contains('Create Profile').wait(1000);

  // Fill in register form (needs to be updated for everytime test is run)
  cy.get('#registerName').type('karlpnord117');
  cy.get('#registerEmail').type('karlpnord117@stud.noroff.no');
  cy.get('#registerPassword').type('randompassword');
  const avatar =
    'https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/pass/Monkey-Selfie.jpg';
  cy.get('#registerAvatar').type(`${avatar}{enter}`, { log: false });

  // Check that the user is logged in after having registered
  cy.wait(2000);
  cy.get('footer').should('contain', 'karlpnord117');
});

Cypress.Commands.add('openApplication', () => {
  // Open the application
  cy.visit('/');
  cy.wait(1000);
});

Cypress.Commands.add('createPost', () => {
  // Fill in form
  cy.get('#postTitle').type('test post2');
  cy.get('#postTags').type('test random');
  cy.get('#postMedia').type(
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fmesh-background-triangles-polygon-1430107%2F&psig=AOvVaw10o2XNIIc045W8y1cfSLVU&ust=1718185874586000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJCCtqej04YDFQAAAAAdAAAAABAE',
  );
  cy.get('#postBody').type('random description is here');

  // Click publish post button
  cy.get('button[data-action="submit"]').click();
});
