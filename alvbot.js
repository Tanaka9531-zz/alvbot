/*
BOT PUNYA : ALVARO BHERMAN
DIBUAT OLEH : ALVARO BHERMAN
YT : ALVARO BHERMAN
IG : @alvarobhermann_
THX TO : ST4RZ, MHANKBARBAR DAN TOBZ
DILARANG MENGGANTI NAMA AUTHOR TANPA PERSETUJUAN AUTHOR
MAU GANTI NAMA AUTHOR? DM GW : @alvarobhermann_
SEKIAN DAN SELAMAT MENIKMATI FITUR YANG ADA :D
*/
const qrcode = require("qrcode-terminal");
const moment = require("moment");
const cheerio = require("cheerio");
const get = require('got')
const fs = require("fs");
const dl = require("./lib/downloadImage.js");
const fetch = require('node-fetch');
const urlencode = require("urlencode");
const axios = require("axios");
const imageToBase64 = require('image-to-base64');
const menu = require("./lib/menu.js");
const donate = require("./lib/donate.js");
const info = require("./lib/info.js");
//
const BotName = 'ALVBOT'; 
const iglu = 'https://instagram.com/alvarobhermann_'; 
const nomwalu = 'wa.me/6281288326069'; 
const botaktif = 'Senin-Jumat : 07.00-21.00 , Weekend dan Hari libur nasional : 09,00-21.00'; 
const gcwa1 = 'https://chat.whatsapp.com/FsAlnxqz6y2BhCQi5ayCLG'; 
const gcwa2 = 'https://chat.whatsapp.com/KLW3UlFfeaH36Ucm5zRfCz'; 
//
const
{
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   waChatKey,
} = require("@adiwajshing/baileys");
var jam = moment().format("HH:mm");

function foreach(arr, func)
{
   for (var i in arr)
   {
      func(i, arr[i]);
   }
}
const conn = new WAConnection()
conn.on('qr', qr =>
{
   qrcode.generate(qr,
   {
      small: true
   });
   console.log(`[ ${moment().format("HH:mm:ss")} ] Scan kode qr mu cok!`);
});

conn.on('credentials-updated', () =>
{
   // save credentials whenever updated
   console.log(`credentials updated!`)
   const authInfo = conn.base64EncodedAuthInfo() // get all the auth info we need to restore this session
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t')) // save this info to a file
})
fs.existsSync('./session.json') && conn.loadAuthInfo('./session.json')
// uncomment the following line to proxy the connection; some random proxy I got off of: https://proxyscrape.com/free-proxy-list
//conn.connectOptions.agent = ProxyAgent ('http://1.0.180.120:8080')
conn.connect();

conn.on('user-presence-update', json => console.log(`[ ${moment().format("HH:mm:ss")} ] => BOT BY : @alvarobhermann_ AND @alvbot_wabot`))
conn.on('message-status-update', json =>
{
   const participant = json.participant ? ' (' + json.participant + ')' : '' // participant exists when the message is from a group
   console.log(`[ ${moment().format("HH:mm:ss")} ] => BOT BY : @alvarobhermann_ AND @alvbot_wabot`)
})

conn.on('message-new', async(m) =>
{
   const messageContent = m.message
   const text = m.message.conversation
   let id = m.key.remoteJid
   const messageType = Object.keys(messageContent)[0] // message will always contain one key signifying what kind of message
   let imageMessage = m.message.imageMessage;
   console.log(`[ ${moment().format("HH:mm:ss")} ] => Nomor: [ ${id.split("@s.whatsapp.net")[0]} ] => ${text}`);


// Grup

if (text.includes("%buatgrup"))
   {
var nama = text.split("%buatgrup")[1].split("-nomor")[0];
var nom = text.split("-nomor")[1];
var numArray = nom.split(",");
for ( var i = 0; i < numArray.length; i++ ) {
    numArray[i] = numArray[i] +"@s.whatsapp.net";
}
var str = numArray.join("");
console.log(str)
const group = await conn.groupCreate (nama, str)
console.log ("created group with id: " + group.gid)
conn.sendMessage(group.gid, "hello everyone", MessageType.extendedText) // say hello to everyone on the group

}

// FITUR 
if(text.includes("%cek")){
var num = text.replace(/%cek/ , "")
var idn = num.replace("0","+62");

console.log(id);
const gg = idn+'@s.whatsapp.net'

const exists = await conn.isOnWhatsApp (gg)
console.log(exists);
conn.sendMessage(id ,`${gg} ${exists ? " exists " : " does not exist"} on WhatsApp`, MessageType.text)
}
// DOWNLOADER
if (text.includes("%ytmp3")){
const teks = text.replace(/%ytmp3 /, "")
axios.get(`https://st4rz.herokuapp.com/api/yta2?url=${teks}`).then((res) => {
    let hasil = `*DOWNLOAD SENDIRI YAHH HASILNYA XIXI* :\n\nJudul : ${title}\nThumbnail : ${thumb}\nLink : ${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%ytmp4")){
const teks = text.replace(/%ytmp4 /, "")
axios.get(`https://st4rz.herokuapp.com/api/ytv2?url=${teks}`).then((res) => {
    let hasil = `*DOWNLOAD SENDIRI YAHH HASILNYA XIXI* :\n\nJudul : ${title}\nThumbnail : ${thumb}\nLink : ${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%ytmp4")){
const teks = text.replace(/%ytmp4 /, "")
axios.get(`https://st4rz.herokuapp.com/api/ytv2?url=${teks}`).then((res) => {
    let hasil = `*DOWNLOAD SENDIRI YAHH HASILNYA XIXI* :\n\nJudul : ${title}\nThumbnail : ${thumb}\nLink : ${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%fb")){
const teks = text.replace(/%fb /, "")
axios.get(`https://tobz-api.herokuapp.com/api/facebook?url=${teks}`).then((res) => {
    let hasil = `*DOWNLOAD SENDIRI YAHH HASILNYA XIXI* :\n\n*KUALITAS :*\nHD : ${kualitasHD}\nSD : ${kualitasSD}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%ig")){
const teks = text.replace(/%ig /, "")
axios.get(`https://st4rz.herokuapp.com/api/ig?url=${teks}`).then((res) => {
    let hasil = `*DOWNLOAD SENDIRI YAHH HASILNYA XIXI* :\n\n${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
