// const Nightmare = require('nightmare');
// const nightmare = Nightmare({ show: true });

// async function scrapeProduct(asin) {
//   nightmare
//     .goto("https://www.amazon.com/dp/" + asin)
//     .wait("#detail-bullets")
//     .evaluate(() => {
//       const name = document.getElementById("productTitle").innerText;
//       const category = document.getElementById("wayfinding-breadcrumbs_feature_div").innerText.replace(/\n/g, '');
//       const rank = document.getElementById("SalesRank").innerText.replace(/(\(.+\))/g, '');
//       console.log({ name, category, rank });
//       return { name, category, rank }
//     })
// };

// export { scrapeProduct };
