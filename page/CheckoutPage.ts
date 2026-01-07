import { Locator, Page, expect } from "@playwright/test";

export class CheckOut {
  constructor(private page: Page) {}

  getElement(name: string) {
    return this.page.locator(`[data-test="${name}"]`);
  }

  async selectProduct(name: string) {
    await this.getElement(name).click();
  }

  async clickBtn(name: string) {
    await this.getElement(name).click();
  }

  async fillForm(
    name: string,
    valueName: string,
    lastName: string,
    valueLastName: string,
    code: string,
    valueCode: string
  ) {
    await this.getElement(name).fill(valueName);
    await this.getElement(lastName).fill(valueLastName);
    await this.getElement(code).fill(valueCode);
  }

  async validateInnerText(name: string, value: string) {
    await expect(this.getElement(name)).toHaveText(value);
  }

  async validateVisibleText(name: string) {
    await expect(this.page.getByText(name)).toBeVisible();
  }

  async validateURL(url: string) {
    await expect(this.page).toHaveURL(url);
  }

  async getAmount(name: string) {
    const text = await this.getElement(name).innerText();
    return Number(text.match(/\$([\d.]+)/)![1]);
  }

  async validateNotVisibleElement (name: string){
    await expect(this.getElement(name)).not.toBeVisible();
  }

  
}