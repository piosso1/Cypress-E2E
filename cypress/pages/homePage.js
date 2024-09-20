export class homePage {
  weblocators = {
    search_input: "input[placeholder='Search']",
    click_search: ".fa.fa-search",
    product: 'img[title="MacBook"]',
    addtocart:
      'div[id="content"] div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(2) button:nth-child(1) i:nth-child(1)',

    successMessages: ".alert.alert-success.alert-dismissible",
  };

  searchProduct(productName) {
    cy.get(this.weblocators.search_input).type(productName);
    cy.get(this.weblocators.click_search).click();
  }

  addtocart() {
    cy.get(this.weblocators.addtocart).click();
  }

  verifySucessMessage() {
    return cy.get(this.weblocators.successMessages);
  }
}
