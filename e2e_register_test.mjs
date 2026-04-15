import puppeteer from 'puppeteer';

const delay = ms => new Promise(res => setTimeout(res, ms));

(async () => {
    console.log('Starting E2E registration test...');
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    try {
        console.log('Navigating to Intake Form...');
        await page.goto('http://localhost:5173/start-project', { waitUntil: 'networkidle2' });

        // Step 1
        console.log('Filling Step 1...');
        await page.waitForSelector('input[type="text"]');
        const inputs = await page.$$('input');
        await inputs[0].type('Automated Agent');
        await inputs[1].type('puppeteer@zorvia.tech');
        await inputs[2].type('9876543210');
        
        await page.evaluate(() => {
            const btns = Array.from(document.querySelectorAll('button'));
            const cBtn = btns.find(b => b.textContent.includes('Continue'));
            if(cBtn) cBtn.click();
        });

        // Step 2
        console.log('Filling Step 2...');
        await delay(1000);
        await page.evaluate(() => {
            const btns = Array.from(document.querySelectorAll('button'));
            const cBtn = btns.find(b => b.textContent.includes('Continue'));
            if(cBtn) cBtn.click();
        });

        // Step 3
        console.log('Filling Step 3...');
        await delay(1000);
        await page.evaluate(() => {
            const btns = Array.from(document.querySelectorAll('button'));
            const cBtn = btns.find(b => b.textContent.includes('Continue'));
            if(cBtn) cBtn.click();
        });

        // Step 4
        console.log('Filling Step 4...');
        await delay(1000);
        await page.evaluate(() => {
            const btns = Array.from(document.querySelectorAll('button'));
            const cBtn = btns.find(b => b.textContent.includes('Continue'));
            if(cBtn) cBtn.click();
        });

        // Step 5
        console.log('Filling Step 5 Security Verification...');
        await delay(1000);
        // Find the code element
        const codeElement = await page.$('div.font-mono.text-3xl');
        if (codeElement) {
            const codeText = await page.evaluate(el => el.textContent, codeElement);
            const actualCode = codeText.trim();
            console.log(`Extracted Security Code: ${actualCode}`);
            
            const verifyInput = await page.$('input[maxLength="6"]');
            if (verifyInput) {
                await verifyInput.type(actualCode);
            }
            
            await page.evaluate(() => {
                const btns = Array.from(document.querySelectorAll('button'));
                const sBtn = btns.find(b => b.textContent.includes('Sync Strategy'));
                if(sBtn) sBtn.click();
            });
        }

        console.log('Waiting for success screen...');
        // Just wait a bit for submission
        await delay(3000);
        console.log('Submission logic complete. Attempting to view Admin Dashboard...');

        // Check Admin
        console.log('Navigating to Admin Command Center...');
        await page.goto('http://localhost:5173/zorvia-hq', { waitUntil: 'networkidle2' });
        
        await page.waitForSelector('input[type="password"]');
        const passInput = await page.$('input[type="password"]');
        await passInput.type('ZORVIA_HQ_2026');
        
        await page.evaluate(() => {
            const btns = Array.from(document.querySelectorAll('button'));
            const iBtn = btns.find(b => b.textContent.includes('Initialize Access'));
            if(iBtn) iBtn.click();
        });

        console.log('Waiting for Admin Dashboard to load data...');
        // Wait for table to load
        await delay(3000); // give it a sec to run the real table items

        const imagePath = 'C:/Users/kushw/.gemini/antigravity/brain/0510caeb-15dc-402a-b5ff-cea6ff8f2192/e2e_admin_dashboard_final.png';
        await page.screenshot({ path: imagePath, fullPage: true });
        console.log(`Screenshot saved to artifacts: ${imagePath}`);

    } catch (e) {
        console.error('Error during test:', e);
    } finally {
        await browser.close();
    }
})();
