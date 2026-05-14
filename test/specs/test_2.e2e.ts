describe('Basic Math and Logic Test Suite', () => {

    // 1. Passing Test Case: Basic addition
    it('should verify that 1 plus 1 equals 2', async () => {
        const sum: number = 1 + 1;
        expect(sum).toBe(2);
    });

    // 2. Failing Test Case: Incorrect multiplication logic
    it('should fail when checking if 2 multiplied by 2 equals 5', async () => {
        const result: number = 2 * 2;
        // Logic error: This will throw "Expected 4 to be 5"
        expect(result).toBe(5);
    });

    // 3. Passing Test Case: String matching
    it('should confirm that the string contains a specific word', async () => {
        const greeting: string = "Hello WebdriverIO";
        expect(greeting).toContain("WebdriverIO");
    });

    // 4. Failing Test Case: String length mismatch
    it('should fail because the string length is not what is expected', async () => {
        const framework: string = "Jasmine";
        // Failure: "Jasmine" has 7 characters, not 10
        expect(framework.length).toBe(10);
    });

    // 5. Functional WDIO Test Case: Browser title check
    it('should load the website and verify the page title', async () => {
        await browser.url('https://webdriver.io');
        const title: string = await browser.getTitle();
        
        // This should pass as long as the site is up
        expect(title).toContain('WebdriverIO');
    });

    // 6. Passing Test Case: Negative assertion
    it('should verify that 100 is not equal to 50', async () => {
        expect(100).not.toEqual(50);
    });

});