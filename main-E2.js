const _0x560ad3=_0x1e9c;(function(_0x575ce4,_0x33e952){const _0x583590=_0x1e9c,_0xc2aec9=_0x575ce4();while(!![]){try{const _0x457ec8=-parseInt(_0x583590(0x1d0))/0x1*(parseInt(_0x583590(0x1e1))/0x2)+parseInt(_0x583590(0x201))/0x3+-parseInt(_0x583590(0x1dc))/0x4*(-parseInt(_0x583590(0x1f7))/0x5)+parseInt(_0x583590(0x1f2))/0x6+-parseInt(_0x583590(0x1f6))/0x7*(-parseInt(_0x583590(0x1bc))/0x8)+parseInt(_0x583590(0x1c6))/0x9*(parseInt(_0x583590(0x1e2))/0xa)+parseInt(_0x583590(0x1ea))/0xb*(-parseInt(_0x583590(0x1f9))/0xc);if(_0x457ec8===_0x33e952)break;else _0xc2aec9['push'](_0xc2aec9['shift']());}catch(_0x2df0b8){_0xc2aec9['push'](_0xc2aec9['shift']());}}}(_0x4310,0x2b32a));let screen_width=window[_0x560ad3(0x1da)],screen_height=window['innerHeight'],canvas_width,canvas_height,paused=![],mobile;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[_0x560ad3(0x1cd)](navigator['userAgent'])?mobile=!![]:mobile=![];let graph_canvas=document['getElementById'](_0x560ad3(0x1fa)),graph_context=graph_canvas['getContext']('2d'),angles_display=document[_0x560ad3(0x1bb)](_0x560ad3(0x1c0)),freq_display=document['getElementById'](_0x560ad3(0x206)),scale_display=document[_0x560ad3(0x1bb)](_0x560ad3(0x1e8)),pause_button=document[_0x560ad3(0x1bb)](_0x560ad3(0x1d7)),table=document[_0x560ad3(0x1bb)](_0x560ad3(0x1c5)),dist_input=document['getElementById'](_0x560ad3(0x1c7)),dist_angle_input=document[_0x560ad3(0x1bb)](_0x560ad3(0x1c2)),vel_input=document[_0x560ad3(0x1bb)](_0x560ad3(0x202)),vel_angle_input=document[_0x560ad3(0x1bb)](_0x560ad3(0x1cf)),simul_start_time_input=document[_0x560ad3(0x1bb)](_0x560ad3(0x1fb)),simul_end_time_input=document[_0x560ad3(0x1bb)]('simul-end-time-input'),time_step_input=document[_0x560ad3(0x1bb)](_0x560ad3(0x1c4));window[_0x560ad3(0x1df)]=function(){defaultParams();};function _0x1e9c(_0x841eb8,_0x205003){const _0x4310ba=_0x4310();return _0x1e9c=function(_0x1e9c2c,_0x111285){_0x1e9c2c=_0x1e9c2c-0x1bb;let _0x1a537e=_0x4310ba[_0x1e9c2c];return _0x1a537e;},_0x1e9c(_0x841eb8,_0x205003);}function defaultParams(){const _0xd288ae=_0x560ad3;dist_input[_0xd288ae(0x1d4)]=0x0,dist_angle_input[_0xd288ae(0x1d4)]=0x0,vel_input['value']=0x0,vel_angle_input[_0xd288ae(0x1d4)]=0x0,simul_start_time_input[_0xd288ae(0x1d4)]=0x0,simul_end_time_input[_0xd288ae(0x1d4)]=0x19,time_step_input['value']=0.02,initParams();}class Detector{constructor(_0x4095f4,_0x5492ac,_0x28ec86,_0x204421,_0x280243,_0x17c33f){this['vx']=_0x204421,this['vy']=_0x280243,this['vz']=_0x17c33f,this['x']=_0x4095f4,this['y']=_0x5492ac,this['z']=_0x28ec86;}['position'](_0x2b1cec){return[this['x']+this['vx']*_0x2b1cec,this['y']+this['vy']*_0x2b1cec,this['z']+this['vz']*_0x2b1cec];}['velocity'](_0xbb1ac9){return[this['vx'],this['vy'],this['vz']];}[_0x560ad3(0x1d9)](_0x24b785){const _0x145966=_0x560ad3;context['fillStyle']=_0x145966(0x1e7),context['beginPath'](),context['arc'](canvas_width/0x2+scale*this[_0x145966(0x1c1)](_0x24b785)[0x0],canvas_height/0x2-this[_0x145966(0x1c1)](_0x24b785)[0x1],detector_radius,0x0,0x2*Math['PI']),context[_0x145966(0x1ef)]();}}function drawGraph(){const _0x1da9ca=_0x560ad3;graph=new Chart(graph_context,{'type':_0x1da9ca(0x1eb),'data':{'labels':timestamps,'datasets':[{'label':'Frequency\x20(Hz)','data':signals,'backgroundColor':[_0x1da9ca(0x1ed)],'borderColor':[_0x1da9ca(0x1ed)],'spanGaps':![],'showLine':!![],'color':[_0x1da9ca(0x1ed)]}]},'options':{'scales':{'x':{'title':{'display':!![],'text':'Time\x20(s)','font':{'family':_0x1da9ca(0x205),'size':0x14},'color':_0x1da9ca(0x1de)},'ticks':{'color':'white'},'grid':{'color':_0x1da9ca(0x1cb),'borderColor':_0x1da9ca(0x1de)}},'y':{'title':{'display':!![],'text':'Frequency\x20(Hz)','font':{'family':'calibri','size':0x14},'color':_0x1da9ca(0x1de)},'ticks':{'color':_0x1da9ca(0x1de)},'grid':{'color':_0x1da9ca(0x1cb),'borderColor':'white'}}},'plugins':{'tooltip':{'callbacks':{'label':function(_0x4d5f08){const _0x2449fd=_0x1da9ca;return _0x2449fd(0x1c3)+Math[_0x2449fd(0x1e6)](_0x4d5f08[_0x2449fd(0x1e5)]['x']*0x3e8)/0x3e8+'\x20Frequency\x20(Hz):\x20'+_0x4d5f08[_0x2449fd(0x1e5)]['y']['toFixed'](0x2);}}},'legend':{'labels':{'color':_0x1da9ca(0x1de),'font':{'family':_0x1da9ca(0x205),'size':0xf}}}},'cubicInterpolationMode':_0x1da9ca(0x1fd),'pointRadius':0.5,'pointHoverRadius':0x3,'borderWidth':0x1,'normalized':!![],'animation':![]}}),graph_context[_0x1da9ca(0x1f8)]=_0x1da9ca(0x1e6),graph_context[_0x1da9ca(0x200)]=_0x1da9ca(0x1e6);}class LinAlg{static[_0x560ad3(0x1f3)](_0x135b69){const _0x2b1a90=_0x560ad3;let _0x64650f=0x0;for(let _0x3643f7=0x0;_0x3643f7<_0x135b69[_0x2b1a90(0x1ce)];_0x3643f7++)_0x64650f+=_0x135b69[_0x3643f7]*_0x135b69[_0x3643f7];return Math[_0x2b1a90(0x1c8)](_0x64650f);}static[_0x560ad3(0x1f4)](_0x16039f,_0x244e32){const _0x403993=_0x560ad3;if(_0x16039f['length']!=_0x244e32[_0x403993(0x1ce)])throw new Error(_0x403993(0x1bd));const _0x39daac=[];for(let _0x41c744=0x0;_0x41c744<_0x16039f[_0x403993(0x1ce)];_0x41c744++)_0x39daac['push'](_0x16039f[_0x41c744]+_0x244e32[_0x41c744]);return _0x39daac;}static[_0x560ad3(0x1d6)](_0x4f9ec2,_0x2fa287){const _0x1225ff=_0x560ad3,_0x536db2=[];for(let _0x5e1a81=0x0;_0x5e1a81<_0x2fa287['length'];_0x5e1a81++)_0x536db2[_0x1225ff(0x1ee)](_0x2fa287[_0x5e1a81]*_0x4f9ec2);return _0x536db2;}static['subtract'](_0x2d8e33,_0x3c70d5){const _0x2dddaa=_0x560ad3;return LinAlg['add'](_0x2d8e33,LinAlg[_0x2dddaa(0x1d6)](-0x1,_0x3c70d5));}static[_0x560ad3(0x1d8)](_0x24d595){const _0x1bbb97=_0x560ad3;let _0x5c6f56=LinAlg['magnitude'](_0x24d595);return LinAlg[_0x1bbb97(0x1d6)](0x1/_0x5c6f56,_0x24d595);}static[_0x560ad3(0x1cc)](_0x46f044,_0x3483dd){const _0x42a15f=_0x560ad3;if(_0x46f044['length']!=_0x3483dd[_0x42a15f(0x1ce)])throw new Error(_0x42a15f(0x1d3));let _0x520c81=0x0;for(let _0x4659f9=0x0;_0x4659f9<_0x46f044[_0x42a15f(0x1ce)];_0x4659f9++)_0x520c81+=_0x46f044[_0x4659f9]*_0x3483dd[_0x4659f9];return _0x520c81;}static[_0x560ad3(0x1e0)](_0x40fe4e,_0x5b3b7b,_0x28d88b,_0x555bbf){const _0x404410=_0x560ad3;return[LinAlg['dot'](LinAlg['normalise'](LinAlg[_0x404410(0x1c9)](_0x5b3b7b,_0x40fe4e)),_0x28d88b),LinAlg[_0x404410(0x1cc)](LinAlg[_0x404410(0x1d8)](LinAlg[_0x404410(0x1c9)](_0x40fe4e,_0x5b3b7b)),_0x555bbf)];}static[_0x560ad3(0x1ff)](_0x2b72de,_0x530d3a){const _0x125518=_0x560ad3;let _0x29e6f8=Math[_0x125518(0x204)](1e-10,current_time_step);return LinAlg[_0x125518(0x1d6)](0x1/_0x29e6f8,LinAlg[_0x125518(0x1c9)](_0x2b72de[_0x125518(0x1c1)](_0x530d3a+_0x29e6f8),_0x2b72de[_0x125518(0x1c1)](_0x530d3a)));}static[_0x560ad3(0x1ec)](_0x34ae53,_0x25b22d,_0x564954,_0x3ec7fa){const _0x4f4d8c=_0x560ad3;let _0x1747a9=Math['min'](1e-10,current_time_step),_0xb07049=0.05,_0x3e117e=_0x34ae53,_0x49155d=_0x3e117e+LinAlg[_0x4f4d8c(0x1f3)](LinAlg[_0x4f4d8c(0x1c9)](_0x564954['position'](_0x3e117e),_0x3ec7fa['position'](_0x34ae53)))/_0x25b22d-_0x34ae53;while(_0x49155d>_0x1747a9){_0x49155d=_0x3e117e+LinAlg[_0x4f4d8c(0x1f3)](LinAlg[_0x4f4d8c(0x1c9)](_0x564954[_0x4f4d8c(0x1c1)](_0x3e117e),_0x3ec7fa['position'](_0x34ae53)))/_0x25b22d-_0x34ae53,_0x3e117e-=_0xb07049*_0x49155d;}return _0x3e117e;}static[_0x560ad3(0x1d5)](_0x3e3f39,_0x79faf9){const _0x12809a=_0x560ad3;if(_0x3e3f39[_0x12809a(0x1ce)]!==_0x79faf9[_0x12809a(0x1ce)])throw new Error(_0x12809a(0x1e4));const _0x57ae22=[];for(let _0x3be4b1=0x0;_0x3be4b1<_0x3e3f39[_0x12809a(0x1ce)];_0x3be4b1++)_0x57ae22['push']({'x':_0x3e3f39[_0x3be4b1],'y':_0x79faf9[_0x3be4b1]});return _0x57ae22;}static['filter_zipped'](_0x1da1fb){const _0x35dc6a=_0x560ad3,_0x148aff=[];for(let _0x196940=0x0;_0x196940<_0x1da1fb[_0x35dc6a(0x1ce)];_0x196940++){if(!isNaN(_0x1da1fb[_0x196940]['x'])&&!isNaN(_0x1da1fb[_0x196940]['y']))_0x148aff[_0x35dc6a(0x1ee)](_0x1da1fb[_0x196940]);}return _0x148aff;}}const speed_of_sound=0x14a,source_frequency=0x3df;let detected=![],time_step,current_time_step,reduced_time_step;const reducing_factor=0xc8;let signals=[],detectors=[],timestamps=[],source,graph=undefined,current_frame,current_time;function addDoppler(){const _0x1d77a6=_0x560ad3;for(let _0x58f991 of detectors){signals[_0x1d77a6(0x1ee)](Number[_0x1d77a6(0x1bf)](doppler(source,_0x58f991))),timestamps[_0x1d77a6(0x1ee)](Number[_0x1d77a6(0x1bf)](current_time));}}function doppler(_0x1804b2,_0x17fb4d){const _0x17de47=_0x560ad3;f0=source_frequency,vc=speed_of_sound;let _0x4a1c4e=LinAlg[_0x17de47(0x1ec)](current_time,vc,_0x1804b2,_0x17fb4d),_0x4b2b5d=_0x1804b2[_0x17de47(0x1c1)](_0x4a1c4e),_0x2d4c03=_0x17fb4d[_0x17de47(0x1c1)](current_time),_0x5db357=_0x1804b2[_0x17de47(0x1ff)](_0x4a1c4e),_0x4c7cde=_0x17fb4d[_0x17de47(0x1ff)](current_time),_0x11c11b=LinAlg[_0x17de47(0x1e0)](_0x4b2b5d,_0x2d4c03,_0x5db357,_0x4c7cde);if(_0x4a1c4e>=0x0){if(!detected)return current_time-=current_time_step,current_time_step=reduced_time_step,current_time-=current_time_step,detected=!![],NaN;else current_time_step=time_step;return f0*(vc+_0x11c11b[0x1])/(vc-_0x11c11b[0x0]);}else return NaN;}function initParams(){const _0x1424ff=_0x560ad3;simul_end_time=Number[_0x1424ff(0x1bf)](simul_end_time_input[_0x1424ff(0x1d4)]),simul_start_time=Number[_0x1424ff(0x1bf)](simul_start_time_input[_0x1424ff(0x1d4)]),time_step=Number[_0x1424ff(0x1bf)](time_step_input[_0x1424ff(0x1d4)]);Number[_0x1424ff(0x1d1)](simul_end_time)&&(simul_end_time=0x0,simul_end_time_input['value']='0');Number[_0x1424ff(0x1d1)](simul_start_time)&&(simul_start_time=0x0,simul_start_time_input[_0x1424ff(0x1d4)]='0');Number[_0x1424ff(0x1d1)](time_step)&&(time_step=0.02,time_step_input['value']='0.02');time_step<0.001&&(time_step=0.001,time_step_input['value']=_0x1424ff(0x1dd));(simul_end_time-simul_start_time)/time_step>0x61a8&&(simul_end_time=simul_end_time_input[_0x1424ff(0x1d4)]=simul_start_time+0x61a8*time_step);current_time_step=time_step,reduced_time_step=time_step/reducing_factor,signals=[],timestamps=[],current_time=simul_start_time,current_frame=0x0,detected=![];let _0x4aac41=Number['parseFloat'](dist_input[_0x1424ff(0x1d4)]),_0x468698=toRadians(Number['parseFloat'](dist_angle_input[_0x1424ff(0x1d4)])),_0xb89cbb=Number[_0x1424ff(0x1bf)](vel_input[_0x1424ff(0x1d4)]),_0xebe034=Number[_0x1424ff(0x1bf)](vel_angle_input['value']);Number['isNaN'](_0x4aac41)&&(_0x4aac41=0x0,dist_input[_0x1424ff(0x1d4)]='0');Number['isNaN'](_0x468698)&&(_0x468698=0x0,dist_angle_input['value']='0');Number[_0x1424ff(0x1d1)](_0xb89cbb)&&(_0xb89cbb=0x0,vel_input[_0x1424ff(0x1d4)]='0');Number[_0x1424ff(0x1d1)](_0xebe034)&&(_0xebe034=0x0,vel_angle_input[_0x1424ff(0x1d4)]='0');source=new Source(0x12c,0x1f4,0x0,0x51,0x2b,0x0,0x78,1.5),detectors=[],detectors[_0x1424ff(0x1ee)](new Detector(_0x4aac41*Math['cos'](_0x468698),_0x4aac41*Math[_0x1424ff(0x203)](_0x468698),0x0,_0xb89cbb*Math['cos'](_0xebe034),_0xb89cbb*Math[_0x1424ff(0x1e3)](_0xebe034),0x0));if(graph!==undefined)graph[_0x1424ff(0x1be)]();while(current_time<simul_end_time){addDoppler(source),current_time+=current_time_step,current_frame+=0x1;}timestamps=timestamps[_0x1424ff(0x1f0)](0x2),signals=signals[_0x1424ff(0x1f0)](0x2),drawGraph();}class Source{constructor(_0x1247be,_0x426330,_0x396c62,_0x104a47,_0x11dbc7,_0x5f14d3,_0x1b9ef3,_0x5bcfbc){this['vx']=_0x104a47,this['vy']=_0x11dbc7,this['vz']=_0x5f14d3,this['ω']=_0x5bcfbc,this['R']=_0x1b9ef3,this['x']=_0x1247be,this['y']=_0x426330,this['z']=_0x396c62;}[_0x560ad3(0x1d9)](_0x18dcf6){const _0x5d5c56=_0x560ad3;context[_0x5d5c56(0x1fc)]=_0x5d5c56(0x1e9),context[_0x5d5c56(0x1fe)](),context[_0x5d5c56(0x1f5)](canvas_width/0x2+scale*this[_0x5d5c56(0x1c1)](_0x18dcf6)[0x0],canvas_height/0x2-scale*this['position'](_0x18dcf6)[0x1],source_radius,0x0,0x2*Math['PI']),context[_0x5d5c56(0x1ef)]();}[_0x560ad3(0x1c1)](_0xc4092f){const _0x4788eb=_0x560ad3;return[this['x']+this['vx']*_0xc4092f+this['R']*Math[_0x4788eb(0x1e3)](this['ω']*_0xc4092f),this['y']+this['vy']*_0xc4092f+this['R']*Math['sin'](this['ω']*_0xc4092f),this['z']+this['vz']*_0xc4092f];}[_0x560ad3(0x1ff)](_0x187b17){const _0x8bb9d0=_0x560ad3;return[this['vx']-this['ω']*this['R']*Math['sin'](this['ω']*_0x187b17),this['vy']+this['ω']*this['R']*Math[_0x8bb9d0(0x1e3)](this['ω']*_0x187b17),this['vz']];}}function toRadians(_0x4be1da){return Math['PI']*_0x4be1da/0xb4;}function toDegrees(_0x404dfd){return _0x404dfd*0xb4/Math['PI'];}function detectExtrema(){const _0x3251e0=_0x560ad3;let _0x568ccc=get_start_index(signals);addEntry(_0x3251e0(0x1d2),signals[_0x568ccc],timestamps[_0x568ccc]);for(let _0x11d336=_0x568ccc;_0x11d336<signals[_0x3251e0(0x1ce)]-0x1;_0x11d336++){if(signals[_0x11d336-0x1]<signals[_0x11d336]&&signals[_0x11d336+0x1]<signals[_0x11d336])addEntry(_0x3251e0(0x1f1),signals[_0x11d336],timestamps[_0x11d336]);else signals[_0x11d336-0x1]>signals[_0x11d336]&&signals[_0x11d336+0x1]>signals[_0x11d336]&&addEntry(_0x3251e0(0x1ca),signals[_0x11d336],timestamps[_0x11d336]);}}function _0x4310(){const _0x11f992=['fillStyle','linear','beginPath','velocity','lineCap','55992UYBuKi','vel-input','sin','min','calibri','freq-display','getElementById','86248FemDLm','unequal\x20dimensions','destroy','parseFloat','angles-display','position','dist-angle-input','Time\x20(s):\x20','time-step-input','table','18jYWWSX','dist-input','sqrt','subtract','Minima','rgba(255,255,255,0.3)','dot','test','length','vel-angle-input','752EsMMJt','isNaN','Initial','unequal\x20vector\x20dimensions','value','zip','mul','pause-button','normalise','render','innerWidth','innerHTML','88jOlzsE','0.001','white','onload','comp','202FxtuTq','1305170PcJRsC','cos','unequal\x20length\x20for\x20zip','parsed','round','#1f51ff','scale-display','#ff1818','44gFtzLy','scatter','find_em','#ffffff','push','fill','slice','Maxima','491238lwopoo','magnitude','add','arc','217UpKwKw','56890ExXAre','lineJoin','2079624wGxDYh','graph-canvas','simul-start-time-input'];_0x4310=function(){return _0x11f992;};return _0x4310();}function addEntry(_0x48f73f,_0x4b7693,_0x10e128){const _0x52a2f7=_0x560ad3;table[_0x52a2f7(0x1db)]+='';}function get_start_index(_0x288804){const _0x3464af=_0x560ad3;for(let _0x4eeda3=0x0;_0x4eeda3<_0x288804[_0x3464af(0x1ce)];_0x4eeda3++){if(!Number[_0x3464af(0x1d1)](_0x288804[_0x4eeda3]))return _0x4eeda3;}}