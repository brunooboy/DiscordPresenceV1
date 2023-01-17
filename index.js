const RPC = require("discord-rpc")
const client = new RPC.Client({transport: "ipc"});
const colors = require('colors')
const config = require('./config.json')

//configurações - assets
const detalhes = config.details
const image_larga = config.large_image
const texto_larga = config.large_text
const small_image = config.small_image
const small_text = config.small_text

//configurações - buttons
const label = config.label
const url = config.url

//configurações - geral
const tempo = config.tempo
const clientid = config.clientid
const states = config.state

const activity = {
    details: detalhes,
    state: states,
    assets: {
        large_image: image_larga,
        large_text: texto_larga,
        small_image: small_image,
        small_text: small_text
    },
    buttons: [
        {
            "label": label,
            "url": url
        }
    ],
	timestamps: {start: Date.now()},
	instance: tempo
};

client.on("ready", () => {
    client.request("SET_ACTIVITY", {pid: process.pid, activity: activity})
    


    console.log('__________¶¶_¶¶__¶¶_¶¶_')
    console.log('_________¶¶_¶¶_¶¶_¶¶_¶¶¶')
    console.log('_____¶¶¶¶¶____________¶¶¶¶¶¶¶')
    console.log('___¶¶¶¶¶_______________¶¶¶¶¶¶¶')
    console.log('__¶¶¶¶¶__________________¶¶¶¶¶')
    console.log('__¶¶¶¶____________________¶¶¶')
    console.log('___¶¶______________________¶¶¶ ')
    console.log('___¶________________________¶¶¶¶')
    console.log('__¶¶_____¶¶¶______¶¶________¶¶¶¶¶¶¶')
    console.log('__¶_____¶¶¶¶_____¶¶¶¶¶______¶¶¶¶¶¶_¶')
    console.log('__¶____¶¶¶¶¶____¶¶¶¶¶¶¶¶____¶¶¶¶¶¶__¶ ')
    console.log('__¶¶__¶¶¶¶¶______¶¶¶¶¶¶¶___¶¶¶¶¶¶¶___¶ ')
    console.log('___¶__¶¶¶__________¶¶¶¶___¶¶¶¶¶¶¶¶¶___¶')
    console.log('___¶¶____________________¶¶¶¶¶¶¶¶¶¶___¶¶¶')
    console.log('___¶¶¶_____¶¶¶¶¶¶_______¶¶¶¶¶¶¶¶¶¶¶___¶¶¶¶')
    console.log('___¶¶¶¶¶___¶¶¶¶¶¶_____¶¶¶¶¶¶¶¶¶¶¶¶¶__¶¶¶¶¶¶')
    console.log('___¶¶¶¶¶¶¶_________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶__¶¶¶¶¶¶¶¶')
    console.log('___¶¶¶¶¶¶¶¶__¶¶¶___¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶_¶¶¶¶¶¶¶¶¶')
    console.log('____¶¶¶¶¶¶¶¶¶¶¶¶__¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶')
    console.log('____¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶ ¶¶¶¶¶¶¶¶¶¶')
    console.log('____¶¶¶¶¶¶¶¶¶_¶¶¶¶¶¶¶_¶¶¶¶¶¶¶¶¶¶¶ ¶¶¶¶¶¶¶¶')
    console.log('__¶¶¶¶¶¶¶¶¶¶¶_________¶¶¶¶¶¶¶¶¶¶¶ ¶¶¶¶¶')
    console.log('__¶¶¶¶¶¶¶¶¶¶_________¶¶¶¶¶¶¶¶¶¶¶')
    console.log('___¶¶¶¶¶¶¶_________¶¶¶¶¶¶¶¶¶¶¶¶ ')
    console.log('___________________¶¶¶¶¶¶¶¶¶¶¶')
    console.log('___________________¶¶¶¶¶¶¶¶¶¶' + "\n")


    console.log(colors.blue('Github: ') + colors.yellow('https://github.com/elingboy') + "\n")

    console.log(colors.black('===================='))
    console.log(colors.green('Discord Presence ON'))
    console.log(colors.black('===================='))
})
 client.login({ clientId: clientid })
