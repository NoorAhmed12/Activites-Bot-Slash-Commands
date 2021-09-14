const Discord = require("discord.js");
var fetch = require(`node-fetch`)
var config = require(`../../config.json`)
module.exports = {
    name: "poker",
    description: "create a poker game",
    run: async (client, interaction, args) => {
if(!interaction.member.voice.channel) return interaction.followUp({content : "join a voice channel"})
var channel = interaction.member.voice.channel.id

    await fetch(`https://discord.com/api/v8/channels/${channel}/invites`, {
      method: 'POST',
      body: JSON.stringify({
        max_age: 86400,
        max_uses: 0,
        target_application_id: `755827207812677713`,
        target_type: 2,
        temporary: false,
        validate: null,
      }),
      headers: {
        Authorization: `Bot ${config.token}`,
        'Content-Type': 'application/json',
      }
    })
      .then((res) => res.json())
      .then((invite) => {
       var e = new Discord.MessageEmbed() 
       .setTitle(`Poker`)
       .setColor(`YELLOW`) 
       .setDescription(`Start [Poker](https://discord.com/invite/${invite.code})`) .setTimestamp() 

        interaction.followUp({embeds : [e]})
      });
    




    }
}