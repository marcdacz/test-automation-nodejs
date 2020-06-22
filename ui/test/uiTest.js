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

    async function comparePngs(actual, baseline, diff) {
        return new Promise((resolve, reject) => {
            try {
                const actualPng = PNG.sync.read(fs.readFileSync(actual));
                const baselinePng = PNG.sync.read(fs.readFileSync(baseline));
                const { width, height } = actualPng;
                const diffPng = new PNG({ width, height });

                let numDiffPixels = pixelmatch(actualPng.data, baselinePng.data, diffPng.data, width, height, {
                    threshold: 0.05,
                });

                if (numDiffPixels > 0) {
                    fs.writeFileSync(diff, PNG.sync.write(diffPng));
                    resolve({ status: "failed", numDiffPixels: numDiffPixels, diffPng: diff });
                } else {
                    resolve({ status: "passed" });
                }
            } catch (error) {
                resolve({ status: "failed", actual: actual, error: error });
            }
        });
    }

    it("😊  Should display shop homepage", async () => {
        await page.goto(amazonUrl, { waitUntil: "networkidle0" });
        await page.waitForSelector(".nav-cart-icon");
        await page.waitForFunction(imagesHaveLoaded, { timeout: 10000 });

        let filename = "01_homePage.png";
        await page.screenshot({
            path: `${actualScreenShotPath}/${filename}`,
        });
    });

    it("😊  Should be able to search product", async () => {
        await page.fill("#twotabsearchtextbox", "amazon echo dot");
        await page.click("input[type='submit']");
        await page.waitForSelector("span[cel_widget_id='MAIN-SEARCH_RESULTS']");
        await page.waitForFunction(imagesHaveLoaded, { timeout: 10000 });

        let filename = "02_searchProduct.png";
        await page.screenshot({
            path: `${actualScreenShotPath}/${filename}`,
        });
    });

    it("😊  Should be able to display product page", async () => {
        await page.click("span[cel_widget_id='MAIN-SEARCH_RESULTS']");
        await page.waitForSelector("#add-to-cart-button");
        await page.waitForSelector("#productTitle");
        await page.waitForFunction(imagesHaveLoaded, { timeout: 10000 });

        let filename = "03_productPage.png";
        await page.screenshot({
            path: `${actualScreenShotPath}/${filename}`,
        });
    });

    it("😊  Should be able to add product to cart", async () => {
        await page.click("#add-to-cart-button");
        await page.waitForSelector("#huc-v2-order-row-confirm-text");
        await page.waitForFunction(imagesHaveLoaded, { timeout: 10000 });

        let filename = "04_productAddedToCart.png";
        await page.screenshot({
            path: `${actualScreenShotPath}/${filename}`,
        });
    });

    it("😊  Should be able to checkout", async () => {
        await page.click(".hlb-checkout-button");
        await page.waitForSelector("#ap_email");
        await page.click("input[type='email']");
        await page.waitForFunction(imagesHaveLoaded, { timeout: 10000 });

        let filename = "05_checkout.png";
        await page.screenshot({
            path: `${actualScreenShotPath}/${filename}`,
        });

        let imageCompare = await comparePngs(
            `${actualScreenShotPath}/${filename}`,
            `${baselineScreenShotPath}/${filename}`,
            `${diffScreenShotPath}/${filename}`
        );
        expect(imageCompare.status).to.equal("passed");
    });
});
