import { Page, expect } from "@playwright/test";

export async function login(page: Page) {
  await page.goto("/");

  await page.locator('[data-test="username"]').fill("performance_glitch_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL("/inventory.html");
}
