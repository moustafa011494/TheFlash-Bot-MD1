let handler  = async (m, { conn, args, text }) => {
if (!text) throw `*[❗اشعار❗] مثال : .تغير-الاسم MOSHIREF﹝⚡﹞BOT*`
try {
let text = args.join` `
if(!args || !args[0]) {
} else {
conn.groupUpdateSubject(m.chat, text)}
} catch (e) {
throw '*[❗اشعار❗] *مثال : .تغيرالاسم MOSHIREF﹝⚡﹞BOT*'
}}
handler.help = ['setname <text>']
handler.tags = ['group']
handler.command = /^(تغير-الاسم|تغيرالاسم)$/i
handler.group = true
handler.admin = true
export default handler
