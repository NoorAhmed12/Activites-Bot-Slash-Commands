const Discord = require("discord.js");
var config = require(`../../config.json`)
var ms = require(`ms`)
module.exports = {
    name: "ping",
    description: "bot ping",
    run: async (client, interaction, args) => {
var e = new Discord.MessageEmbed().setTitle(`Bot Ping`).setColor(`GREY`).setDescription(`Ping ${ms(client.ws.ping)}`).setTimestamp()
interaction.followUp({embeds : [e]})


    }
}