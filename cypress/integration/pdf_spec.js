describe('pdf_to_png test', () => {
  const pdfFile = 'exercise.pdf';

  it('renders pdf', () => {
    cy.viewport(1000, 1500);
    cy.visit('/');
    cy.contains('PDF to PNG client-side conversion');
    cy.get('.react-pdf__Document').should('not.exist');
    cy.get('a').should('not.exist', 'download file');

    cy.get('input#upload').attachFile(pdfFile);

    // wait for pdf canvas render
    cy.get('.react-pdf__Document').should('exist');
    cy.get('a').should('exist', 'download file');
    cy.contains('download file').click();
    // manually examine cypress/downloads/ png file
  });
});
