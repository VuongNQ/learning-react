import jsdom from "jsdom";
import Crawler from "crawler";

const { JSDOM } = jsdom;

const crawler = new Crawler();

crawler.send({
  url: "https://doorburst.myshopify.com/",
  method: "GET",
  http2: true,
  // When calling `send`, `callback` must be defined explicitly, with two arguments `error` and `response`
  callback: (error, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log(response.body);
      const dom = new JSDOM(response.body);
      const root = dom.window.document.getElementsByTagName("one-loyalty");
      if (!root || root.length === 0) {
        console.log("Element not found");
        return;
      }
      console.log(root[0].nextElementSibling);
    }
  },
});
