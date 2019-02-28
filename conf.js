exports.config =  {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub', // адреса, на якій працює запущений Selenium сервер
    getPageTimeout: 60000, //60 sec - тайм аут очікування загрузки сторінки
    allScriptsTimeout: 60000,//60 seconds - тайм аут очікування виконання скриптів
    ignoreUncaughtExceptions: true, //This allows cucumber to handle the exception and record it appropriately.
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    multiCapabilities: [ //налаштування середовища запуску тестів, у даному випадку тести будуть запускатись в хромі
        {
            'browserName': 'Chrome',
            chromeOptions: {
                args: ['disable-infobars', 'no-sandbox', 'window-size=1024,768', 'test-type=browser', 'disable-notifications', 'incognito', 'disable-application-cache'],
            },
            specs: ['features/test1.feature'] //місце зберігання сценаріїв
        }
    ],

    cucumberOpts: {
        require: ['step-definitions/*.js', 'support/hooks.js']//місце реалізації кроків
    },
};
