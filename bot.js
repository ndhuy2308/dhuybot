const Discord = require('discord.js');
const prefix = "#";
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
})
client.on('message', message => {
  //console.log(message.content);
	if(message.content.startsWith(`${prefix}dhuy`)) {
		message.channel.send("Tui xin loi")
		}
	if(message.content.startsWith(`${prefix}tkb`)) {
		message.channel.send("BUỔI SÁNG:\nThứ 2: Văn - Văn - Toán - Toán\nThứ 3: Lý - Lý - Hóa - Sinh - Sinh\nThứ 4: Anh - Anh - Toán - Lý - GDCD\nThứ 5: Văn - Văn - Anh - Sử - Địa\nThứ 6: Hóa - Hóa - Toán - Toán - Sinh hoạt\n------------------------\nBUỔI CHIỀU:\nThứ 2 (Tiết 2345): Thể dục - Thể dục - Lý - Lý\nThứ 4 (Tiết 234): KTCN - KTCN - Quốc phòng \nThứ 6 (Tiết 2345): Toán - Toán - Tin - Tin")	
	}
})
client.login(process.env.BOT_TOKEN);
