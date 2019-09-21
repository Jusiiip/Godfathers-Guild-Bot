const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client  = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
})

client.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.find(channel => channel.name === "welcome");
    if(!channel) return;

    channel.send(`Welcome to Godfathers, ${member}, I am Godson protector of Godfathers Guildhall. Please type in **!guest** to join **Guest Voice Channel**, if you are applying or invited to Godfathers Guild type in **!applicant** to join the **Applicants Voice Channel**. *Please avoid typing the applicants command if you are not applying/invited in the guild. Failure to follow this rule will result in **PERMANENT BAN on this SERVER**.`);
});

client.on('message', message =>{

    //if(message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS']))

    if(message.content.startsWith(`${prefix}guest`)) {

        var role = message.guild.roles.find(role => role.name === "Guest");
            message.member.addRole(role) 
                
    }
    
});

client.on('message', message =>{

    //if(message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS']))

    if(message.content.startsWith(`${prefix}applicant`)) {

        var role = message.guild.roles.find(role => role.name === "Applicants");
            message.member.addRole(role) 
                
    }
    
});

client.on('message', message => {
    if (message.content.startsWith(`${prefix}guest`)) {
       message.delete(1000); //Supposed to delete message
       message.channel.send("You can now enter **Guest Voice Channel**");
    }
 });

 client.on('message', message => {
    if (message.content.startsWith(`${prefix}applicant`)) {
       message.delete(1000); //Supposed to delete message
       message.channel.send("You can now enter **Applicants Voice Channel**");
    }
 });



client.login(token);