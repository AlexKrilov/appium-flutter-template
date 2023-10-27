export interface OsSpecificOps {
    "platformName"?: string;
    "appium:deviceName"?: string;
    "appium:app"?: string;
    "appium:platformVersion"?: string;
    "appium:noReset"?: boolean;
}

export interface AppiumOptions {
  port: number;
  capabilities: {
    osSpecificOps?: OsSpecificOps;
    "appium:automationName": string;
    "appium:retryBackoffTime": number;        
  };
}

const osSpecificOps: OsSpecificOps =
    process.env.APPIUM_OS === "android" ? {
        "platformName": "Android",
        "appium:deviceName": "emulator-5554",
        "appium:app": "https://github.com/truongsinh/appium-flutter-driver/releases/download/v0.0.4/android-real-debug.apk",
    }: process.env.APPIUM_OS === "ios" ? {
        "platformName": "iOS",
        "appium:platformVersion": "12.2",
        "appium:deviceName": "iPhone X",
        "appium:noReset": true,
        "appium:app": "https://github.com/truongsinh/appium-flutter-driver/releases/download/v0.0.4/ios-sim-debug.zip",
    } : {};

export const appiumOptions: AppiumOptions = {
  port: 4723,
  capabilities: {
    ...osSpecificOps,
    'appium:automationName': 'Flutter',
    'appium:retryBackoffTime': 500,
  }
};