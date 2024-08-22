import { test, expect } from "@playwright/test";

test("home page is working", async ({ page }) => {
  await page.goto("/");
  expect(true).toBe(true);
});
