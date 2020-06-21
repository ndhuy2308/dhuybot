const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
  const channel = client.channels.get("687585008759865410");
  if (!channel) return console.error("The channel does not exist!");
  channel.join().then(connection => {
    // Yay, it worked!
    console.log("Successfully connected.");
  }).catch(e => {
    // Oh no, it errored! Let's log it to console :)
    console.error(e);
  });
});

client.on("guildMemberAdd", (member) => { // Check out previous chapter for information about this event
let guild = member.guild; 
let memberTag = member.user.tag; 
if(guild.systemChannel){
	member.guild.channels.get('694837319911342101').send(new Discord.RichEmbed() // Creating instance of Discord.RichEmbed
	.setTitle("Một con gà mới đã vào Newlight: ") // Calling method setTitle on constructor. 
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
    message.channel.send("Nung lol me thien ha!!");
  } 
  if (message.content.startsWith(prefix + "tkb")) {
    message.channel.send("TKB DHuy", {files: ["https://a3tna1720.tk/upload/server/php/files/TKB-A3TNA.png"]});
  }
  if (message.content.startsWith(prefix + "taivo")) {
    message.channel.send("mai iu Nhi <3", {files: ["https://raw.githubusercontent.com/ndhuy2308/dhuybot/master/img/tailovenhi.png"]});
  }
  if (message.content.startsWith(prefix + "jiby")) {
    number=80;
    imageNumber= Math.floor (Math.random() * (number - 1 + 1)) + 1;
        if (message.member.roles.get('683588975071592460'))
      {      
        message.channel.send({files: ["https://raw.githubusercontent.com/ndhuy2308/dhuybot/master/jiby-" + imageNumber + ".jpg"]});
      } 
    else 
      {
        message.channel.send("Ban khong co quyen xem anh Jiby.");
      }  	  	  
  }

  if (message.content.startsWith(prefix + "myluongso1")) {
    number=89;
    imageNumber= Math.floor (Math.random() * (number - 1 + 1)) + 1;
        if (message.member.roles.get('687959988039057495'))
      {      
        message.channel.send({files: ["https://raw.githubusercontent.com/ndhuy2308/dhuybot/master/img/" + imageNumber + ".jpg"]});
      } 
    else 
      {
        message.channel.send("Ban khong co quyen xem anh My Luong so 1.");
      }  	  	  
  }
	
  if (message.content.startsWith(prefix + "pkn")) {
    number=42;
    imageNumber= Math.floor (Math.random() * (number - 1 + 1)) + 1;
        if (message.member.roles.get('689145789544529960'))
      {      
        message.channel.send({files: ["https://raw.githubusercontent.com/ndhuy2308/dhuybot/master/img-pkn/pkn-" + imageNumber + ".jpg"]});
      } 
    else 
      {
        message.channel.send("Ban khong co quyen xem anh PKN.");
      }  	  	  
  }
 if (message.content.startsWith(prefix + "avatar")) {
    if (message.member.roles.get('683588975071592460')) {
    const user = message.mentions.users.first() || message.author;
    const avatarEmbed = new Discord.RichEmbed()
        .setColor(0x333333)
        .setAuthor(user.username)
        .setImage(user.avatarURL);
    message.channel.send(avatarEmbed);
    }
 else { message.channel.send("Ban khong co quyen su dung lenh nay."); }
}
});

client.login(process.env.BOT_TOKEN);
