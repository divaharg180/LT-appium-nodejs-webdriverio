exports.config = {
    user: process.env.LT_USERNAME || "divahar",
    key: process.env.LT_ACCESS_KEY || "uAsYjKmU1MUvxm8MdwKUtZufxGptw30jvSvx8oupdRzspU8gxB",
  
    updateJob: false,
    specs: ["./../specs/ios-web-test.js"],
    exclude: [],
  
    maxInstances: 10,
    commonCapabilities: {
      build: "LT_Appium_NodeJS_WebDriverIO_ltoptions_w3_Web_Automation",
      visual: true,
    },
  
    capabilities: [
      {
        "lt:options": {
          deviceName: ".*",
          platformName: "iOS",
          name: "ios_ltOptions_w3c",
          isRealMobile: true,
          w3c: true,
          enableCustomTranslation: true,
        }
      }
    ],
  
    logLevel: "info",
    coloredLogs: true,
    screenshotPath: "./errorShots/",
    baseUrl: "",
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    path: "/wd/hub",
    hostname: process.env.LT_GRID_URL||"mobile-hub.lambdatest.com",
    port: 80,
  
    framework: "mocha",
    mochaOpts: {
      ui: "bdd",
      timeout: 20000,
    },
  };
  
  // Code to support common capabilities
  exports.config.capabilities.forEach(function (caps) {
    for (var i in exports.config.commonCapabilities)
      caps[i] = caps[i] || exports.config.commonCapabilities[i];
  });
  