import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import path, { join } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import moment from 'moment-timezone' 

global.owner = [
  ['51957041866', 'Creadora OFC Yesenia', true],
  ['51950054323']
] //Numeros de owner 

global.mods = [''] 
global.prems = ['51979152365', '51998882773']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'm2XBbNvz' //-- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment	

global.imagen1 = fs.readFileSync('./src/fg_wallpaper.jpg') 
global.imagen2 = fs.readFileSync('./src/fg_wallpaper1.jpg')

// Sticker WM
global.packname = 'Sumi WhatsApp Bot' 
global.author = '@Powerd By Yesenia' 

//--info FG
global.botName = 'SumiWaBot'
global.fgig = 'https://instagram.com/yeseia57' 
global.fgsc = 'https://github.com/Yesenia57/SumiWaBot-WhatsAppBot' 
global.fgyt = 'https://youtube.com/@kamatzumi?si=z6kETyCgzUZplN2_'
global.fgpyp = 'https://paypal.me/YeseniaXtlv'
global.fglog = 'https://i.ibb.co/1zdz2j3/logo.jpgs' 

//--- Grupos WA
global.id_canal = 'undefined@newsletter' //-ID de canal de WhatsApp
global.fgcanal = 'https://whatsapp.com/channel/0029VagSrLa6LwHm5ga8d22K'
global.bgp = 'https://chat.whatsapp.com/FQGIH0GG6XuK6MR3t42SQT'
global.bgp2 = 'https://chat.whatsapp.com/GxPCtnVjZoD1djroBEgYSH'
global.bgp3 = 'https://chat.whatsapp.com/DrMBArT4DLn0VHXaKSoVWm' //--GP NSFW

global.wait = 'Loading .  .  .'
global.rwait = '🕐'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.d = new Date(new Date + 3600000) 
 global.locale = 'es' 
 global.dia = d.toLocaleDateString(locale, { weekday: 'long' }) 
 global.fecha = d.toLocaleDateString('es', { day: 'numeric', month: 'numeric', year: 'numeric' }) 
 global.mes = d.toLocaleDateString('es', { month: 'long' }) 
 global.año = d.toLocaleDateString('es', { year: 'numeric' }) 
 global.tiempo = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
