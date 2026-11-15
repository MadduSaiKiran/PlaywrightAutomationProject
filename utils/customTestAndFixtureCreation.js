
import { test as baseTest } from '@playwright/test';

export const customTest = baseTest.extend(
    {
        testDataForOrder: {
            username: "anshika@gmail.com",
            password: "Iamking@000",
            productName: "ADIDAS ORIGINAL"

        }

    }

)




