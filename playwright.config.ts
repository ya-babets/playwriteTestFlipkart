import { PlaywrightTestConfig } from '@playwright/test';


const xrayOptions = {
    // Whether to add <properties> with all annotations; default is false
    embedAnnotationsAsProperties: true,

    // By default, annotation is reported as <property name='' value=''>.
    // These annotations are reported as <property name=''>value</property>.
    textContentAnnotations: ['test_description'],

    // Where to put the report.
    outputFile: 'test-results/results.xml',
};
/**
 * See https://playwright.dev/docs/test-configuration.
 */
const playwrightTestConfig: PlaywrightTestConfig = {
    testDir: './tests',
    /* Maximum time one test can run for. */
    globalTimeout: 900000, // Timeout per execution
    timeout: 400000, // Timeout per test
    expect: {
        /**
         * Maximum time expect() should wait for the condition to be met.
         * For example in `await expect(locator).toHaveText();`
         */
        timeout: 60000,
    },
    /* Run tests in files in parallel */
    fullyParallel: true,

    /* Retry on CI only */
    //retries: process.env.RETRIES === undefined ? 2 : Number(process.env.RETRIES),
    /* Opt out of parallel tests on CI. */

    workers: 1,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: [['html', { open: 'never' }],
    ['junit', xrayOptions], ['line'], ['github']],
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
        actionTimeout: 60000,
        navigationTimeout: 60000,
        ignoreHTTPSErrors: true,
        /* Base URL to use in actions like `await page.goto('/')`. */
        // baseURL: 'http://localhost:3000',
        headless: false,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'on-first-retry',
        viewport: {
            width: 1920,
            height: 1080,
        },
    },
};

export default playwrightTestConfig;
