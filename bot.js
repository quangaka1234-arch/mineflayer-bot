const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'kingmc.vn',
    port: 25565, // port chuẩn Minecraft Java
    username: 'manhquang',
    version: false
  })

  let registered = false
  let loggedIn = false

  bot.on('spawn', () => {
    console.log('Bot đã vào server!')
  })

  bot.on('messagestr', (msg) => {
    const text = msg.toLowerCase()

    if (!registered && text.includes('register')) {
      bot.chat('/register quang123 quang123')
      registered = true
    }

    if (!loggedIn && text.includes('login')) {
      bot.chat('/login quang123')
      loggedIn = true
    }
  })

  // chống AFK nhẹ
  setInterval(() => {
    if (!bot.entity || !loggedIn) return

    bot.setControlState('jump', true)
    setTimeout(() => bot.setControlState('jump', false), 300)

  }, 12000)

  // reconnect nếu lỗi
  bot.on('end', () => {
    console.log('Mất kết nối, đang thử lại...')
    setTimeout(createBot, 5000)
  })

  bot.on('error', (err) => {
    console.log('Lỗi:', err.message)
  })
}

createBot()
