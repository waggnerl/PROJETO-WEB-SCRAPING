const puppeteer = require('puppeteer');

//=========================
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.google.com/search?q=melhor+provedor+de+internet+por+estado&rlz=1C1GCEU_pt-BRBR999BR999&sxsrf=APq-WBtjH01KwkekbWnj9svrKpJ2WxleAg%3A1648671626258&ei=irtEYpmTD7vM1sQPr9yy8Ao&ved=0ahUKEwiZgIm11O72AhU7ppUCHS-uDK4Q4dUDCA4&uact=5&oq=melhor+provedor+de+internet+por+estado&gs_lcp=Cgdnd3Mtd2l6EAM6BwgAEEcQsANKBAhBGABKBAhGGABQ0QZY0BNgtRVoAXAAeACAAboBiAHtD5IBBDAuMTKYAQCgAQHIAQjAAQE&sclient=gws-wiz');
  const rankPovedor = await page.evaluate(() => {
    return {
      urlRankProvedor : document.querySelector('.truncation-information').href
    }
  });
  await page.goto(rankPovedor.urlRankProvedor);
  const rankPovedorEstado = await page.evaluate(() => {
    return {
      urlrankPovedorEstado : document.querySelectorAll('.text > ul')
    }
  });

  console.log(rankPovedorEstado.urlrankPovedorEstado)


  //await page.screenshot({ path: 'example.png' });

  await browser.close();
})(); 
