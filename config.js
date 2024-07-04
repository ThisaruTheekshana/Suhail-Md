const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_44_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA5NyxcbiAgICAgICAgMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjksXG4gICAgICAgIDU0LFxuICAgICAgICA4MixcbiAgICAgICAgNjksXG4gICAgICAgIDIzOCxcbiAgICAgICAgODYsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTcsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDY3LFxuICAgICAgICA4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDczLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgODEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDcxLFxuICAgICAgICAxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzksXG4gICAgICAgIDg3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxODYsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDgxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDU5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjE3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTYxLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDc0LFxuICAgICAgICA2MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA5MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjUzLFxuICAgICAgICA1NixcbiAgICAgICAgMTg2LFxuICAgICAgICA1NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM0LFxuICAgICAgICA3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTkxLFxuICAgICAgICA2NixcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEsXG4gICAgICAgIDc1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAzMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc5LFxuICAgICAgICA0MixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjM2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDM2LFxuICAgICAgICAwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQzLFxuICAgICAgICA1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDksXG4gICAgICAgIDY0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDUwLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTEzLFxuICAgICAgICA5MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDUsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTksXG4gICAgICAgIDk2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTUwLFxuICAgICAgICA1MyxcbiAgICAgICAgMyxcbiAgICAgICAgMSxcbiAgICAgICAgOTksXG4gICAgICAgIDgyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJBb0YzbTc2TjF1elFBbDRNU3Fyamo1ZEhJWlZTVDhLZW1MMUJLeWNDNndRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzA0NjgzNzYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwOTYwNzQ1REM5OUQyMEZDQjhBNzhBODJFOTFDNDZGNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAwODk4NDVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcwNDY4Mzc2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTY4NEQ4NkYzMDJFOUM1OUM2MTRCNjM5Q0FBQzkzQ0ZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMDg5ODQ2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInRQZEZvM0xMUkJlR3RydGFKcW13T0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDJmNWJiMjEtMWEzNS00ZmQ5LTgwMjQtNjg5NmY3Yzc4Y2M1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4OCxcbiAgICAgIDE3OSxcbiAgICAgIDIwMSxcbiAgICAgIDE3LFxuICAgICAgMTAxLFxuICAgICAgMTcwLFxuICAgICAgMjI5LFxuICAgICAgMTI0LFxuICAgICAgNDMsXG4gICAgICAxNDYsXG4gICAgICAyMDYsXG4gICAgICA4NixcbiAgICAgIDIxMSxcbiAgICAgIDI0MSxcbiAgICAgIDI0MCxcbiAgICAgIDc5LFxuICAgICAgMjQwLFxuICAgICAgMTM1LFxuICAgICAgMjQ3LFxuICAgICAgNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzksXG4gICAgICAyNDEsXG4gICAgICA3MSxcbiAgICAgIDY3LFxuICAgICAgOTEsXG4gICAgICAxMjksXG4gICAgICAxODAsXG4gICAgICAzOSxcbiAgICAgIDE3NCxcbiAgICAgIDE3NixcbiAgICAgIDk3LFxuICAgICAgMjQyLFxuICAgICAgMTE3LFxuICAgICAgMjA2LFxuICAgICAgMTcyLFxuICAgICAgMTYxLFxuICAgICAgMTc1LFxuICAgICAgMTg5LFxuICAgICAgMjA0LFxuICAgICAgMTMxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZSMzJLWEtBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcwNDY4Mzc2Mzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzQ1MTMzMzgwNzMxMjE6NUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLqp4E64oOd4oOd4oOd4oOd4oOd8J2ag/CdmbfwnZm48J2ZuvCdmoLwnZm38J2ZsPCdmb3wnZmw4oOi8J+lsOKdpO+4j+KcqFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05yQXR1TUJFTzM1bWJRR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibWcvSTUybDdzNG54VXNPVlI5Y2ZEZDFodjhWSCtUVXZpS3N0bHRtZ2xDQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJjcXBxWEI1bENSNzZ4RGlKZFh6RGMyWHhYbFdaUWxvd0ErSDFMV3A1Mm5LYXJIdnVrV3lLNFdyQ2tRZE9LVDBRRm5UNzFTUUlUS3c2OGFzbzdZT3VCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI5TzVUMTc1dWxaTlpNM2RjODdBZnRBWE4yOUlWSkJFM0NXOGpvYjlDKzZoVU0zZG9oNGVKQmpuTDg2RmdSbXk3UVBoR3lMc1MzQ3YxYkZBVlU1RC9DQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcwNDY4Mzc2Mzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDA4OTg0MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFWelwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQVZ6Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiTzNDbGdRN3lFc0Y0cHFycVpFeGdKRmJ4cUI3b3hnUUpHZGVSOW1EOGhSZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NzY5NDY1MjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk4OTYyNjAzOTVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
