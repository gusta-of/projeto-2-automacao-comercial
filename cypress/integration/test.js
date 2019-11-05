describe('Acesso telas', function(){
    it('Abre cadastro de operador', function(){
        cy.visit('http://localhost:4200/');
        cy.get('#mat-input-0').type('test');
        cy.get('#mat-input-1').type('test');
        cy.get('.mat-button-wrapper').click();
        cy.contains('Cadastros').click();
        cy.contains('Usuários').click();
        cy.contains('Operador').click();
        cy.contains('Novo');
        cy.contains('Limpar');
    })
})