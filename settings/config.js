const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
zenz: 'https://zenzapis.xyz',
lolkey: 'https://api.lolhuman.xyz',
xteam: 'https://api.xteam.xyz',
neoxr: 'https://api.neoxr.my.id',
jayakey: 'https://api.whatsappfeedbac.repl.co',
}

// Apikey Website Api
global.APIKeys = {
'https://zenzapis.xyz': '01a0d20fe0',
'https://api.lolhuman.xyz': '71a53fd9c8ab7600c556436e',
'https://api.xteam.xyz': 'NezukoTachibana281207',
'https://api.neoxr.my.id': 'uaINCCO2',
'https://api.whatsappfeedbac.repl.co': 'jayagans',
}

// Other
global.owner = ['6289524664142']
global.premium = ['6289524664142']
global.botname = 'ClevvBotz'
global.ownername = 'Mr.Clevv'
global.packname = 'ClevvBotz'
global.author = 'By Mr.Clevv'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
success: '✓ Success',
admin: 'Fitur Khusus Admin Group!',
botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
owner: 'Fitur Khusus Owner Bot!',
group: 'Fitur Digunakan Hanya Untuk Group!',
private: 'Fitur Digunakan Hanya Untuk Private Chat!',
bot: 'Fitur Khusus Pengguna Nomor Bot!',
wait: 'Permintaan sedang diproses...',
endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
premium: "Infinity",
free: 20
}
global.thumb = fs.readFileSync('./media/thumb.jpg')
global.visoka = fs.readFileSync('./media/visoka.mp4')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
