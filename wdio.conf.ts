import { Config } from "@wdio/sync";


// https://webdriver.io/docs/configurationfile.html
export const config: Config = {
    runner: 'local',
    specs: [
        './test/**/*.ts'
    ],
    hostname: process.env.SELENIUM_HUB_HOST ?? 'localhost',
    path: '/wd/hub',
    maxInstances: 2,
    capabilities: [{
        browserName: 'chrome'
    }],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'info',
    /* baseUrl: 'https://rooms.ryanair.com/ie/en/', */
    waitforTimeout: 80000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 1,
    framework: 'mocha',
    reporters: ['spec', 
        [
            "allure",
            {
                outputDir: "allure-results",
                disableMochaHooks: true,
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false
            }
        ]
    ], 
    mochaOpts: {
        ui: 'bdd',
        timeout: 80000
    }
    
}
