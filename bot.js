const Discord = require('discord.js');
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


let prefix = "#";
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  if (message.content.startsWith(prefix + "7nung")) {
    message.channel.send("Nung lol me thien ha!");
  } 
  if (message.content.startsWith(prefix + "tkb")) {
    message.channel.send("TKB DHuy", {files: ["https://a3tna1720.tk/upload/server/php/files/TKB-A3TNA.png"]});
  }
  if (message.content.startsWith(prefix + "jiby")) {
    number=80;
    imageNumber= Math.floor (Math.random() * (number - 1 + 1)) + 1;
        if (message.member.roles.get('526401395658850314'))
      {      
        message.channel.send({files: ["https://newlight2017.tk/jiby/img/" + imageNumber + ".jpg"]});
      } 
    else 
      {
        message.channel.send("Ban khong co quyen xem anh Jiby.");
      }  
	  
    
  }
});

client.login(process.env.BOT_TOKEN);
