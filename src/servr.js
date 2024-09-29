const express = require('express');
const app = express();
const path = require('path');

function generateMetaTags(url) {
  const params = new URLSearchParams(url.split('?')[1]);
  const tiktokUrl = params.get('tiktok');
  const title = "TikTok Video Clone";
  const description = tiktokUrl 
    ? `Watch this TikTok video: ${tiktokUrl}` 
    : "Клон TikTok с функцией захвата видео";
  const image = "https://lf16-tiktok-common.ibytedtos.com/obj/tiktok-web-common-sg/mtact/static/images/logo_144c91a.png?v=2";

  return `
    <meta property="og:title" content="${title}">
    <meta property="og:site_name" content="TiktokClone">
    <meta property="og:url" content="${url}">
    <meta property="og:description" content="${description}">
    <meta property="og:image" content="${image}">
  `;
}

app.get('*', (req, res) => {
  const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
  const metaTags = generateMetaTags(fullUrl);

  // Читаем HTML файл
  let html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');

  // Вставляем мета-теги
  html = html.replace('<!-- METATAGS -->', metaTags);

  res.send(html);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));