var GoodWordBot = require('node-telegram-bot-api');
var token = '227904406:AAGEAoSgEBeZ_SFnbd0mwYxvbZ_Fq8Vxigo';
var Q = require('Q');
var request = Q.denodeify(require("request"));

var bot = new GoodWordBot(token, {polling: true});
bot.getMe().then(function (me) {
  console.log('Hi my name is Lexi!', me.username);
});

// command to start
bot.onText(/\/start/, function (msg, match) {
  var fromId = msg.from.id; // get the id of who is sending the message
  var message = "Would you like a good word?\n"
  message += "Let me know by sending a /yes command."
  bot.sendMessage(fromId, message);
});

//yes command action
bot.onText(/\/yes (.+)/, function (msg, match) {
  var fromId = msg.from.id;
  var goodword = match[1];
  var message = "I will find you a good word "+goodword;
  bot.sendMessage(fromId, message);
});

// match /weather [whatever]
bot.onText(/\/yes (.+)/, function (msg, match) {
  var fromId = msg.from.id; // get the id, of who is sending the message
  var goodword = match[1];
  QuoteDataHelper(quote)
  .then(function(response){
    var message = '```"' + response.body.quoteText + '" - ' + response.body.quoteAuthor + '```';
    bot.sendMessage(fromId, message);
  });
  return response.body;
});

function QuoteDataHelper(quote){
  var options = {
    method: 'GET',
    url: "http://api.forismatic.com/api/1.0/",
    json: true,
    resolveWithFullResponse: true,
    qs: {
      method: 'getQuote',
      lang: 'en',
      format: 'json'
      }
  };
}
