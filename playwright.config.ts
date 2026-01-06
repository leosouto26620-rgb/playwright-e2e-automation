import { defineConfig, devices } from "@playwright/test";
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["html", { open: "never" }]],
  use: {
    headless: !!process.env.CI,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "on-first-retry",
    baseURL: "https://www.saucedemo.com/",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
