const records = require('./records');

module.exports.on = function(msg) {
	var content = message.content.toLowerCase();
	if(content.startsWith('!')) {
		var args = content.split(' ');
		var cmd = content.substr(1, args[0].length - 1);
		if(cmd == 'config') {
			if(message.member.hasPermission('MANAGE_GUILD')) {
				
				if(args[1] == 'join') {
					var str_join = '';
					for (i = 2; i < args.length; i++) {
						str_join += args[i];
						if(i < args.length - 1) {
							str_join += ' ';
						}
					}
					records.put(message.member.guild.id, 'join', str_join);
					return;
				}
				if(args[1] == 'role') {
					records.put(message.member.guild.id, 'role', args[2]);
					return;
				}
				if(args[1] == 'channel') {
					records.put(message.member.guild.id, 'channel', args[2]);
					return;
				}
				//message.reply('No such command');
				return;
			}
			message.reply('No permission');
			return;
		}
	}
}
