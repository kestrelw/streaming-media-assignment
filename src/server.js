const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const mediaHandler = require('./mediaResponses.js');

const port = process.env.PORT || process.env.NOD_PORT || 3000;

const onRequest = (request, response) => {
  console.log(request.url);

  switch (request.url) {
    case '/':
      htmlHandler.getIndex(request, response);
      break;
    case '/party.mp4':
      mediaHandler.getParty(request, response);
      break;
      //     case '/rich-client.html':
      //         htmlHandler.getRichClient(request, response);
      //         break;
      //     case '/hello':
      //         textHandler.getHello(request, response);
      //         break;
      //     case '/time':
      //         textHandler.getTime(request, response);
      //         break;
      //     case '/helloJSON':
      //         jsonHandler.getHelloJSON(request, response);
      //         break;
      //     case '/timeJSON':
      //         jsonHandler.getTimeJSON(request, response);
      //         break;
      //     case '/dankmemes':
      //         imageHandler.getImage(request, response);
      //         break;
    default:
      htmlHandler.getIndex(request, response);
      break;
  }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on 127.0.0.1:${port}`);
});
