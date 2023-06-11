import { expect, test } from '@playwright/test';
import HomePage from '../../src/pages/homePage';
import Mobiles from '../../src/pages/electronics/mobiles';

const value = [
    '1. Mi',
    '2. Realme',
    '3. Samsung',
    '4. Infinix',
    '5. OPPO',
    '6. Apple',
    '7. Vivo',
    '8. Honor',
    '9. Asus',
    '10. Poco X2',
    '11. realme Narzo 10',
    '12. Infinix Hot 9',
    '13. IQOO 3',
    '14. iPhone SE',
    '15. Motorola razr',
    '16. realme Narzo 10A',
    '17. Motorola g8 power lite'
]

test(
    'Return list of Mobiles',
    async ({ page }) => {
        await test.step('Return list of Mobiles', async () => {
            const homePage = new HomePage(page);
            await homePage.goTo();
            await homePage.clickCloseButton();
            await homePage.clickRandomBanner();
            const electronicsMobiles = new Mobiles(page);
            await electronicsMobiles.returnMobilesList();


            expect(await electronicsMobiles.returnMobilesList()).toEqual(value);


        });
    },
);
