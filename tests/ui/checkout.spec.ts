import { test, expect } from "@playwright/test";
import { CheckOut } from "../../page/CheckoutPage";
import { login } from "../../utils/login";

test.beforeEach(async ({ page }) => {
  await login(page);
});

test.describe("Test cases for checkout flow", () => {
  test("Successful purchase", async ({ page }) => {
    const checkoutPage = new CheckOut(page);
    await checkoutPage.selectProduct("item-4-title-link");
    await checkoutPage.validateURL("/inventory-item.html?id=4");
    await checkoutPage.clickBtn("add-to-cart");
    await checkoutPage.validateInnerText("shopping-cart-badge", "1");
    await checkoutPage.clickBtn("back-to-products");
    await checkoutPage.validateURL("/inventory.html");
    await checkoutPage.clickBtn("shopping-cart-link");
    await checkoutPage.validateURL("/cart.html");
    await checkoutPage.validateVisibleText("Sauce Labs Backpack");
    await checkoutPage.validateInnerText("item-quantity", "1");
    await checkoutPage.validateInnerText("inventory-item-price", "$29.99");
    await checkoutPage.clickBtn("checkout");
    await checkoutPage.validateURL("/checkout-step-one.html");
    await checkoutPage.fillForm("firstName", "juan", "lastName", "julio", "postalCode", "hola");
    await checkoutPage.clickBtn("continue");
    await checkoutPage.validateURL("/checkout-step-two.html");
    await checkoutPage.validateVisibleText("Checkout: Overview");
    const item = await checkoutPage.getAmount("subtotal-label");
    const tax = await checkoutPage.getAmount("tax-label");
    const total = await checkoutPage.getAmount("total-label");
    expect(item + tax).toBeCloseTo(total, 2);
    await checkoutPage.clickBtn("finish");
    await checkoutPage.validateURL("/checkout-complete.html");
    await checkoutPage.validateVisibleText("Checkout: Complete!");
    await checkoutPage.validateVisibleText("Thank you for your order!");

  });
  test("Remove item from cart", async ({page}) => {
        const checkoutPage = new CheckOut(page);
        await checkoutPage.selectProduct("item-4-title-link");
        await checkoutPage.validateURL("/inventory-item.html?id=4");
        await checkoutPage.clickBtn("add-to-cart");
        await checkoutPage.validateInnerText("shopping-cart-badge", "1");
        await checkoutPage.clickBtn("back-to-products");
        await checkoutPage.validateURL("/inventory.html");
        await checkoutPage.clickBtn("shopping-cart-link");
        await checkoutPage.validateURL("/cart.html");
        await checkoutPage.validateVisibleText("Sauce Labs Backpack");
        await checkoutPage.validateInnerText("item-quantity", "1");
        await checkoutPage.validateInnerText("inventory-item-price", "$29.99");
        await checkoutPage.clickBtn("remove-sauce-labs-backpack");
        await checkoutPage.validateNotVisibleElement("shopping-cart-badge");
        await checkoutPage.validateNotVisibleElement("inventory-item");

  })
});
