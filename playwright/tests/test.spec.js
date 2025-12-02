const { test } = require('@playwright/test');

test.describe('Simple test', () => {
    test('accesses the home page and pauses', async ({ page }) => {
        // Remove timeout para permitir navegação manual sem pressa
        test.setTimeout(0);
        
        // Aguarda a página carregar completamente (incluindo WebSocket do LiveView)
        await page.goto('/', { waitUntil: 'networkidle' });
        
        // Aguarda um pouco para garantir que o LiveView esteja conectado
        await page.waitForTimeout(1000);
        
        // Pausa para navegação manual
        await page.pause();
    });
});

