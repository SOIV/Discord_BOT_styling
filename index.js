const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
var port = process.env.PORT || 8080, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

client.on('ready', () => {
  console.log('Ready!');
  client.user.setPresence({ game: { name: '도움말 명령어는 !help' }, status: 'online' })
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content === '온라인') {
    message.reply('서버 체크 완료!');
  }
    
if(message.content == '!help') {
    let helpImg = 'https://images-ext-1.discordapp.net/external/RyofVqSAVAi0H9-1yK6M8NGy2grU5TWZkLadG-rwqk0/https/i.imgur.com/EZRAPxR.png';
    let commandList = [
      {name: '!ping', desc: '현재 핑 상태 (제작중)'},
      {name: '!help', desc: 'commandList'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('Help of project - UG_Styling', helpImg)
      .setColor('#186de6')
      .setFooter(`project - UG_Styling`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }
});

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str;
  limitLen -= tmp.length;

  for(let i=0;i<limitLen;i++) {
      tmp += ' ';
  }

  return tmp;
}


client.login(token);
