describe('Advanced Failure Scenarios Suite', () => {

    // --- RECAP: Previous Examples ---

    // 1. Logic Failure (Mismatch)
    it('should fail when logic is wrong (4 vs 5)', async () => {
        const result: number = 2 * 2;
        // Failure Report: "Expected 4 to be 5."
        expect(result).toBe(5); 
    });

    // 2. Structural Failure (Length)
    it('should fail when string length is mismatched', async () => {
        const framework: string = "Jasmine";
        // Failure Report: "Expected 7 to be 10."
        expect(framework.length).toBe(10);
    });

    // --- NEW: Different Kind of Failure ---

    // 3. Performance/State Failure: Timeout Error
    // This test simulates waiting for an element that never appears.
    it('should REALLY fail because of timeout', async () => {
        // Tìm một element không bao giờ tồn tại
        const ghostElement = await $('#this-id-does-not-exist');

        console.log('>>> Waiting for ghost element to appear...');

        // Không dùng try-catch ở đây. 
        // WDIO sẽ đợi 2 giây, sau đó tự ném ra lỗi Timeout.
        // Jasmine thấy lỗi này không được catch nên sẽ đánh dấu test là FAIL.
        await ghostElement.waitForDisplayed({ 
            timeout: 2000, 
            timeoutMsg: 'FAILED: Element was not found after 2 seconds of waiting!' 
        });
    });

    it('should fail with a manual fail signal', async () => {
        const isElementVisible = false;

        if (!isElementVisible) {
            // Đây là cách chủ động đánh rớt một test case trong Jasmine
            fail('FORCED FAIL: We manually decided this test should fail here.');
        }
    });
});