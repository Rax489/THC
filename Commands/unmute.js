var _0x9196=['members','get','first','channel','parse','./config.json','utf8','logs_channelID','toString','92f442','Unmuted\x20User','**User:**\x20',')\x0a**Time:**\x20','createdAt','format','MM/DD/YYYY\x20@\x20hh:mm:ss\x20a',':white_check_mark:\x20**','\x20has\x20been\x20unmuted\x20successfully!**','You\x20have\x20been\x20unmuted\x20in\x20__','Moderator:\x20','roles','Muted','send','removeRole','exports','discord.js','Client','mineflayer','moment','run','MANAGE_MESSAGES','RichEmbed','setColor','setTitle',':warning:\x20**MISSING\x20PERMS**','setDescription','You\x20don\x27t\x20have\x20permission\x20to\x20use\x20this\x20command.','**Permission\x20Needed:**\x20','setTimestamp','author','tag','avatarURL','member','hasPermission',':warning:\x20**INVALID\x20USER**','You\x20need\x20to\x20mention\x20a\x20user!\x20','**Correct\x20Syntax:**\x20','setFooter',':warning:\x20**ERROR**','I\x20can\x27t\x20unmute\x20this\x20user\x20as\x20they\x20are\x20not\x20muted.','find','name','guild','mentions','users'];(function(_0x2ab0e5,_0x1add2c){var _0x14df4f=function(_0x5d763f){while(--_0x5d763f){_0x2ab0e5['push'](_0x2ab0e5['shift']());}};_0x14df4f(++_0x1add2c);}(_0x9196,0x163));var _0x368a=function(_0x4a77b8,_0x2f38f1){_0x4a77b8=_0x4a77b8-0x0;var _0xaa5378=_0x9196[_0x4a77b8];return _0xaa5378;};const Discord=require(_0x368a('0x0'));const client=new Discord[(_0x368a('0x1'))]();const minebot=require(_0x368a('0x2'));const ms=require('ms');const math=require('mathjs');const fs=require('fs');const moment=require(_0x368a('0x3'));module['exports'][_0x368a('0x4')]=async(_0x44b568,_0x275926,_0x2c7363,_0x4c60d3,_0x246d70,_0x1d0d75)=>{let _0x5511cd=_0x368a('0x5');let _0x5c2fe7=new Discord[(_0x368a('0x6'))]()[_0x368a('0x7')](_0x1d0d75)[_0x368a('0x8')](_0x368a('0x9'))[_0x368a('0xa')](_0x368a('0xb')+'\x0a'+'\x20'+'\x0a'+_0x368a('0xc')+'`'+_0x5511cd+'`')[_0x368a('0xd')]()['setFooter'](_0x275926[_0x368a('0xe')][_0x368a('0xf')],_0x275926[_0x368a('0xe')][_0x368a('0x10')]);if(_0x275926[_0x368a('0x11')][_0x368a('0x12')](_0x5511cd)){let _0x39fd06=new Discord[(_0x368a('0x6'))]()[_0x368a('0x7')](_0x1d0d75)[_0x368a('0x8')](_0x368a('0x13'))[_0x368a('0xa')](_0x368a('0x14')+'\x0a'+'\x20'+'\x0a'+_0x368a('0x15')+'`'+(_0x4c60d3+'unmute\x20<user>')+'`')[_0x368a('0x16')](_0x275926['author'][_0x368a('0xf')],_0x275926[_0x368a('0xe')][_0x368a('0x10')]);let _0xfb636=new Discord[(_0x368a('0x6'))]()[_0x368a('0x7')](_0x1d0d75)['setTitle'](_0x368a('0x17'))['setDescription'](_0x368a('0x18'))[_0x368a('0x16')](_0x275926[_0x368a('0xe')][_0x368a('0xf')],_0x275926[_0x368a('0xe')][_0x368a('0x10')]);let _0x1054ed=_0x275926['guild']['roles'][_0x368a('0x19')](_0x43ac9c=>_0x43ac9c[_0x368a('0x1a')]==='Muted');let _0x7364a=_0x275926[_0x368a('0x1b')]['member'](_0x275926[_0x368a('0x1c')][_0x368a('0x1d')]['first']()||_0x275926[_0x368a('0x1b')][_0x368a('0x1e')][_0x368a('0x1f')](_0x2c7363[0x0]));let _0x2277ad=_0x275926['mentions'][_0x368a('0x1d')][_0x368a('0x20')]();if(!_0x7364a)return _0x275926[_0x368a('0x21')]['send'](_0x39fd06);let _0x245c4b=JSON[_0x368a('0x22')](fs['readFileSync'](_0x368a('0x23'),_0x368a('0x24')));let _0x9221dc=_0x275926[_0x368a('0x1b')]['channels'][_0x368a('0x19')](_0x203e23=>_0x203e23['id']===_0x245c4b[_0x275926['guild']['id']][_0x368a('0x25')][_0x368a('0x26')]());if(!_0x9221dc){_0x9221dc=_0x275926['channel'];}let _0x1fab7a=new Discord['RichEmbed']()[_0x368a('0x7')](_0x368a('0x27'))[_0x368a('0x8')](_0x368a('0x28'))[_0x368a('0xa')](_0x368a('0x29')+_0x7364a+'\x0a**Moderator:**\x20'+_0x275926[_0x368a('0xe')]+'\x20('+_0x275926[_0x368a('0xe')]['id']+_0x368a('0x2a')+moment(_0x275926[_0x368a('0x2b')])[_0x368a('0x2c')](_0x368a('0x2d')))[_0x368a('0x16')](_0x275926[_0x368a('0xe')][_0x368a('0xf')],_0x275926[_0x368a('0xe')][_0x368a('0x10')]);let _0x15a888=new Discord[(_0x368a('0x6'))]()[_0x368a('0x7')](_0x246d70)[_0x368a('0x8')](_0x368a('0x2e')+_0x2277ad[_0x368a('0xf')]+_0x368a('0x2f'));let _0x32c23a=new Discord[(_0x368a('0x6'))]()[_0x368a('0x7')](_0x246d70)[_0x368a('0x8')](_0x368a('0x30')+_0x275926[_0x368a('0x1b')][_0x368a('0x1a')]+'__')['setDescription'](_0x368a('0x31')+_0x275926['author'][_0x368a('0xf')]);if(!_0x275926['guild'][_0x368a('0x11')](_0x2277ad)[_0x368a('0x32')][_0x368a('0x19')](_0x3fee33=>_0x3fee33[_0x368a('0x1a')]===_0x368a('0x33'))){_0x275926[_0x368a('0x21')][_0x368a('0x34')](_0xfb636);}else{_0x9221dc[_0x368a('0x34')](_0x1fab7a);_0x275926[_0x368a('0x1b')][_0x368a('0x11')](_0x7364a)[_0x368a('0x35')](_0x1054ed['id']);_0x275926[_0x368a('0x21')]['send'](_0x15a888);_0x7364a[_0x368a('0x34')](_0x32c23a);}}else _0x275926['channel']['send'](_0x5c2fe7);};module[_0x368a('0x36')]['help']={'name':'unmute'};