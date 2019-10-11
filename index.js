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

client.on('message', message => {
    if (message.content.startsWith(`${prefix}yogodson`)) {
       message.channel.send("I am here my Lord!");
    }
 });

client.on('message', message => {
    if (message.content.startsWith(`${prefix}checkbalance`)) {
       message.channel.send("1000000 silver");
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

 client.on('message', message => {
    if (message.content.startsWith(`${prefix}gvg`)) {
       message.delete(1000); //Supposed to delete message
       message.channel.send("@Everyone We are looking for members to be apart of some GVG team for the next season. \n So if you would like to join fill out the requiremeants you have in the example teamplate below. \n thankyou to everyone who applys and see you in the arena.   \n \n (EXAMPLE) \n\n IGN: (Name) \n Class type: Damage AOE \n Main Weapon: (Permafrost Prism) - LEVEL/SPEC \n Main Chest: (Scholar Robes) -100/85 \n Main Boots: (Cleric Sandals) - 100/85 \n Main Helmet: (Royal Cowl) -100/85 \n \n Others: \n \n Weapons - Great axe-100 \n Head - Hunter hood-100 \n Chest - assassin jacket-100 \n Shoes - hunter shoes-100 ");
    }
 });



client.login(process.env.token);
