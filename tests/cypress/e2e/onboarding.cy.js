import SalePage from '../support/pages/SalePage'

describe('Purchase', () => {

    const dados = {
        product: 'Tv',
    }

    it('realizar pedido com sucesso', () => {

        SalePage.go()
        SalePage.product(dados)
        SalePage.search()
        cy.wait(5000)
        SalePage.select()
        cy.wait(5000)
        SalePage.addBag()  
        cy.wait(5000)
        SalePage.nextBag()  
    })
})  