import Jimp from 'jimp'
import robot from 'robotjs'
export default async function screen(){
  var size = 100;
  var image = robot.screen.capture(0, 0, size, size);
  let data = image.image
console.log(data);
  //const buffer = Buffer.from(data, "base64"); 
  Jimp.read(data, (err, res) => { 
    if (err) throw new Error(err); 
    res.resize(45, 45).getBase64Async(Jimp.MIME_PNG)
  });
}