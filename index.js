const Discord = require("discord.js");
const webdict = require("webdict");
const client = new Discord.Client();


client.on('ready', () => { 
	console.log(`Logged in as ${client.user.tag}!`); 
});
 client.on('message', msg => { 
	 const prefix = "h!";
	 var user_id = msg.author.id;
 	const args = msg.content.slice(prefix.length).trim().split(/ +/g);
 	const cmd = args.shift().toLowerCase();
 	if(!msg.content.startsWith(prefix) || msg.author.bot) return;
					     
	if (cmd === 'ping') { msg.channel.send('🏓 Pong! Took ' + Math.floor(client.ping) + 'ms'); 
 	}
 	if(cmd === 'avatar' || cmd ==='ava'){
		try {
 		let userlist = msg.mentions.users;
 		if(userlist.size == 0) {
 			if(!args[0]){
 		msg.channel.send({embed:new Discord.RichEmbed().setTitle(`${msg.author.username}'s Avatar`).setImage(msg.author.avatarURL)});}										 
 		
 		else if(args[0]){
 			let url = msg.channel.members.array().filter(mmb=>mmb.user.username==args[0])[0].user.avatarURL;
		
 				msg.channel.send({embed:new Discord.RichEmbed().setTitle(`${args[0]}'s Avatar`).setImage(url.slice(0,-4)+"128")});
 	   	
   
 		}
 		
 		}
 		
 		userlist.forEach(function (mmb){
 			if(!mmb) msg.reply("Please mention a valid user");
 		msg.channel.send({embed:new Discord.RichEmbed().setTitle(`${mmb.username}'s Avatar`).setImage(mmb.avatarURL)});
      });
		}
		catch(e){
		msg.channel.send("Couldn't find the user..Are you sure about that username?");
		}
      }
      //Math Commands
   if(cmd === 'add') { msg.channel.send("Answer is "+(parseFloat(args[0]) + parseFloat(args[1])));}
    if(cmd === 'mult') {msg.channel.send("Answer is "+(parseFloat(args[0]) * parseFloat(args[1])));}
    if(cmd === 'div') { msg.channel.send("Answer is "+(parseFloat(args[0]) / parseFloat(args[1])));}
    if(cmd === 'sub') { msg.channel.send("Answer is "+(parseFloat(args[0]) - parseFloat(args[1])));}
	 if(cmd==='kick'){
	let mmb = msg.mentions.members.first();
		 mmb.kick().then(r=>{
		   msg.channel.send(`Kicked!`);
	   });
	 }
   if(cmd==='test'){
	 var role = msg.mentions.roles.first();
	let mmb = msg.mentions.members.first();
	   mmb.addRole(role);
	    msg.channel.send(`Added ${role.name}`).then(r=>{
	   setTimeout(function(){
		   mmb.removeRole(role);
		   msg.channel.send(`Removed ${role.name}`);
	   },3000);
	    });
    }
	 if(cmd==='now'){
		 var now = new Date();
	 msg.channel.send(now).then(r=>{
	 setInterval(function(){
		  var now = new Date();
	 m.msg.edit(now)},100)
	 });
	 }
	 if(cmd=='now'){
	 msg.channel.send('kek').then((m)=>{
	 msg.edit("kok");
	 })
	 
	 }
   if(cmd==='say'){
     msg.delete();
   	msg.channel.send(""+msg.content.split(" ").splice(1).join(" "));
   }
    
    if(cmd==='ar'){
    	let role = msg.mentions.roles.first();
    	let mmb = msg.mentions.members.first();
	    try{
    	mmb.addRole(role).then(member=>{msg.channel.send(`Given **${role.name}** role to ${mmb}`); }); }
	 catch(e){msg.channel.send("Command Failed \nError Message "+ e +"");}}
    if(cmd==='rr'){
    	let role = msg.mentions.roles.first();
    	let mmb = msg.mentions.members.first();
    	mmb.removeRole(role).then(member=>{msg.channel.send(`Removed **${role.name}** role from ${mmb}`); }); }
     
     if(cmd==='talk'){
     	if (args[0] == 'who' && args[1] =='are' && args[2]=='you'){
     		let ans = ["I am bot, else who?","I AM Hinami","I am a bot created with full love and perserverance by Nikhil","I am girl! And Nikhil's waifu too"];
     		msg.channel.send(ans[Math.floor(Math.random() * ans.length)]);}
     		else if(args[0] == 'Hii' || args[0] == 'Hi' || args[0] == 'Hello'){
     			if (msg.author.id ==310768205121585153){
     				msg.channel.send("Hii Master Nikhil");}
     				else{
     					ans = ["Hello 👋","Hii, do you know where my master is? ","Hii there, I am Touka","My master said there's no problem talking to you. So Hello 👋"]
     					msg.channel.send(ans[Math.floor(Math.random()*ans.length)]);}
     					}
     				
     		
     			else { msg.channel.send("I can't answer these questions now but maybe I can in future :)")}
     			}
     			
    
     if(cmd==='kill'){
     	if(msg.author.id==444896160105103361){
     		msg.channel.send({embed:new Discord.RichEmbed().setDescription("*Bot shutdown...*").setColor("0xAE0608")}).then(()=>client.destroy()).then(()=>process.exit()).catch(()=>process.exit());
	
     	}
     	else{
     		msg.channel.send("You aren't my master");
     	}
     }
     if(cmd==='help'){
     	msg.channel.send({
     		embed:{
     			color:3447003,
     			title:"Hinami's help box",
     			description:"Prefix => h!",
     			thumbnail:{
     				url:client.user.avatarURL
     			},
     			fields:[{
     				name:"ping!",
     				value :"Pong!"
     			},
     			{
     				name:"avatar or ava <user>",
     				value:"Shows the avatar of the mentioned user. If no user is mentioned shows your avatar in a beautiful embed"
     			},
     			{
     				name:"Math Commands :- add,sub,mult,div",
     				value:"Their names tell their task"
     			},
     			{
     				name:"say <what_to_say>",
     				value:"Says what you want it to say"
     			},
			{
				name:"def <word> or dict <word>",
				value:"Tells the definition of a word. def=> from urbandictionary; dict => from dictionary.com" 
			},
			{
				name:"rps",
				value:"A rock-paper-scissors game of 15 seconds" 
			},
			{
				name:"invite",
				value:"Invite link for the bot"
			},
				
     			{
     				name:"help",
     				value:"Shows the help box."
     			}	
     		],
     		timestamp:new Date(),
     		footer:{
     			text:`Requested by ${msg.author.username}`
     		}
     		}
     	});
     }
    
		if (cmd==='eval') {
			if(msg.author.id==444896160105103361){
			try {
				msg.channel.send({embed:new Discord.RichEmbed().setTitle("REPL").setDescription(""+eval(msg.content.split(" ").slice(1).join(" "))+"")});
				msg.react("✅");
			} catch(e) {
				msg.channel.send(`${e.name}: ${e.message}`);
				msg.react("❌");
			}
		}
		else{
			msg.channel.send("Why should I listen to your order ");
		}
     
     }
	 if(cmd==='def'){
		 webdict('urbandictionary',args[0]).then(response=>{msg.channel.send({embed:new Discord.RichEmbed().setTitle(args[0]).setDescription(response.definition[0])})});
			}
	  if(cmd==='dict'){
		 webdict('dictionary',args[0]).then(response=>{msg.channel.send({embed:new Discord.RichEmbed().setTitle(args[0]).setDescription(response.definition[0])})});
			}
	 if(cmd==='invite'){
		 let embed = new Discord.RichEmbed().setTitle("Hinami's Invite Link").setDescription("Feel free to uncheck some permissions").addField("Link :-","https://discordapp.com/oauth2/authorize?&client_id=446320940280971284&scope=bot&permissions=339799126");
		 msg.channel.send({embed:embed});
		 }
	 if(cmd=='fd'){fd.push(msg.content.split(" ").splice(1).join(" "));
				     msg.channel.send("Thank you for your precious feedback")}
	 if(cmd=='rps'){
		let choice = ["rock","paper","scissors"];
		 let cs = 0
		 let ps = 0
		 msg.channel.send("Game Started! Choose :- rock(r), paper(p) or scissors(s)")
		let resp = new Discord.MessageCollector(msg.channel,m=>m.author.id==msg.author.id,{time:15000})
		resp.on('collect',msg=>{
		let cont = msg.content.toLowerCase();
		let ch = choice[Math.floor(Math.random()*choice.length)];	
		if(cont=='rock' || cont=='r'){if(ch=='paper'){msg.channel.send("My choice :- Paper \nYou lose! So sad...");cs+=1}
				 else if(ch=='scissors'){msg.channel.send("My choice :- Scissors\nYou won! Hurray!!");ps+=1}
				 else if(ch=='rock'){msg.channel.send("My choice :- Rock\nIt's a tie! Try once more")}
			 }
		else if(cont=='paper' || cont=='p'){if(ch=='paper'){msg.channel.send("My choice :- Paper \nIt's a tie! Try once more")}
				 else if(ch=='scissors'){msg.channel.send("My choice :- Scissors\nYou lose! So sad...");cs+=1}
				 else if(ch=='rock'){msg.channel.send("My choice :- Rock\nYou won!Hurray");ps+=1}
			 }
		else if(cont=='scissors' || cont=='s'){if(ch=='paper'){msg.channel.send("My choice :- Paper \nYou won! Hurray");ps+=1}
			 else if(ch=='scissors'){msg.channel.send("My choice :- Scissors\nIt's a tie! Try once more")}
			 else if(ch=='rock'){msg.channel.send("My choice :- Rock\nYou lose! So sad...");cs+=1}
			 }
		else{
			msg.channel.send("Not a valid response!")
		}
				
				});
		resp.on('end',(collected,reason)=>{
			msg.channel.send("Game Over\nScore :-\n"+`${msg.author.username} : `+ps+"  |  Hinami : "+cs);
		});	
	 }
     

 });
client.login(process.env.BOT_TOKEN); 
    
    
    
    
    
