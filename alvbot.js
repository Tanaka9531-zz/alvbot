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
if (text.includes("%bpkfont")){
const teks = text.replace(/%bpkfont /, "")
axios.get(`https://api.terhambar.com/bpk?kata=${message}`).then((res) => {
    let hasil = `${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%igstalk")){
const teks = text.replace(/%igstalk /, "")
axios.get(`https://tobz-api.herokuapp.com/api/stalk?username=${teks}`).then((res) => {
    let hasil = `*HASIL STALKING :*\n\nBio : ${Biodata}\nJumlah Followers : ${Jumlah_Followers}\nJumlah Following : ${Jumlah_Following}\nName : ${Name}\nProfile pic : ${Profile_pic}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%xvideo")){
const teks = text.replace(/%xvideo /, "")
axios.get(`https://tobz-api.herokuapp.com/api/xvideos?q=${teks}`).then((res) => {
    let hasil = `DOSA BORR\n\n${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%wiki")){
const teks = text.replace(/%wiki /, "")
axios.get(`https://tobz-api.herokuapp.com/api/wiki?q=${teks}`).then((res) => {
    let hasil = `*MENURUT WIKIPEDIA :*\n\n${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%kbbi")){
const teks = text.replace(/%kbbi /, "")
axios.get(`https://tobz-api.herokuapp.com/api/kbbi?kata=${teks}`).then((res) => {
    let hasil = `*MENURUT KBBI :*\n\n${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%dewabatch")){
const teks = text.replace(/%dewabatch /, "")
axios.get(`https://tobz-api.herokuapp.com/api/dewabatch?q=${teks}`).then((res) => {
    let hasil = `*MENURUT DEWABATCH :*\n\n${result}\nSinopsis : ${sinopsis}\nThumbnail : ${thumb}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%kusonime")){
const teks = text.replace(/%kusonime /, "")
axios.get(`https://tobz-api.herokuapp.com/api/kuso?q=${teks}`).then((res) => {
    let hasil = `*MENURUT KOSUNIME :*\n\nJudul : ${title}\nThumbnail : ${thumb}\nInfo : ${info}\nSinopsis : ${sinopsis}\nLink : ${link_dl}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%quotes")){
const teks = text.replace(/%quotes /, "")
axios.get(`https://tobz-api.herokuapp.com/api/randomquotes`).then((res) => {
    let hasil = `${quotes}\n\n-${author}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%ttp")){
const teks = text.replace(/%ttp /, "")
axios.get(`https://tobz-api.herokuapp.com/api/ttp?text=${teks}`).then((res) => {
    let hasil = `*INI KAK HASILNYA :) MAAF KALAU LINKNYA KEPANJANGAN :( : ${base64}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%infogempa")){
const teks = text.replace(/%infogempa /, "")
axios.get(`https://tobz-api.herokuapp.com/api/infogempa`).then((res) => {
    let hasil = `Kedalaman : ${kedalaman}\nKoordinat : ${koordinat}\nLokasi : ${lokasi}\nMagnitude : ${magnitude}\nMap : ${map}\nPotensi : ${potensi}\nWaktu : ${waktu}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%chord")){
const teks = text.replace(/%chord /, "")
axios.get(`https://tobz-api.herokuapp.com/api/chord?q=${teks}`).then((res) => {
    let hasil = `${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%jadwalshalat")){
const teks = text.replace(/%chord /, "")
axios.get(`https://tobz-api.herokuapp.com/api/jadwalshalat?q=${teks}`).then((res) => {
    let hasil = `*JADWAL SHALAT* :\n\nAshar : ${ashar}\nDzuhur : ${dzuhur}\nImsak : ${imsak}\nIsha : ${isha}\nMaghrib : ${maghrib}\nMidnight : ${midnight}\nSubuh : ${subuh}\nSunrise : ${sunrise}\nSunset : ${sunset}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%simi")){
const teks = text.replace(/%simi /, "")
axios.get(`https://tobz-api.herokuapp.com/api/simsimi?text=${teks}`).then((res) => {
    let hasil = `${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%joox")){
const teks = text.replace(/%joox /, "")
axios.get(`https://tobz-api.herokuapp.com/api/joox?q=${teks}`).then((res) => {
    let hasil = `Album : ${album}\nDipublikasi : ${dipublikasi}\nJudul : ${judul}\nMP3 : ${mp3}\nThumbnail : ${thumb}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%lirik")){
const teks = text.replace(/%lirik /, "")
axios.get(`https://tobz-api.herokuapp.com/api/lirik?q=${teks}`).then((res) => {
    let hasil = `Album : ${album}\nDipublikasi : ${dipublikasi}\nJudul : ${judul}\nLirik :\n\n${lirik}\n\nThubnail : ${thumb}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%shorturl")){
const teks = text.replace(/%shorturl /, "")
axios.get(`https://tobz-api.herokuapp.com/api/lirik?q=${teks}`).then((res) => {
    let hasil = `Udah dipendekin yah linknya :D :\n\n${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%artinama")){
const teks = text.replace(/%artinama /, "")
axios.get(`https://scrap.terhambar.com/nama?n=${teks}`).then((res) => {
    let hasil = `ARTI NAMA MU ADALAH :\n\n*****************************\n${result}\n\n*****************************`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%jodoh")){
const teks = text.replace(/%jodoh /, "")
axios.get(`https://arugaz.herokuapp.com/api/jodohku?nama=${pasangan[0]}&pasangan=${pasangan[1]}`).then((res) => {
    let hasil = `\nKecocokan jodoh\n\n************************************\n\nPasangan 1: *${nama[0].trim()}*\nPasangan 2: *${nama[1].trim()}*\n\nsisi positif: ${positif}\nsisi negatif: ${negatif}\n\n***********************************`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%coronaworld")){
const teks = text.replace(/%coronaworld /, "")
axios.get(`https://api.terhambar.com/negara/{teks}`).then((res) => {
    let hasil = `Negara : ${negara}\nTotal : ${total}\nKasus Baru : ${kasus_baru}\nMeninggoy : ${meninggal}\nBaru Meninggoy : ${meninggal_baru}\nSembuh : &`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%namaindorandom")){
const teks = text.replace(/%namaindorandom /, "")
axios.get(`https://api.terhambar.com/nama?jenis=${teks}`).then((res) => {
    let hasil = `${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%ninja")){
const teks = text.replace(/%ninja/, "")
axios.get(`https://api.terhambar.com/ninja?nama=${teks}`).then((res) => {
    let hasil = `${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%pin")){
const teks = text.replace(/%pin/, "")
axios.get(`https://scrap.terhambar.com/pin?url=${teks}`).then((res) => {
    let hasil = `${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%gspeak")){
const teks = text.replace(/%gspeak/, "")
axios.get(`https://scrap.terhambar.com/tts?kata=${teks}`).then((res) => {
    let hasil = `*INI KAK HASILNYA :D MAAF KALO LINKNYA KEPANJANGAN :(\n\n${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%tiktok")){
const teks = text.replace(/%tiktok/, "")
axios.get(`https://st4rz.herokuapp.com/api/tiktok?url=${teks}`).then((res) => {
    let hasil = `DOWNLOAD SENDIRI YAH KAK ^_^\n\n${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%waifu")){
const teks = text.replace(/%waifu/, "")
axios.get(`https://st4rz.herokuapp.com/api/waifu`).then((res) => {
    let hasil = `Image : ${image}\nName : ${name}\nDesk : ${desk}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%alkitabharian")){
const teks = text.replace(/%alkitabharian/, "")
axios.get(`https://docs-jojo.herokuapp.com/api/alkitab`).then((res) => {
    let hasil = `Ayat : ${ayat}\nIsi : ${isi}\nGambar : ${img}\n\n HALELUYA TUHAN YESUS MEMBERKATI KITA SEMUA`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%alkitab")){
const teks = text.replace(/%alkitab/, "")
axios.get(`https://docs-jojo.herokuapp.com/api/alkitabsearch?q=${teks}`).then((res) => {
    let hasil = `Ayat : ${ayat}\nIsi : ${isi}\nLink : ${link}\n\n HALELUYA TUHAN YESUS MEMBERKATI KITA SEMUA`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%infonom")){
const teks = text.replace(/%infonom/, "")
axios.get(`https://docs-jojo.herokuapp.com/api/infonomor?no=${teks}`).then((res) => {
    let hasil = `Internasional : ${international}\nNomor : ${nomor}\nOperator : ${op}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%fml")){
const teks = text.replace(/%fml/, "")
axios.get(`https://docs-jojo.herokuapp.com/api/fml`).then((res) => {
    let hasil = `${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%jadwalTV")){
const teks = text.replace(/%jadwalTV/, "")
axios.get(`https://docs-jojo.herokuapp.com/api/jadwaltv?ch=${teks}`).then((res) => {
    let hasil = `${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%renunganharian")){
const teks = text.replace(/%renunganharian/, "")
axios.get(`https://docs-jojo.herokuapp.com/api/jadwaltv?ch=${teks}`).then((res) => {
    let hasil = `*RENUNGAN HARIAN HARI INI :*\n\nJudul : ${judul}\nIsi : ${isi}\nPesan : ${pesan}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%glitch")){
const teks = text.replace(/%glitch/, "")
axios.get(`http://inyourdream.herokuapp.com/glitch?kata1=${teks1}&kata2=${teks2}`).then((res) => {
    let hasil = `${status}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%mediafire")){
const teks = text.replace(/%mediafire/, "")
axios.get(`https://docs-jojo.herokuapp.com/api/mediafire?url=${teks}`).then((res) => {
    let hasil = `${detail}\nFilename : ${filename}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%meme")){
const teks = text.replace(/%meme/, "")
axios.get(`https://mnazria.herokuapp.com/api/meme-search?genre=memes`).then((res) => {
    let hasil = `*MEME :*\n\nAuthor : ${author}\nNSFW : ${nsfw}\nPost link : ${postlink}\nLink Memes : ${preview}\nSpoiler : ${spoiler}\nSubreddit : ${subreddit}\nTitle : ${title}\nUPS : ${ups}\nURL : ${url}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%smule")){
const teks = text.replace(/%smule/, "")
axios.get(`https://mnazria.herokuapp.com/api/smule?link=${teks}`).then((res) => {
    let hasil = `DOWNLOAD SENDIRI YAH KAK ^_^\n\n${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%resepbunda")){
const teks = text.replace(/%resepbunda/, "")
axios.get(`https://mnazria.herokuapp.com/api/resep-search?text=${teks}`).then((res) => {
    let hasil = `${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%nhentai")){
const teks = text.replace(/%nhentai/, "")
axios.get(`https://mnazria.herokuapp.com/api/nhentai?code=${teks}`).then((res) => {
    let hasil = `INGET DOSA BORR\n\n${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%checkip")){
const teks = text.replace(/%checkip/, "")
axios.get(`https://mnazria.herokuapp.com/api/check?ip=${teks}`).then((res) => {
    let hasil = `${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%pornsearch")){
const teks = text.replace(/%pornsearch/, "")
axios.get(`https://mnazria.herokuapp.com/api/porn?search=${teks}`).then((res) => {
    let hasil = `INGET DOSA BORR\n\n${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%nekonime")){
const teks = text.replace(/%nekonime/, "")
axios.get(`https://tobz-api.herokuapp.com/api/nekonime`).then((res) => {
    let hasil = `${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%randomhentai")){
const teks = text.replace(/%randomhentai/, "")
axios.get(`https://tobz-api.herokuapp.com/api/hentai`).then((res) => {
    let hasil = `${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}if (text.includes("%nsfwneko")){
const teks = text.replace(/%nsfwneko/, "")
axios.get(`https://tobz-api.herokuapp.com/api/nsfwneko`).then((res) => {
    let hasil = `${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}if (text.includes("%nsfwtrap")){
const teks = text.replace(/%nsfwtrap/, "")
axios.get(`https://tobz-api.herokuapp.com/api/nsfwtrap`).then((res) => {
    let hasil = `${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}if (text.includes("%nsfwblowjob")){
const teks = text.replace(/%nsfwblowjob/, "")
axios.get(`https://tobz-api.herokuapp.com/api/nsfwblowjob`).then((res) => {
    let hasil = `${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}if (text.includes("%animehuggif")){
const teks = text.replace(/%animehuggif/, "")
axios.get(`https://tobz-api.herokuapp.com/api/hug`).then((res) => {
    let hasil = `${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}if (text.includes("%animekissgif")){
const teks = text.replace(/%animekissgif/, "")
axios.get(`https://tobz-api.herokuapp.com/api/kiss`).then((res) => {
    let hasil = `${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}if (text.includes("%animecrygif")){
const teks = text.replace(/%animecrygif/, "")
axios.get(`https://tobz-api.herokuapp.com/api/cry`).then((res) => {
    let hasil = `${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%picneon")){
const teks = text.replace(/%picneon/, "")
axios.get(`https://tobz-api.herokuapp.com/api/textpro?theme=neon_light&text1=${teks1}&text2=${teks2}`).then((res) => {
    let hasil = `*NIH KAK SILAHKAN DIDOWNLOAD DAN NIKMATI HASILNYA :D*\n\n${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%picninja")){
const teks = text.replace(/%picninja/, "")
axios.get(`https://tobz-api.herokuapp.com/api/textpro?theme=ninjalogo&text1=${teks2}&text2=${teks2}`).then((res) => {
    let hasil = `*NIH KAK SILAHKAN DIDOWNLOAD DAN NIKMATI HASILNYA :D*\n\n${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%picwolf1")){
const teks = text.replace(/%picwolf1/, "")
axios.get(`https://tobz-api.herokuapp.com/api/textpro?theme=wolflogo1&text1=${teks1}&text2=${teks2}`).then((res) => {
    let hasil = `*NIH KAK SILAHKAN DIDOWNLOAD DAN NIKMATI HASILNYA :D*\n\n${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%picwolf2")){
const teks = text.replace(/%picwolf2/, "")
axios.get(`https://tobz-api.herokuapp.com/api/textpro?theme=wolflogo2&text1=${teks1}&text2=${teks2}`).then((res) => {
    let hasil = `*NIH KAK SILAHKAN DIDOWNLOAD DAN NIKMATI HASILNYA :D*\n\n${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%piclion")){
const teks = text.replace(/%piclion/, "")
axios.get(`https://tobz-api.herokuapp.com/api/textpro?theme=lionlogo&text1=${teks1}&text2=${teks2}`).then((res) => {
    let hasil = `*NIH KAK SILAHKAN DIDOWNLOAD DAN NIKMATI HASILNYA :D*\n\n${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%picjoker")){
const teks = text.replace(/%picjoker/, "")
axios.get(`https://tobz-api.herokuapp.com/api/textpro?theme=jokerlogo&text=${teks}`).then((res) => {
    let hasil = `*NIH KAK SILAHKAN DIDOWNLOAD DAN NIKMATI HASILNYA :D*\n\n${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
if (text.includes("%tts")){
const teks = text.replace(/%tts /, "")
const gtts = (`https://rest.farzain.com/api/tts.php?id=${teks}&apikey=O8mUD3YrHIy9KM1fMRjamw8eg`)
    conn.sendMessage(id, gtts ,MessageType.text);
})
}
if (text.includes("%brainly")){
const teks = text.replace(/%brainly/, "")
axios.get(`http://api.farzain.com/brainly.php?id=${teks}&apikey=O8mUD3YrHIy9KM1fMRjamw8eg`).then((res) => {
    let hasil = `Title : ${title}\nURL : ${url}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%cctv")){
const teks = text.replace(/%cctv/, "")
axios.get(`https://rest.farzain.com/api/cctv/lewatmana.php?id=asia+afrika&apikey=O8mUD3YrHIy9KM1fMRjamw8eg`).then((res) => {
    let hasil = `Title : ${title}\nURL : ${url}\nImage : ${img}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%nulis")){
  const teks = text.replace(/%nulis /, "")
axios.get(`https://st4rz.herokuapp.com/api/nulis?text=${teks}`).then((res) => {
    let hasil = `DOWNLOAD SENDIRI YAHH HASILNYA :D\n\n${res.data.result.data}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("#say")){
  const teks = text.replace(/#say /, "")
conn.sendMessage(id, teks, MessageType.text)
})
}
if (text.includes("%wikien")){
  const teks = text.replace(/%wikien /, "")
axios.get(`https://arugaz.herokuapp.com/api/wikien?q=${teks}`).then((res) => {
    let hasil = `*ACCORDING TO WIKIPEDIA*\n\n${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%gay")){
  const teks = text.replace(/%gay /, "")
axios.get(`https://arugaz.herokuapp.com/api/howgay`).then((res) => {
    let hasil = `${desc}\n\nPERSEN GAY LO : ${persen}%`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%bucin")){
  const teks = text.replace(/%bucin /, "")
axios.get(`https://arugaz.herokuapp.com/api/howbucins`).then((res) => {
    let hasil = `${desc}\n\nPERSEN BUCIN LO : ${persen}%`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%spamsms")){
  const teks = text.replace(/%spamsms /, "")
axios.get(`https://arugaz.herokuapp.com/api/spamsms?no=${teks}&jum=10`).then((res) => {
    let hasil = `${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%spamtelp")){
  const teks = text.replace(/%spamtelp /, "")
axios.get(`https://arugaz.herokuapp.com/api/spamcall?no=${teks}`).then((res) => {
    let hasil = `${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("%spamgmail")){
  const teks = text.replace(/%spamgmail/, "")
axios.get(`https://arugaz.herokuapp.com/api/spamgmail?target=${teks}`).then((res) => {
    let hasil = `${result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text == '%help'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, menu.menu(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) ,MessageType.text);
}
else if (text == '%quran'){
axios.get('https://api.banghasan.com/quran/format/json/acak').then((res) => {
    const sr = /{(.*?)}/gi;
    const hs = res.data.acak.id.ayat;
    const ket = `${hs}`.replace(sr, '');
    let hasil = `[${ket}]   ${res.data.acak.ar.teks}\n\n${res.data.acak.id.teks}(QS.${res.data.surat.nama}, Ayat ${ket})`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
else if (text == 'assalamualaikum'){
conn.sendMessage(id, 'Waalaikumsalam, ada yang bisa saya bantu? kalo bingung ketik %help ya say..' ,MessageType.text);
}
else if (text == 'salam'){
conn.sendMessage(id, 'Waalaikumsalam, ada yang bisa saya bantu? kalo bingung ketik %help ya say..' ,MessageType.text);
}
else if (text == 'asalamualaikum'){
conn.sendMessage(id, 'Waalaikumsalam, ada yang bisa saya bantu? kalo bingung ketik %help ya say..' ,MessageType.text);
}
else if (text == 'Assalamualaikum'){
conn.sendMessage(id, 'Waalaikumsalam, ada yang bisa saya bantu? kalo bingung ketik %help ya say..' ,MessageType.text);
}
else if (text == 'p'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik %help ya say..' ,MessageType.text);
}
else if (text == 'P'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik %help ya say..' ,MessageType.text);
}
else if (text == 'halo'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik %help ya say..' ,MessageType.text);
}
else if (text == 'hai'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik %help ya say..' ,MessageType.text);
}
else if (text == 'woi'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik %help ya say..' ,MessageType.text);
}
else if (text == 'woy'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik %help ya say..' ,MessageType.text);
}
else if (text == 'hi'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik %help ya say..' ,MessageType.text);
}
else if (text == 'gan'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik %help ya say..' ,MessageType.text);
}
else if (text == 'sis'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik %help ya say..' ,MessageType.text);
}
else if (text == 'bro'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik %help ya say..' ,MessageType.text);
}
else if (text == 'min'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik %help ya say..' ,MessageType.text);
}
else if (text == 'sayang'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik %help ya say..' ,MessageType.text);
}
else if (text == 'i love u'){
conn.sendMessage(id, 'love you too' ,MessageType.text);
}
else if (text == 'mas'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik %help ya say..' ,MessageType.text);
}
else if (text == 'mba'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik %help ya say..' ,MessageType.text);
}
else if (text == 'bre'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik %help ya say..' ,MessageType.text);
}
else if (text == 'cuy'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik %help ya say..' ,MessageType.text);
}
else if (text == 'euy'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik %help ya say..' ,MessageType.text);
}
else if (text == 'makasi'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Makasi'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'makasih'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Makasih'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'thank'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Thank'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'thanks'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Thanks'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == '%donate'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) ,MessageType.text);
}
else if (text == '%donasi'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) ,MessageType.text);
}
else if (text == '%DONATE'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) ,MessageType.text);
}
else if (text == '%DONASI'){
  const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) ,MessageType.text);
}
else if (text == '%info'){
  const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, info.info(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) ,MessageType.text);
}
else if (text == '%readme'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) ,MessageType.text);
}
else if (text == '%ptl'){
conn.sendMessage(id, 'kirim #ptl cewek/cowok\n\nContoh: #ptl cewek' ,MessageType.text);
}
   if (messageType == 'imageMessage')
   {
      let caption = imageMessage.caption.toLocaleLowerCase()
      const buffer = await conn.downloadMediaMessage(m) // to decrypt & use as a buffer
      if (caption == '%sticker')
      {
         const stiker = await conn.downloadAndSaveMediaMessage(m) // to decrypt & save to file

         const
         {
            exec
         } = require("child_process");
         exec('cwebp -q 50 ' + stiker + ' -o temp/' + jam + '.webp', (error, stdout, stderr) =>
         {
            let stik = fs.readFileSync('temp/' + jam + '.webp')
            conn.sendMessage(id, stik, MessageType.sticker)
         });
      }
   }

   if (messageType === MessageType.text)
   {
      let is = m.message.conversation.toLocaleLowerCase()

      if (is == '%pantun')
      {

         fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-pantun-pakboy.txt')
            .then(res => res.text())
            .then(body =>
            {
               let tod = body.split("\n");
               let pjr = tod[Math.floor(Math.random() * tod.length)];
               let pantun = pjr.replace(/pjrx-line/g, "\n");
               conn.sendMessage(id, pantun, MessageType.text)
            });
      }

   }
   if (text.includes("%randomanime"))
   {
    var items = ["anime girl", "anime cantik", "anime", "anime aesthetic"];
    var cewe = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cewe;
    
    axios.get(url)
      .then((result) => {
        var b = JSON.parse(JSON.stringify(result.data));
        var cewek =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(cewek) // Path to the image
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); // Ta-da	
              conn.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error); // Logs an error if there was one
            }
        )
    
    });
    }






   // AKHIRNYAA...


})
