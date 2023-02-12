const TIMEOUT = 20000
describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it('should click on counter', async () => {
    const buttonPlus = element(by.id('buttonPlus'))
    const buttonMinus = element(by.id('buttonMinus'))
    //const counter = element(by.id('counter'))
    await waitFor(buttonPlus).toBeVisible().withTimeout(TIMEOUT)
    await waitFor(buttonMinus).toBeVisible().withTimeout(TIMEOUT)
    //await waitFor(counter).toBeVisible().withTimeout(TIMEOUT)
    for (let i = 0; i < 10; i++) {
      await buttonPlus.tap();
    }
    for (let i = 0; i < 10; i++) {
      await buttonMinus.tap();
    }
    const counter = element(by.id('counter'))
    await expect(counter).toBeVisible();
    //await expect(counter).toHaveText('0')
    //console.log(element(by.id('counter')));
    //await expect(element(by.id('counter'))).toHaveText('0')
    //await expect(counter).toHaveText('0')
    // debugger;
  });
});
