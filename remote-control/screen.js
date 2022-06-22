import Jimp from 'jimp'
import robot from 'robotjs'
import fs from 'fs'
//https://stackoverflow.com/questions/41941151/capture-and-save-image-with-robotjs
export default async function screen(){
  
 let size = 100;
 const img = robot.screen.capture(0, 0, size, size).image;

 new Jimp({data: img, width:size, height:size}, (err, image) => {
  console.log(image);
  //image.write('fileName.png');
});


  
  
  //  fs.writeFile('test.png', image, function(err) {
  //   if(err) console.log(err);
  //    })


  // let data = image.image
  //const buffer = Buffer.from(data, "base64"); 
  // Jimp.read(data, (err, res) => { 
  //   if (err) throw new Error(err); 
  //   res.resize(45, 45).getBase64Async(Jimp.MIME_PNG)
  // });
}