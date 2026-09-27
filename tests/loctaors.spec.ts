import { test, expect } from '@playwright/test';

test('test with locators', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://the-internet.herokuapp.com/login');

  // Fill in the username and password fields
  const usernameInput = page.getByLabel('Username');
  const passwordInput = page.getByLabel('Password');
  const loginButton = page.getByRole('button', { name: 'Login' });

  await usernameInput.fill('tomsmith');
  await passwordInput.fill('SuperSecretPassword!');
  await loginButton.click();

  await expect(page.getByText('You logged into a secure area!')).toBeVisible();
  //await 
});

