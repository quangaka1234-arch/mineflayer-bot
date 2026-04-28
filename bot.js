const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'kingmc.vn',
  username: 'manhquang',
  version: false
})

bot.on('spawn', () => {
  console.log('Bot đã vào server!')
})

bot.on('messagestr', (msg) => {
  if (msg.includes('/register')) {
    bot.chat('/register quang123 quang123')
  }
  if (msg.includes('/login')) {
    bot.chat('/login quang123')
  }
})

setInterval(() => {
  if (bot.entity) {
    bot.setControlState('jump', true)
    setTimeout(() => bot.setControlState('jump', false), 500)
  }
}, 10000)
