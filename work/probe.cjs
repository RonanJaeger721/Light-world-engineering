const {chromium}=require('C:/Users/User/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async()=>{const b=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});const page=await b.newPage();await page.goto('http://localhost:3000');console.log(await page.title());await page.screenshot({path:'work/desktop.png'});await b.close()})()

