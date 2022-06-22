import { WebSocketServer } from 'ws';
import mousePos from './NavigationMouse/mousePos.js';
import  mouseNavigation  from './NavigationMouse/mouse.js'
import rectungle from './NavigationMouse/rectungle.js';
import Jimp from 'jimp'
import robot from 'robotjs'
import screen from './screen.js'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
import fs from 'fs'
const PORT = 8080;
const wss = new WebSocketServer({port: 8080});

wss.on('connection',  onConnection);
function onConnection(ws){
  console.log('Новый пользователь');
  ws.on('message', function message(data) {
    const arrMessage = data.toString().split(' ')
    const param = arrMessage[0];
    const value = arrMessage[1];
    if(param == "mouse_position"){
     
      mousePos()
      let res = mousePos(param)
      console.log(res);
      ws.send(JSON.stringify(res))
       
    }
    if(param == 'mouse_left'){
      mouseNavigation(param, value)
    }
    if(param == 'mouse_right'){
      mouseNavigation(param, value)
    }
    if(param == 'mouse_up'){
      mouseNavigation(param, value)
    }
    if(param == 'mouse_down'){
      mouseNavigation(param, value)
    }
    if(param == 'draw_circle'){
      mouseNavigation(param, value)
    }
    if(param == 'draw_square'){
      mouseNavigation(param, value)
    }
    if(param == 'draw_rectangle'){
      const param = arrMessage[0];
      const wigth = arrMessage[1];
      const length = arrMessage[2];
      rectungle(param, wigth, length)
    }
    if(param == 'prnt_scrn'){
    //  screen()
     let size = 100;
     
     const img = robot.screen.capture(mousePos().x, mousePos().y, size, size).image;
     new Jimp({data: img, width:size, height:size},async (err, image) => {
      if (fs.existsSync(__dirname + '/image.png')){
        fs.unlinkSync(__dirname + '/image.png')
       await image.write('image.png');
        console.log('yes');
        fs.readFile(__dirname + '\\image.png', function(err, buf) {
          if(err)console.log(err);
             let x = buf.toString('base64')
             ws.send(`prnt_scrn ${x}`)
             fs.unlinkSync(__dirname + '/image.png')
            });
      }else{
console.log('no');
        await image.write('image.png');
        fs.readFile(__dirname + '\\image.png', function(err, buf) {
          if(err)console.log(err);
             let x = buf.toString('base64')
             ws.send(`prnt_scrn ${x}`)
             fs.unlinkSync(__dirname + '/image.png')
            });
      }
      
      //console.log(__dirname + '\\image.png','----path');
      
      
        
          
       //image.write('fileName.png');
     });
    // fs.unlinkSync(__dirname + '/image.png')
    }
   
  });
  ws.on('close', function() {
    // отправка уведомления в консоль
    console.log('Пользователь отключился');
  })
}