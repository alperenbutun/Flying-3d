const _0x1d2945=_0x1c89;function _0x1c89(_0xdc5b4c,_0x420b1f){const _0x36d996=_0x36d9();return _0x1c89=function(_0x1c8935,_0x18f2ce){_0x1c8935=_0x1c8935-0xcb;let _0x659d47=_0x36d996[_0x1c8935];return _0x659d47;},_0x1c89(_0xdc5b4c,_0x420b1f);}(function(_0xe7711b,_0x57c5b7){const _0xc13384=_0x1c89,_0x313432=_0xe7711b();while(!![]){try{const _0x504782=parseInt(_0xc13384(0xd0))/0x1*(parseInt(_0xc13384(0xe7))/0x2)+parseInt(_0xc13384(0x124))/0x3*(parseInt(_0xc13384(0xf4))/0x4)+parseInt(_0xc13384(0xee))/0x5*(parseInt(_0xc13384(0x130))/0x6)+-parseInt(_0xc13384(0x133))/0x7+-parseInt(_0xc13384(0x116))/0x8*(-parseInt(_0xc13384(0x11c))/0x9)+parseInt(_0xc13384(0xfa))/0xa*(parseInt(_0xc13384(0x11d))/0xb)+-parseInt(_0xc13384(0x138))/0xc;if(_0x504782===_0x57c5b7)break;else _0x313432['push'](_0x313432['shift']());}catch(_0x5c190b){_0x313432['push'](_0x313432['shift']());}}}(_0x36d9,0xbc7f4));import*as _0x2965c4 from'three';import{GLTFLoader}from'https://rawcdn.githack.com/mrdoob/three.js/master/examples/jsm/loaders/GLTFLoader.js';let flightModel='',hitTextTimeout='',flightList=[],countdown=0xb4,continueGame=!![],scene=new _0x2965c4[(_0x1d2945(0x10c))](),DirectionalLight=new _0x2965c4[(_0x1d2945(0xec))](0xffffff,0x8);scene['background']=new _0x2965c4['CubeTextureLoader']()[_0x1d2945(0x128)](_0x1d2945(0x118))[_0x1d2945(0xf9)]([_0x1d2945(0x12d),'left.jpeg',_0x1d2945(0x132),_0x1d2945(0xf5),_0x1d2945(0xfc),_0x1d2945(0x136)]),scene['add'](DirectionalLight);let camera=new _0x2965c4[(_0x1d2945(0xd2))](0x32,window[_0x1d2945(0x131)]/window[_0x1d2945(0xf6)],0.1,0x2710),canvas=document[_0x1d2945(0x127)](_0x1d2945(0xcf)),ctx=canvas[_0x1d2945(0xd8)]('2d');const renderer=new _0x2965c4[(_0x1d2945(0xce))]();renderer[_0x1d2945(0x106)]=_0x2965c4[_0x1d2945(0xdb)],renderer[_0x1d2945(0x107)](window[_0x1d2945(0x131)],window[_0x1d2945(0xf6)]),window[_0x1d2945(0xd1)](_0x1d2945(0xfb),onWindowResize);function _0x36d9(){const _0x4dfada=['getElementById','setPath','keydown','translateY','beginPath','block','right.jpeg','PlaneGeometry','700','1467138TRyTkt','innerWidth','top.jpeg','8636453FwvCwl','wrapT','loaded','back.jpeg','\x20>\x20','17628792fdrGdp','canvas#map','keyup','fill','WebGLRenderer','map','1fRucnI','addEventListener','PerspectiveCamera','https://rawcdn.githack.com/alperenbutun/free-time-project/f881038/texture/texture.jpg','sort','mousedown','rotation','none','getContext','stroke','contextmenu','sRGBEncoding','</span></div>','arc','add','querySelector','clientX','scene','autopilot','div#game','style','material','https://rawcdn.githack.com/alperenbutun/free-time-project/master/gltf/f35.glb','1795700sbZNIN','<div\x20style=\x22position:relative;float:left;width:100%;height:32px;\x22><span\x20style=\x22position:relative;float:left;left:11px;top:5px;font-weight:','color','%\x20loaded\x20(','normal','DirectionalLight','average','15bXMesO','traverse','#table-head','gothit','keyCode','floor','4OYeWLN','bottom.jpeg','innerHeight','span#percentage','red','load','40WdePDC','resize','front.jpeg','set','RepeatWrapping','round','SRGBColorSpace','black','name','flight','colorSpace','span#loading','outputEncoding','setSize','clearRect','Mesh','rotate','target','Scene','hit','position','clientWidth','which','startTheGame','abs','random','#table','preventDefault','3272fPddTp','appendChild','texture/cubemap/','ceil','div#bullet','div#tab-text','4266ftUXHi','3602665QlPCdA','wrapS','mouseup','</span><span\x20style=\x22position:relative;float:right;right:11px;top:5px;\x22>','TextureLoader','innerHTML','display','1018752YovCRY','total','length'];_0x36d9=function(){return _0x4dfada;};return _0x36d9();}function onWindowResize(){const _0x110bcd=_0x1d2945;renderer[_0x110bcd(0x107)](window[_0x110bcd(0x131)],window[_0x110bcd(0xf6)]);}function printCountDown(){const _0x197be8=_0x1d2945;if(!continueGame)return;if(Math[_0x197be8(0xf3)](countdown)==countdown){let _0x46b59b=Math['floor'](countdown/0x3c),_0x59520d=countdown-Math[_0x197be8(0xf3)](countdown/0x3c)*0x3c;document['querySelector']('span#countdown')['innerHTML']=_0x46b59b+':'+(_0x59520d<0xa?'0'+_0x59520d:_0x59520d);if(countdown==0x0){continueGame=![],document['querySelector'](_0x197be8(0x114))[_0x197be8(0xe4)]['display']='block',document['querySelector'](_0x197be8(0xf0))['style']['display']=_0x197be8(0x12c),document[_0x197be8(0xdf)](_0x197be8(0x11b))[_0x197be8(0xe4)][_0x197be8(0x123)]=_0x197be8(0xd7);return;}}}const gt=new _0x2965c4[(_0x1d2945(0x121))]()[_0x1d2945(0xf9)](_0x1d2945(0xd3)),gg=new _0x2965c4[(_0x1d2945(0x12e))](0x249f0,0x249f0),gm=new _0x2965c4['MeshPhongMaterial']({'color':0xffffff,'map':gt,'transparent':!![],'opacity':0.025}),ground=new _0x2965c4[(_0x1d2945(0x109))](gg,gm);ground[_0x1d2945(0xd6)]['x']=-Math['PI']/0x2,ground[_0x1d2945(0xe5)][_0x1d2945(0xcf)]['repeat'][_0x1d2945(0xfd)](0x40,0x40),ground['material'][_0x1d2945(0xcf)][_0x1d2945(0x11e)]=_0x2965c4[_0x1d2945(0xfe)],ground[_0x1d2945(0xe5)][_0x1d2945(0xcf)][_0x1d2945(0x134)]=_0x2965c4[_0x1d2945(0xfe)],ground[_0x1d2945(0xe5)][_0x1d2945(0xcf)][_0x1d2945(0x104)]=_0x2965c4[_0x1d2945(0x100)],scene[_0x1d2945(0xde)](ground),new GLTFLoader()[_0x1d2945(0xf9)](_0x1d2945(0xe6),function(_0x37d90a){const _0xa0a56=_0x1d2945;flightModel=_0x37d90a[_0xa0a56(0xe1)],flightModel[_0xa0a56(0xef)](_0x5cbd18=>{const _0x3ab3c4=_0xa0a56;_0x5cbd18[_0x3ab3c4(0xe5)]&&(_0x5cbd18[_0x3ab3c4(0xe5)][_0x3ab3c4(0xe9)]['r']=0x0,_0x5cbd18['material'][_0x3ab3c4(0xe9)]['g']=0x0,_0x5cbd18[_0x3ab3c4(0xe5)]['color']['b']=0x0);});for(let _0x1ea9f7=0x0;_0x1ea9f7<0xa;_0x1ea9f7++){flightList[flightList['length']]={'name':_0xa0a56(0x103)+_0x1ea9f7,'rotate':'|','autopilot':![],'bullet':0x0,'hit':0x0,'gothit':0x0,'average':0x0};let _0x3b268b=flightModel['clone']();_0x3b268b[_0xa0a56(0x102)]=_0xa0a56(0x103)+_0x1ea9f7,_0x3b268b['position'][_0xa0a56(0xfd)](Math[_0xa0a56(0xff)](Math['random']()*0x1388)-0x9c4,3.5,Math[_0xa0a56(0xff)](Math[_0xa0a56(0x113)]()*0x1388)-0x9c4),_0x3b268b[_0xa0a56(0xd6)]['y']=Math[_0xa0a56(0x113)]()*Math['PI']*0x2,scene[_0xa0a56(0xde)](_0x3b268b);}document[_0xa0a56(0xdf)]('#fullscreen-button')[_0xa0a56(0xe4)]['display']=_0xa0a56(0x12c);},function(_0x564d76){const _0x41b610=_0x1d2945;let _0x214770=Math[_0x41b610(0x119)](_0x564d76[_0x41b610(0x135)]/_0x564d76[_0x41b610(0x125)]*0x64);document[_0x41b610(0xdf)](_0x41b610(0xf7))['innerHTML']='\x20'+_0x214770+_0x41b610(0xea)+Math[_0x41b610(0x119)](0x20*_0x214770/0x64)+'MB\x20of\x2032MB)';}),window[_0x1d2945(0x111)]=function(){const _0x3177fa=_0x1d2945;document[_0x3177fa(0xdf)]('#fullscreen-button')[_0x3177fa(0xe4)][_0x3177fa(0x123)]=_0x3177fa(0xd7),setTimeout(function(){const _0x4dbea0=_0x3177fa;document['body'][_0x4dbea0(0x117)](renderer['domElement']),document[_0x4dbea0(0xdf)](_0x4dbea0(0x105))['style'][_0x4dbea0(0x123)]='none',document[_0x4dbea0(0xdf)](_0x4dbea0(0xcb))['style'][_0x4dbea0(0x123)]=_0x4dbea0(0x12c),document[_0x4dbea0(0xdf)](_0x4dbea0(0x11a))['style'][_0x4dbea0(0x123)]='block',document[_0x4dbea0(0xdf)](_0x4dbea0(0xe3))[_0x4dbea0(0xe4)]['display']='block',document[_0x4dbea0(0xdf)](_0x4dbea0(0x11b))[_0x4dbea0(0xe4)]['display']=_0x4dbea0(0x12c),animate();},0x1f4),document['addEventListener'](_0x3177fa(0xd5),function(_0x9b6360){const _0x35e706=_0x3177fa;if(!continueGame)return;switch(_0x9b6360[_0x35e706(0x110)]){case 0x1:if(!flightList[0x0][_0x35e706(0xe2)]){if(_0x9b6360['clientX']<_0x9b6360[_0x35e706(0x10b)][_0x35e706(0x10f)]*0.5)_0x9b6360[_0x35e706(0xe0)]-_0x9b6360[_0x35e706(0x10b)]['clientWidth']*0.5>-0x7b?flightList[0x0][_0x35e706(0x10a)]='<<':flightList[0x0][_0x35e706(0x10a)]='<';else _0x9b6360[_0x35e706(0xe0)]-_0x9b6360[_0x35e706(0x10b)][_0x35e706(0x10f)]*0.5<0x7b?flightList[0x0][_0x35e706(0x10a)]='>>':flightList[0x0][_0x35e706(0x10a)]='>';}break;case 0x2:break;case 0x3:break;}}),document['addEventListener'](_0x3177fa(0x11f),function(_0x20964c){const _0x22915b=_0x3177fa;if(!continueGame)return;switch(_0x20964c[_0x22915b(0x110)]){case 0x1:!flightList[0x0]['autopilot']&&(flightList[0x0][_0x22915b(0x10a)]='|');break;case 0x2:break;case 0x3:break;}}),document[_0x3177fa(0xd1)](_0x3177fa(0xda),function(_0x553a9e){const _0x24e832=_0x3177fa;_0x553a9e[_0x24e832(0x115)]();}),document[_0x3177fa(0xd1)](_0x3177fa(0x129),function(_0x10c4f0){const _0x504938=_0x3177fa;if(!continueGame)return;switch(_0x10c4f0[_0x504938(0xf2)]){case 0x9:_0x10c4f0['preventDefault'](),document[_0x504938(0xdf)](_0x504938(0x114))[_0x504938(0xe4)][_0x504938(0x123)]=_0x504938(0x12c),document['querySelector']('#table-head')[_0x504938(0xe4)][_0x504938(0x123)]=_0x504938(0x12c),document[_0x504938(0xdf)](_0x504938(0x11b))[_0x504938(0xe4)][_0x504938(0x123)]=_0x504938(0xd7);break;}}),document['addEventListener'](_0x3177fa(0xcc),function(_0x3242be){const _0x55e29c=_0x3177fa;if(!continueGame)return;switch(_0x3242be[_0x55e29c(0xf2)]){case 0x9:_0x3242be[_0x55e29c(0x115)](),document[_0x55e29c(0xdf)](_0x55e29c(0x114))[_0x55e29c(0xe4)][_0x55e29c(0x123)]='none',document[_0x55e29c(0xdf)]('#table-head')['style'][_0x55e29c(0x123)]=_0x55e29c(0xd7),document[_0x55e29c(0xdf)](_0x55e29c(0x11b))[_0x55e29c(0xe4)]['display']='block';break;}}),setInterval(function(){const _0x505950=_0x3177fa;if(!continueGame)return;let _0x29e210=[];ctx[_0x505950(0x108)](0x0,0x0,0x7d,0x7d);for(let _0xeb37a7=0x0;_0xeb37a7<flightList[_0x505950(0x126)];_0xeb37a7++){let _0x1c5b6a=scene['getObjectByName'](flightList[_0xeb37a7]['name']),_0x4eee0d=[Math[_0x505950(0xf3)](_0x1c5b6a[_0x505950(0x10e)]['x']/0x50)+62.5,Math[_0x505950(0xf3)](_0x1c5b6a[_0x505950(0x10e)]['z']/0x50)+62.5];ctx['fillStyle']=_0xeb37a7==0x0?_0x505950(0xf8):_0x505950(0x101),ctx['strokeStyle']=_0xeb37a7==0x0?_0x505950(0xf8):'black',ctx[_0x505950(0x12b)](),ctx[_0x505950(0xdd)](_0x4eee0d[0x0],_0x4eee0d[0x1],0x3,0x0,0x2*Math['PI']),ctx[_0x505950(0xcd)](),ctx[_0x505950(0xd9)](),flightList[_0xeb37a7][_0x505950(0xed)]=flightList[_0xeb37a7][_0x505950(0x10d)]-flightList[_0xeb37a7][_0x505950(0xf1)],_0x29e210[_0x29e210[_0x505950(0x126)]]=flightList[_0xeb37a7];}_0x29e210[_0x505950(0xd4)](function(_0x5da51f,_0x1ed550){const _0xa7b0dc=_0x505950;return _0x1ed550['average']-_0x5da51f[_0xa7b0dc(0xed)];}),document['querySelector'](_0x505950(0x114))[_0x505950(0x122)]='';for(let _0x4ab7f4=0x0;_0x4ab7f4<_0x29e210[_0x505950(0x126)];_0x4ab7f4++){let _0x50af84=_0x4ab7f4==0x0?_0x505950(0x12f):_0x505950(0xeb);document[_0x505950(0xdf)](_0x505950(0x114))[_0x505950(0x122)]+=_0x505950(0xe8)+_0x50af84+'\x22>'+_0x29e210[_0x4ab7f4][_0x505950(0x102)]+_0x505950(0x120)+_0x29e210[_0x4ab7f4][_0x505950(0x10d)]+'/'+_0x29e210[_0x4ab7f4][_0x505950(0xf1)]+_0x505950(0x137)+_0x29e210[_0x4ab7f4][_0x505950(0xed)]+_0x505950(0xdc);}countdown>0x0&&(countdown-=0.5,printCountDown());},0x1f4);};function animate(){const _0x229891=_0x1d2945;requestAnimationFrame(animate);if(!continueGame)return;for(let _0x5f0a69=0x0;_0x5f0a69<flightList[_0x229891(0x126)];_0x5f0a69++){let _0x2f0ad3=scene['getObjectByName'](flightList[_0x5f0a69][_0x229891(0x102)]);if(flightList[_0x5f0a69]['rotate']==='<')_0x2f0ad3['rotation']['z']-=Math['PI']/0x24,_0x2f0ad3[_0x229891(0xd6)]['z']<=-Math['PI']/2.6&&(_0x2f0ad3['rotation']['z']=-Math['PI']/2.6,_0x2f0ad3[_0x229891(0xd6)]['y']+=Math['PI']/0x10e);else{if(flightList[_0x5f0a69][_0x229891(0x10a)]==='>')_0x2f0ad3[_0x229891(0xd6)]['z']+=Math['PI']/0x24,_0x2f0ad3[_0x229891(0xd6)]['z']>=Math['PI']/2.6&&(_0x2f0ad3[_0x229891(0xd6)]['z']=Math['PI']/2.6,_0x2f0ad3[_0x229891(0xd6)]['y']-=Math['PI']/0x10e);else{if(flightList[_0x5f0a69][_0x229891(0x10a)]==='<<'&&_0x2f0ad3[_0x229891(0xd6)]['z']==0x0)_0x2f0ad3[_0x229891(0xd6)]['y']+=Math['PI']/0x438;else{if(flightList[_0x5f0a69][_0x229891(0x10a)]==='>>'&&_0x2f0ad3[_0x229891(0xd6)]['z']==0x0)_0x2f0ad3[_0x229891(0xd6)]['y']-=Math['PI']/0x438;else{if(Math[_0x229891(0x112)](_0x2f0ad3['rotation']['z'])<Math['PI']/0x24)_0x2f0ad3[_0x229891(0xd6)]['z']=0x0;else{if(_0x2f0ad3[_0x229891(0xd6)]['z']>0x0)_0x2f0ad3[_0x229891(0xd6)]['z']-=Math['PI']/0x24;else _0x2f0ad3[_0x229891(0xd6)]['z']<0x0&&(_0x2f0ad3[_0x229891(0xd6)]['z']+=Math['PI']/0x24);}}}}}let _0x739b28=-_0x2f0ad3[_0x229891(0xd6)]['y']*(0xb4/Math['PI'])%0x168;_0x739b28=_0x739b28<0x0?0x168+_0x739b28:_0x739b28;if(_0x2f0ad3[_0x229891(0x10e)]['z']>=0x1388)flightList[_0x5f0a69][_0x229891(0xe2)]==![]&&(flightList[_0x5f0a69]['autopilot']=!![],_0x739b28>=0x0&&_0x739b28<=0x5a?flightList[_0x5f0a69][_0x229891(0x10a)]='>':flightList[_0x5f0a69][_0x229891(0x10a)]='<');else{if(_0x2f0ad3[_0x229891(0x10e)]['z']<=-0x1388)flightList[_0x5f0a69][_0x229891(0xe2)]==![]&&(flightList[_0x5f0a69][_0x229891(0xe2)]=!![],_0x739b28>=0xb4&&_0x739b28<=0x10e?flightList[_0x5f0a69][_0x229891(0x10a)]='>':flightList[_0x5f0a69][_0x229891(0x10a)]='<');else{if(_0x2f0ad3[_0x229891(0x10e)]['x']>=0x1388)flightList[_0x5f0a69]['autopilot']==![]&&(flightList[_0x5f0a69][_0x229891(0xe2)]=!![],_0x739b28>=0x10e&&_0x739b28<=0x168?flightList[_0x5f0a69][_0x229891(0x10a)]='>':flightList[_0x5f0a69]['rotate']='<');else{if(_0x2f0ad3['position']['x']<=-0x1388)flightList[_0x5f0a69][_0x229891(0xe2)]==![]&&(flightList[_0x5f0a69][_0x229891(0xe2)]=!![],_0x739b28>=0x5a&&_0x739b28<=0xb4?flightList[_0x5f0a69][_0x229891(0x10a)]='>':flightList[_0x5f0a69][_0x229891(0x10a)]='<');else flightList[_0x5f0a69][_0x229891(0xe2)]==!![]&&(flightList[_0x5f0a69][_0x229891(0x10a)]='|',flightList[_0x5f0a69][_0x229891(0xe2)]=![]);}}}_0x2f0ad3['translateZ'](0x5),_0x5f0a69==0x0&&(camera['position'][_0x229891(0xfd)](_0x2f0ad3[_0x229891(0x10e)]['x'],_0x2f0ad3[_0x229891(0x10e)]['y'],_0x2f0ad3['position']['z']),camera[_0x229891(0xd6)]['y']=_0x2f0ad3[_0x229891(0xd6)]['y']+Math['PI'],camera['translateZ'](0x18),camera[_0x229891(0x12a)](3.8));}renderer['render'](scene,camera);}