import util from 'util' 
 import path from 'path' 
  
 let handler = async (m, { conn }) => { 
 if (!db.data.chats[m.chat].audios && m.isGroup) throw 0 
 let vn = './media/porfavormp3' 
 conn.sendFile(m.chat, vn, 'porfavor.mp3', null, m, true, { 
 type: 'audioMessage',  
 ptt: true  
 }) 
 } 
 handler.customPrefix = /Por favor|por favor/porfa/porfavor
 handler.command = new RegExp 
 handler.fail = null 
 handler.exp = 100 
 export default handler
