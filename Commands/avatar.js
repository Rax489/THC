var _0x330f=['Client','mineflayer','exports','RichEmbed','setColor','setDescription','Please\x20try\x20again\x20by\x20tagging\x20a\x20user\x20in\x20this\x20Discord\x20server.\x0a\x20\x0a**Correct\x20Format:','avatar\x20<user>**','setFooter','author','mentions','first','channel','send','**Avatar\x20of\x20','\x0a**Tag:**\x20','tag','setImage','avatarURL','avatar','discord.js'];(function(_0x386111,_0x22e9f1){var _0x78a5b5=function(_0x20155e){while(--_0x20155e){_0x386111['push'](_0x386111['shift']());}};_0x78a5b5(++_0x22e9f1);}(_0x330f,0xfb));var _0x32f2=function(_0x4df95f,_0x3c85bd){_0x4df95f=_0x4df95f-0x0;var _0x52d3d3=_0x330f[_0x4df95f];return _0x52d3d3;};const Discord=require(_0x32f2('0x0'));const client=new Discord[(_0x32f2('0x1'))]();const minebot=require(_0x32f2('0x2'));const ms=require('ms');const math=require('mathjs');const fs=require('fs');module[_0x32f2('0x3')]['run']=async(_0x1430fd,_0x16de7a,_0x4231bc,_0x46b4e2,_0x514e57,_0x12e7c1)=>{let _0x1436c4=new Discord[(_0x32f2('0x4'))]()[_0x32f2('0x5')](_0x12e7c1)['setTitle'](':warning:\x20**INVALID\x20USER**')[_0x32f2('0x6')](_0x32f2('0x7')+'`'+(_0x46b4e2+_0x32f2('0x8'))+'`')[_0x32f2('0x9')](_0x16de7a[_0x32f2('0xa')]['tag'],_0x16de7a[_0x32f2('0xa')]['avatarURL']);let _0x14c3d0=_0x16de7a[_0x32f2('0xb')]['users'][_0x32f2('0xc')]()||_0x16de7a[_0x32f2('0xa')];if(!_0x14c3d0)return _0x16de7a[_0x32f2('0xd')][_0x32f2('0xe')](_0x1436c4);let _0x5bd3d5=new Discord['RichEmbed']()[_0x32f2('0x5')](_0x514e57)['setDescription'](_0x32f2('0xf')+_0x14c3d0+'**\x0a**ID:**\x20'+_0x14c3d0['id']+_0x32f2('0x10')+_0x14c3d0[_0x32f2('0x11')]+'\x0a')[_0x32f2('0x12')](''+_0x14c3d0[_0x32f2('0x13')])[_0x32f2('0x9')](''+_0x16de7a[_0x32f2('0xa')][_0x32f2('0x11')],_0x16de7a[_0x32f2('0xa')][_0x32f2('0x13')]);_0x16de7a[_0x32f2('0xd')][_0x32f2('0xe')](_0x5bd3d5);};module[_0x32f2('0x3')]['help']={'name':_0x32f2('0x14'),'alias':'av'};