import * as functions from 'firebase-functions';
import * as fetch from 'node-fetch';
import * as xmlJs from 'xml-js';
import * as fs from 'fs';


export const dinamicSiteMap = functions.https.onRequest((resp, resq) => {
    const options = { compact: true, ignoreComment: true, spaces: 4 };
    fs.readFile('src/assets/sitemaps/dynamicSitemap.xml', (err, data) => {
        const tipoEmpresa = fetch('http://18.216.34.87:8080/ticketapp/app/tipoempresa');

        if (data) { 
          const existingSitemapList = JSON.parse(xmlJs.xml2json(data, options));
          existingSitemapList.urlset.url.push({
              loc: {
                  _text: ele,
              },
              changefreq: {
                  _text: 'monthly'
              },
              priority: {
                  _text: 0.8
              },
              lastmod: {
                  _text: (new Date()).toLocaleDateString().replace('/', '-')
              }
          });
          const finalXML = xmlJs.json2xml(existingSitemapList, options);
          
          fs.writeFile('src/sitemap.xml', finalXML, (err) => {
            if (err) {
                console.log(err);
            }
            console.log("The file was saved!");
           });
        }
    });
});
