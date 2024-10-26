require("./database/module")

//GLOBAL PAYMENT
global.storename = "Giddy Tennor"
global.dana = "0703726139"
global.qris = "https://deposit.pictures/p/8f3f4ab89de24d3faef51146d7439b3a"


// GLOBAL SETTING
global.owner = "254104245659"
global.namabot = "Vampire Killer V7"
global.nomorbot = "254104245659"
global.namaCreator = "Giddy Tennor"
global.linkyt = "https://youtube.com/@giddytennor"
global.autoJoin = false
global.antilink = false
global.versisc = '5.0'

// DELAY JPM
global.delayjpm = 5500

// SETTING PANEL
global.apikey = 'PLTC'
global.capikey = 'PLTA'
global.domain = 'https://domain.com'
global.eggsnya = '15'
global.location = '1'



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://8030.us.kg/file/14VKdVW6MSA1.jpg'
global.isLink = 'https://whatsapp.com/channel/0029VafrbsKG8l5EFBDDCy41'
global.packname = "Bugs"
global.author = "Giddy Tennor"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})