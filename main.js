const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '1531658415:AAGgMSeOjtNda_hB7tXEeHsDnQY0uOwR6us';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  

  var hi = "привет";
if (msg.text.toString().toLowerCase().indexOf(hi) === 0) {
bot.sendMessage(msg.chat.id,"Привет, гражданский");
} 
    
var bye = "пока";
if (msg.text.toString().toLowerCase().includes(bye)) {
bot.sendMessage(msg.chat.id, "прощай, а я пойду на поиски джокера");
} 

var best = "скажи цитату";
if (msg.text.toString().toLowerCase().includes(best)) {
bot.sendMessage(msg.chat.id, "жизнь ухудшается перед тем, как наладиться.");
} 

var best1 = "цитата о правде";
if (msg.text.toString().toLowerCase().includes(best1)) {
bot.sendMessage(msg.chat.id, "порой правда недостаточно хороша, порой люди заслуживают большего, порой люди заслуживают, чтобы их вера вознаграждалась.");
} 

var best2 = "у тебя есть друзья?";
if (msg.text.toString().toLowerCase().includes(best2)) {
  bot.sendMessage(msg.chat.id, "друзья для меня — роскошь.");
  } 

  var best3 = "ты любил кого-то?";
  if (msg.text.toString().toLowerCase().includes(best3)) {
    bot.sendMessage(msg.chat.id, "Однажды я полюбил женщину-кошку, однако она не ответила мне взаимностью.");
    } 

    var best4 = "дашь свою маску?";
    if (msg.text.toString().toLowerCase().includes(best4)) {
      bot.sendMessage(msg.chat.id, "эта маска — не для тебя, а для того, чтобы защитить твоих близких.");
      } 
    
    

  




});