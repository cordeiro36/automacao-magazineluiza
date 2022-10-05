

class SalePage {
    

    go() {
        cy.visit("/");
    }

    product(product) {
        cy.get("input[id=input-search]").type(product.product);
    }

    number(number) {
        cy.get("input[name=number]").type(number.number);
    }

    search() {
        cy.get("svg[data-testid=search-submit]").click();
    }

    select() {
        cy.xpath("/html/body/div[1]/div/main/section[4]/div[3]/div/ul/li[1]/a/div[2]/img").click();
    }

    addBag() {
        cy.xpath("/html/body/div[1]/div/main/section[4]/div[6]/div[2]/button").click();
    }

    nextBag() {
        cy.xpath("/html/body/div[1]/div/main/section[2]/div[2]/div/div[2]/div/div[1]/div[2]/button").click();
    }



    select1() {
        cy.contains("class", "sc-iNpzLj cQRZSWe").click();
    }

    goToSignup() {
        cy.contains("a", "Cadastre-se").click();
    }
}

export default new SalePage();
