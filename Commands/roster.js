var _0x1e16=[':warning:\x20**MISSING\x20PERMS**','setDescription','You\x20don\x27t\x20have\x20permission\x20to\x20use\x20this\x20command.','setTimestamp','setFooter','author','tag','avatarURL','roster','push','**\x20\x20','indexOf','.)**\x20','users','find','Faction\x20Roster\x20-\x20','length','\x20member(s)\x20in\x20roster','channel','send','then','member','hasPermission','writeFile',':boom:\x20Cleared\x20the\x20roster.','clear','guild',':warning:\x20Please\x20supply\x20this\x20guild\x20ID\x20(`','`)\x20as\x20the\x20last\x20argument\x20to\x20do\x20this.','You\x20need\x20to\x20mention\x20a\x20user!\x20',':warning:\x20**INVALID\x20ARGS**','You\x20are\x20missing\x20some\x20arguments.\x20','**Correct\x20Syntax:**\x20','roster\x20<add\x20/\x20remove\x20/\x20list>\x20<user>','mentions','first','members','get','add','remove','includes',':x:\x20This\x20user\x20is\x20already\x20in\x20the\x20roster!','\x20to\x20the\x20roster.',':x:\x20This\x20user\x20is\x20not\x20in\x20the\x20roster!','splice',':white_check_mark:\x20Removed\x20','\x20from\x20the\x20roster.','help','discord.js','Client','mineflayer','mathjs','parse','readFileSync','./roster.json','utf8','exports','run','ADMINISTRATOR','RichEmbed','setColor','setTitle'];(function(_0x524ebe,_0x373c26){var _0x657c2f=function(_0x5ec28e){while(--_0x5ec28e){_0x524ebe['push'](_0x524ebe['shift']());}};_0x657c2f(++_0x373c26);}(_0x1e16,0x1a4));var _0x4650=function(_0x417b49,_0x1e2800){_0x417b49=_0x417b49-0x0;var _0x45eeb1=_0x1e16[_0x417b49];return _0x45eeb1;};const Discord=require(_0x4650('0x0'));const client=new Discord[(_0x4650('0x1'))]();const minebot=require(_0x4650('0x2'));const ms=require('ms');const math=require(_0x4650('0x3'));const fs=require('fs');const roster=JSON[_0x4650('0x4')](fs[_0x4650('0x5')](_0x4650('0x6'),_0x4650('0x7')));module[_0x4650('0x8')][_0x4650('0x9')]=async(_0x5864e6,_0x5cb620,_0x406f1b,_0x50630c,_0x39c2dd,_0x3af95e)=>{let _0x4ab7c6=_0x4650('0xa');let _0x427dff=new Discord[(_0x4650('0xb'))]()[_0x4650('0xc')](_0x3af95e)[_0x4650('0xd')](_0x4650('0xe'))[_0x4650('0xf')](_0x4650('0x10')+'\x0a'+'\x20'+'\x0a'+'**Permission\x20Needed:**\x20'+'`'+_0x4ab7c6+'`')[_0x4650('0x11')]()[_0x4650('0x12')](_0x5cb620[_0x4650('0x13')][_0x4650('0x14')],_0x5cb620['author'][_0x4650('0x15')]);function _0x25b509(){let _0x4031c6=[];roster[_0x4650('0x16')]['forEach'](function(_0x20466e){_0x4031c6[_0x4650('0x17')](_0x4650('0x18')+(roster[_0x4650('0x16')][_0x4650('0x19')](_0x20466e)+0x1)+_0x4650('0x1a')+_0x5864e6[_0x4650('0x1b')][_0x4650('0x1c')](_0x102069=>_0x102069['id']==_0x20466e));});let _0x1ba37f=new Discord[(_0x4650('0xb'))]()[_0x4650('0xc')](_0x39c2dd)['setTitle'](_0x4650('0x1d')+_0x4031c6[_0x4650('0x1e')]+_0x4650('0x1f'))[_0x4650('0xf')](_0x4031c6)[_0x4650('0x12')](''+_0x5cb620[_0x4650('0x13')][_0x4650('0x14')],_0x5cb620[_0x4650('0x13')][_0x4650('0x15')]);_0x5cb620[_0x4650('0x20')][_0x4650('0x21')](_0x1ba37f)[_0x4650('0x22')](_0x4031c6=[]);}if(_0x406f1b[0x0]=='list')return _0x25b509();if(_0x5cb620[_0x4650('0x23')][_0x4650('0x24')](_0x4ab7c6)){fs[_0x4650('0x25')](_0x4650('0x6'),JSON['stringify'](roster),_0x48c191=>{if(_0x48c191)console['log'](_0x48c191);});function _0xc64de0(){roster[_0x4650('0x16')]=[];_0x5cb620[_0x4650('0x20')][_0x4650('0x21')](new Discord[(_0x4650('0xb'))]()[_0x4650('0xc')](_0x39c2dd)[_0x4650('0xf')](_0x4650('0x26')));}if(_0x406f1b[0x0]==_0x4650('0x27')&&_0x406f1b[0x1]!==_0x5cb620[_0x4650('0x28')]['id'])return _0x5cb620[_0x4650('0x20')][_0x4650('0x21')](new Discord[(_0x4650('0xb'))]()['setColor'](_0x3af95e)['setDescription'](_0x4650('0x29')+_0x5cb620[_0x4650('0x28')]['id']+_0x4650('0x2a')));if(_0x406f1b[0x0]==_0x4650('0x27')&&_0x406f1b[0x1]==_0x5cb620[_0x4650('0x28')]['id'])return _0xc64de0();let _0x255f72=new Discord[(_0x4650('0xb'))]()[_0x4650('0xc')](_0x3af95e)[_0x4650('0xd')](':warning:\x20**INVALID\x20USER**')[_0x4650('0xf')](_0x4650('0x2b')+'\x0a'+'\x20'+'\x0a'+'**Correct\x20Syntax:**\x20'+'`'+(_0x50630c+'roster\x20<add\x20/\x20remove\x20/\x20list>\x20<user>')+'`')[_0x4650('0x12')](_0x5cb620['author'][_0x4650('0x14')],_0x5cb620['author'][_0x4650('0x15')]);let _0x48cdbf=new Discord[(_0x4650('0xb'))]()['setColor'](_0x3af95e)['setTitle'](_0x4650('0x2c'))[_0x4650('0xf')](_0x4650('0x2d')+'\x0a'+'\x20'+'\x0a'+_0x4650('0x2e')+'`'+(_0x50630c+_0x4650('0x2f'))+'`')[_0x4650('0x12')](_0x5cb620[_0x4650('0x13')][_0x4650('0x14')],_0x5cb620[_0x4650('0x13')][_0x4650('0x15')]);let _0x32b442=_0x5cb620[_0x4650('0x28')][_0x4650('0x23')](_0x5cb620[_0x4650('0x30')][_0x4650('0x1b')][_0x4650('0x31')]()||_0x5cb620[_0x4650('0x28')][_0x4650('0x32')][_0x4650('0x33')](_0x406f1b[0x0]));let _0xbe03fa=_0x5cb620[_0x4650('0x30')][_0x4650('0x1b')][_0x4650('0x31')]();if(!_0x32b442)return _0x5cb620['channel']['send'](_0x255f72);if(_0x406f1b[0x0]==_0x4650('0x34')||_0x406f1b[0x0]==_0x4650('0x35')){if(_0x406f1b[0x0]==_0x4650('0x34')){setTimeout(function(){if(roster[_0x4650('0x16')][_0x4650('0x36')](_0xbe03fa['id']))return _0x5cb620[_0x4650('0x20')][_0x4650('0x21')](new Discord[(_0x4650('0xb'))]()[_0x4650('0xc')](_0x3af95e)[_0x4650('0xf')](_0x4650('0x37')));roster[_0x4650('0x16')][_0x4650('0x17')](_0xbe03fa['id']);_0x5cb620[_0x4650('0x20')][_0x4650('0x21')](new Discord[(_0x4650('0xb'))]()[_0x4650('0xc')](_0x39c2dd)[_0x4650('0xf')](':white_check_mark:\x20Added\x20'+_0x32b442+_0x4650('0x38')));},0x1f4);}if(_0x406f1b[0x0]==_0x4650('0x35')){setTimeout(function(){if(!roster[_0x4650('0x16')]['includes'](_0xbe03fa['id']))return _0x5cb620[_0x4650('0x20')]['send'](new Discord[(_0x4650('0xb'))]()[_0x4650('0xc')](_0x3af95e)[_0x4650('0xf')](_0x4650('0x39')));let _0x5d9c32=roster[_0x4650('0x16')][_0x4650('0x19')](_0xbe03fa['id']);roster[_0x4650('0x16')][_0x4650('0x3a')](_0x5d9c32,0x1);_0x5cb620[_0x4650('0x20')][_0x4650('0x21')](new Discord[(_0x4650('0xb'))]()[_0x4650('0xc')](_0x39c2dd)['setDescription'](_0x4650('0x3b')+_0x32b442+_0x4650('0x3c')));},0x1f4);}}else return _0x5cb620[_0x4650('0x20')][_0x4650('0x21')](_0x48cdbf);}else return _0x5cb620[_0x4650('0x20')][_0x4650('0x21')](_0x427dff);};module[_0x4650('0x8')][_0x4650('0x3d')]={'name':_0x4650('0x16')};