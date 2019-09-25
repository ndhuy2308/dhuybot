const Discord = require('discord.js');
const prefix = "#";
const client = new Discord.Client();
const superagent = require("superagent");
client.once('ready', () => {
	console.log('Ready!');
})

client.on("guildMemberAdd", (member) => { // Check out previous chapter for information about this event
let guild = member.guild; 
let memberTag = member.user.tag; 
if(guild.systemChannel){
	guild.systemChannel.send(new Discord.RichEmbed() // Creating instance of Discord.RichEmbed
	.setTitle("Một con gà mới đã vào Discord: ") // Calling method setTitle on constructor. 
	.setDescription(memberTag) // Setting embed description
	.setThumbnail(member.user.displayAvatarURL) // The image on the top right; method requires an url, not a path to file!
	.addField("Số lượng thành viên hiện tại: ", member.guild.memberCount) // Adds a field; First parameter is the title and the second is the value.
	.setTimestamp() // Sets a timestamp at the end of the embed
	);
}
});


client.on('message', (message, member) => {
  //console.log(message.content);
	var uid = message.author.id;
	var uidstring = "" + uid;
	if(message.content.startsWith(`${prefix}dhuy`)) {
		message.channel.send("Tui xin loi")
		}
	if(message.content.startsWith(`${prefix}sin`)) {
		message.channel.send("Khunggg")
		}
	if(message.content.startsWith(`${prefix}cat`)) {
		message.channel.send("Khunggg")
		}
	if(message.content.startsWith(`${prefix}tkb`) && uidstring == "493299951590440961" || message.content.startsWith(`${prefix}tkb`) && uidstring == "479877128368685056") {
		var embed = new Discord.RichEmbed()
		.setColor('#0099ff')
  		.setAuthor("DHuy BOT - Thời khóa biểu", message.author.avatarURL)
		.addField("BUỔI SÁNG","-------------------------------")
		.addField("Thứ 2","Văn - Văn - Toán - Toán")
		.addField("Thứ 3","Lý  - Lý  - Hóa  - Sinh - Sinh")
		.addField("Thứ 4","Anh - Anh - Toán - Lý   - GDCD")
		.addField("Thứ 5","Văn - Văn - Anh  - Sử   - Địa")
		.addField("Thứ 6","Hóa - Hóa - Toán - Toán - Sinh Hoạt")
		.addField("BUỔI CHIỀU","-------------------------------")
		.addField("Thứ 2 (Tiết 2345):","Thể dục - Thể dục - Lý - Lý")
		.addField("Thứ 4 (Tiết 234):","KTCN - KTCN - Quốc phòng ")
		.addField("Thứ 6 (Tiết 2345):","Toán - Toán - Tin - Tin")
		.addField("Username:",message.author.username)
		;
  		message.channel.send(embed);
	}
})
client.login(process.env.BOT_TOKEN);
