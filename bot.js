const Discord = require('discord.js');
const prefix = "#";
const client = new Discord.Client();
client.once('ready', () => {
	console.log('Ready!');
})

client.on("guildMemberAdd", (member) => { // Check out previous chapter for information about this event
let guild = member.guild; 
let memberTag = member.user.tag; 
if(guild.systemChannel){
	member.guild.channels.get('626373988343611402').send(new Discord.RichEmbed() // Creating instance of Discord.RichEmbed
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

		if(message.content.startsWith(`${prefix}huytkb`) && uidstring == "493299951590440961" || message.content.startsWith(`${prefix}huytkb`) && uidstring == "479877128368685056") {
		message.channel.send("TKB DHuy", {files: ["https://a3tna1720.tk/upload/server/php/files/TKB-A3TNA.png"]});
	}
})
client.login(process.env.BOT_TOKEN);
