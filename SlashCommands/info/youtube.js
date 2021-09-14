const Discord = require("discord.js");
var fetch = require(`node-fetch`)
var config = require(`../../config.json`)
module.exports = {
    name: "youtube",
    description: "create a youtube together",
    run: async (client, interaction, args) => {
if(!interaction.member.voice.channel) return interaction.followUp({content : "join a voice channel"})
var channel = interaction.member.voice.channel.id

    await fetch(`https://discord.com/api/v8/channels/${channel}/invites`, {
      method: 'POST',
      body: JSON.stringify({
        max_age: 86400,
        max_uses: 0,
        target_application_id: `880218394199220334`,
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
       var e = new Discord.MessageEmbed() .setTitle(`Youtube Together`) .setColor(`RED`) .setDescription(`Start [YouTube Together](https://discord.com/invite/${invite.code})`) .setTimestamp()
        interaction.followUp({embeds : [e]})
      });
    




    }
}