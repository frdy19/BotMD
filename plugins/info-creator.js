var name = global.nameowner
var numberowner = global.numberowner
var gmail = global.mail
const { 
default: 
makeWASocket,
BufferJSON,
WA_DEFAULT_EPHEMERAL, 
generateWAMessageFromContent, 
downloadContentFromMessage, 
downloadHistory, 
proto,
getMessage, 
generateWAMessageContent, 
prepareWAMessageMedia 
} = require("@adiwajshing/baileys");
var handler = async (m, {
conn
}) => {
const vcard = `BEGIN:VCARD
VERSION:3.0
N:Sy;Bot;;;
FN: ${name}
item.ORG: ᴄʀᴇᴀᴛᴏʀ ʙᴏᴛ
item1.TEL;waid=${numberowner}:${numberowner}@s.whatsapp.net
item1.X-ABLabel:ɴᴏᴍᴏʀ ᴄʀᴇᴀᴛᴏʀ ʙᴏᴛ 
item2.EMAIL;type=INTERNET:${gmail}
item2.X-ABLabel:ᴇᴍᴀɪʟ ᴏᴡɴᴇʀ
item3.ADR:;;🇸🇦 ᴀʀᴀʙ sᴀᴜᴅɪ;;;;
item3.X-ABADR:ac
item4.EMAIL;type=INTERNET:ferrxcccoder@gmail.com
item4.X-ABLabel:ᴇᴍᴀɪʟ ᴅᴇᴠᴇʟᴏᴘᴇʀ 
item3.ADR:;;🇸🇦 ᴀʀᴀʙ sᴀᴜᴅɪ;;;;
item3.X-ABADR:ac 
item5.URL:${instagram}
item5.X-ABLabel:ᴡᴇʙsɪᴛᴇ
END:VCARD`
const sentMsg  = await conn.sendMessage(
    m.chat,
    { 
        contacts: { 
            displayName: 'CN', 
            contacts: [{ vcard }] 
        }
    }
)
await conn.reply(m.chat, "ʜᴇʟʟᴏ...\nᴛʜɪs ɪs ᴀ ᴅᴇᴠᴇʟᴏᴘᴇʀ ʙᴏᴛ\nᴅᴏɴᴛ sᴘᴀᴍ,ᴄᴀʟʟ,ᴠᴄ", sentMsg)}
handler.command = handler.help = ['owner', 'creator'];
handler.tags = ['info'];
handler.limit = true;
module.exports = handler;