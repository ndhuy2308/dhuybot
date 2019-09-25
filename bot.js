const Discord = require('discord.js');
const prefix = "#";
const client = new Discord.Client();
const embed = new Discord.RichEmbed()
  .setTitle("This is your title, it can hold 256 characters")
  .setAuthor("Author Name", "https://i.imgur.com/lm8s41J.png")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("This is the main body of text, it can hold 2048 characters.")
  .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
  .setImage("https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.0-9/53292289_2041911859255275_2460302097740988416_o.jpg?_nc_cat=103&_nc_oc=AQmdW-HYKgog_6HAhQKY_2CwSQDgGo63Tlx0TME_Y77Og_DCyFAiNNQqUmNVjwWCbmfepJfweAZ8L8qzCzPgwJcM&_nc_ht=scontent.fsgn5-7.fna&oh=99dd8f414d15bd0eedcd5c928ceb0f5e&oe=5E3040D5")
  .setThumbnail("ha")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("This is a field title, it can hold 256 characters",
    "This is a field value, it can hold 1024 characters.")
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("Inline Field", "They can also be inline.", true)
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);




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


client.on('message', message, member => {
  //console.log(message.content);
	if(message.content.startsWith(`${prefix}dhuy`)) {
		message.channel.send("Tui xin loi")
		}
	if(message.content.startsWith(`${prefix}sin`)) {
		message.channel.send("Khungg")
		}
	if(message.content.startsWith(`${prefix}tkb`)) {
		message.channel.send("BUỔI SÁNG:\nThứ 2: Văn - Văn - Toán - Toán\nThứ 3: Lý - Lý - Hóa - Sinh - Sinh\nThứ 4: Anh - Anh - Toán - Lý - GDCD\nThứ 5: Văn - Văn - Anh - Sử - Địa\nThứ 6: Hóa - Hóa - Toán - Toán - Sinh hoạt\n------------------------\nBUỔI CHIỀU:\nThứ 2 (Tiết 2345): Thể dục - Thể dục - Lý - Lý\nThứ 4 (Tiết 234): KTCN - KTCN - Quốc phòng \nThứ 6 (Tiết 2345): Toán - Toán - Tin - Tin")	
	}
	if(message.content.startsWith(`${prefix}test`)) {
		  message.channel.send({embed});
	}
})
client.login(process.env.BOT_TOKEN);
