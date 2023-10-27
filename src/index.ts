import { remote } from 'webdriverio';
import { appiumOptions } from '../config/appiumConfig';
// const assert = require('assert');
// const { byValueKey } = require('appium-flutter-finder');


(async () => {
    // const counterTextFinder = byValueKey('counter');
    // const buttonFinder = byValueKey('increment');
  
    const driver = await remote(appiumOptions);
  
    if (process.env.APPIUM_OS === 'android') {
      await driver.switchContext('NATIVE_APP');
      await (await driver.$('~fab')).click();
      await driver.switchContext('FLUTTER');
    } else {
      console.log('Switching context to `NATIVE_APP` is currently only applicable to Android demo app.')
    }
  
    // assert.strictEqual(await driver.getElementText(counterTextFinder), '0');
  
    // await driver.elementClick(buttonFinder);
    // await driver.touchAction({
    //   action: 'tap',
    //   element: { elementId: buttonFinder }
    // });
  
    // assert.strictEqual(await driver.getElementText(counterTextFinder), '2');
  
    driver.deleteSession();
  })();