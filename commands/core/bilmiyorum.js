const Discord = require('discord.js')
module.exports = {
    name: 'bilmiyorum',
    aliases: ['Bilinmez'],
    utilisation: '{prefix}avatar',
    

    execute(client, message, args) {

        message.channel.send(`**${message.author}** `).then(async msg => {
            setTimeout(() => {
                msg.edit('Neden bilmiyorsun?');
            }, 2000);
            setTimeout(() => {
                msg.edit('Niçin bilmiyorsun?');
            }, 3500);
            setTimeout(() => {
                msg.edit('Nerede bilmiyorsun?');
            }, 4000);
            setTimeout(() => {
                msg.edit('Ne zaman bilmiyorsun?');
            }, 5000);
            setTimeout(() => {
                msg.edit('Ne için bilmiyorsun?');
            }, 6500);
            setTimeout(() => {
                msg.edit('Niye bilmiyorsun?');
            }, 7000);
            setTimeout(() => {
                msg.edit('Hangi şeyi bilmiyorsun?');
            }, 8500);
            setTimeout(() => {
                msg.edit('Neleri bilmiyorsun?');
            }, 9000);
            setTimeout(() => {
               msg.edit('Neden bilmiyorsun?');
            }, 10000);
            setTimeout(() => {
               msg.edit('Niçin bilmiyorsun?');
            }, 13500);
            setTimeout(() => {
               msg.edit('Nerede bilmiyorsun?');
            }, 14000);
            setTimeout(() => {
               msg.edit('Ne zaman bilmiyorsun?');
            }, 15000);
            setTimeout(() => {
               msg.edit('Ne için bilmiyorsun?');
            }, 16500);
            setTimeout(() => {
               msg.edit('Niye bilmiyorsun?');
            }, 17000);
            setTimeout(() => {
               msg.edit('Hangi şeyi bilmiyorsun?');
            }, 18500);
            setTimeout(() => {
               msg.edit('Neleri bilmiyorsun?');
            }, 19000);
    });}}
