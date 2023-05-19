const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
  test("pages loads and opens select robot cards", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
    let drawRobots = await driver.wait(until.elementLocated(By.id("draw")))
    await drawRobots.click()
  });
  test("pages loads and opens select robot cards and chooses robots", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
    let drawRobots = await driver.wait(until.elementLocated(By.id("draw")))
    await drawRobots.click()
    let chooseRobots = await driver.wait(until.elementLocated(By.className("bot-btn")))
    await chooseRobots.click()
  });
});