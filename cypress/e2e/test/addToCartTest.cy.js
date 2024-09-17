import { homePage } from "../../pages/homePage";
const homePageObj = new homePage();
import testData from "../../fixtures/testData.json";

describe(" test automation", () => {
  before(() => {
    cy.login(testData.login.username, testData.login.password);
  });

  it("Add To cart flow", () => {
    homePageObj.searchProduct(testData.product.productName);
    homePageObj.addtocart();
    homePageObj
      .verifySucessMessage()
      .should("contain", testData.message.successMessage)
      .and("contain", testData.product.productName);
  });
});
