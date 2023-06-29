/**Penjelasan: Untuk menggunakan script ini, kamu akan perlu mengganti nomor owner dan wm terlebih dahulu. Kamu juga harus memiliki api key dari kedua website ini https://api.botcahx.live dan https://api.betabotz.me. Setelah memiliki api key, kamu bisa menggantinya dengan menyalin key tersebut dari profilmu dan paste di variabel global.btc. Contohnya, global.btc = 'xzRhejka'. Setelah itu, kamu bisa melanjutkan dengan mengubah nomor owner dan wm.
**/


global.owner = ['62823504965328', '62823504965328']  
global.mods = ['62823504965328'] 
global.prems = ['62823504965328']
global.nameowner = 'ɪᴛs ғᴇʀʀ ぎ'
global.numberowner = '62823504965328' 
global.mail = 'ferrxcccoder@gmail.com' 
global.dana = '-'
global.pulsa = '-'
global.gopay = '-'
global.namebot = 'ɴᴇᴏxʀ ᴍᴅ ぎ'
global.gc = 'https://chat.whatsapp.com/DpdTsFNBpV1B8zGQqxAu4N'
global.web = 'https://github.com/frdy19'
global.instagram = 'https://instagram.com/xf.frdycoolzz'
global.wm = '© ɪᴛs ғᴇʀʀ ぎ'
global.watermark = wm
global.wm2 = '⫹⫺ ɴᴇᴏxʀ-ᴍᴅ'
global.wm3 = '© ɪᴛs ғᴇʀʀ ぎ'
global.wm4 = '© ɴᴇᴏxʀ-ʙᴏᴛ'
global.wait = '_ᴛᴜɴɢɢᴜ sᴇᴅᴀɴɢ ᴅɪᴘʀᴏsᴇs..._'
global.eror = 'sᴇʀᴠᴇʀ ᴇʀʀᴏʀ'
global.benar = 'ʙᴇɴᴀʀ ✅\n'
global.salah = 'sᴀʟᴀʜ ❌\n'
global.stiker_wait = '*⫹⫺* sᴛɪᴋᴇʀ sᴇᴅᴀɴɢ ᴅɪʙᴜᴀᴛ...'
global.packname = 'ᴄʀᴇᴀᴛᴇᴅ ʙʏ ɴᴇᴏxʀ-ʙᴏᴛ'
global.author = 'ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ\nsᴏᴜʀᴄᴇ ᴄᴏᴅᴇ : ʙᴏᴛᴄᴀʜx (ᴛɪᴏ)\nʀᴇᴄᴏᴅᴇ ʙʏ : ɪᴛs ғᴇʀʀ'
global.alpiskey = 'ee650fb5' //daftar sendiri jika key habis https://alpis.eu.org

global.btc = 'dypxSTBO' //Daftar terlebih dahulu https://api.botcahx.live
global.lann = 'I4fynlPv' //Note Key Ini Hanya Bertahan Selama 4 Day Sejak Config.js update! lebih baik register di https://api.betabotz.me
global.APIs = { 
  tio: 'https://api.botcahx.live',
  alpis: 'https://alpis.eu.org'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'dypxSTBO' //isi apikey mu https://api.botcahx.live
}

global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
