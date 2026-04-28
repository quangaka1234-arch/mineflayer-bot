const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'kingmc.vn',
  username: 'manhquang'
})

bot.on('messagestr', (msg) => {
  if (msg.includes('/register')) {
    bot.chat('/register quang123 quang123')
  }

  if (msg.includes('/login')) {
    bot.chat('/login quang123')
  }
})
