describe("👀  Validating Product Compare Page", () => {
  let browser, page, context;
  const amazonUrl = "https://www.amazon.com.au/";

  before(async () => {
    browser = await playwright[browserType].launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    await page.setViewportSize({
      width: 1920,
      height: 1080,
    });
  });

  after(async () => {
    await browser.close();
  });

  function imagesHaveLoaded() {
    return Array.from(document.images).every((i) => i.complete);
  }

  it("😊  Should display shop homepage", async () => {
    await page.goto(amazonUrl, { waitUntil: "networkidle0" });
    await page.waitForSelector(".nav-cart-icon");
    await page.waitForFunction(imagesHaveLoaded, { timeout: 10000 });
    await page.screenshot({
      path: `screenshots/${browserType}/01_homePage.png`,
    });
  });

  it("😊  Should be able to search product", async () => {
    await page.fill("#twotabsearchtextbox", "amazon echo dot");
    await page.click("input[type='submit']");
    await page.waitForSelector("span[cel_widget_id='MAIN-SEARCH_RESULTS']");
    await page.waitForFunction(imagesHaveLoaded, { timeout: 10000 });
    await page.screenshot({
      path: `screenshots/${browserType}/02_searchProduct.png`,
    });
  });

  it("😊  Should be able to display product page", async () => {
    await page.click("span[cel_widget_id='MAIN-SEARCH_RESULTS']");
    await page.waitForSelector("#add-to-cart-button");
    await page.waitForSelector("#productTitle");
    await page.waitForFunction(imagesHaveLoaded, { timeout: 10000 });
    await page.screenshot({
      path: `screenshots/${browserType}/03_productPage.png`,
    });
  });

  it("😊  Should be able to add product to cart", async () => {
    await page.click("#add-to-cart-button");
    await page.waitForSelector("#huc-v2-order-row-confirm-text");
    await page.waitForFunction(imagesHaveLoaded, { timeout: 10000 });
    await page.screenshot({
      path: `screenshots/${browserType}/04_productAddedToCart.png`,
    });
  });

  it("😊  Should be able to checkout", async () => {
    await page.click(".hlb-checkout-button");
    await page.waitForSelector("#ap_email");
    await page.waitForFunction(imagesHaveLoaded, { timeout: 10000 });
    await page.screenshot({
      path: `screenshots/${browserType}/05_checkout.png`,
    });
  });
});
