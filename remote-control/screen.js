import Jimp from 'jimp'
import robot from 'robotjs'
import fs from 'fs'
import mousePos from './NavigationMouse/mousePos.js'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
const __dirname = dirname(fileURLToPath(import.meta.url))

//https://stackoverflow.com/questions/41941151/capture-and-save-image-with-robotjs
export default async function screen(ws) {
    let size = 100
    const fileName = 'image.png'
    const img = robot.screen.capture(
        mousePos().x,
        mousePos().y,
        size,
        size
    ).image
    new Jimp({ data: img, width: size, height: size }, async (err, image) => {
        fs.access(__dirname + `/${fileName}`, async (err) => {
            if (err) {
                await image.write(fileName)
                fs.readFile(__dirname + `/${fileName}`, (err, data) => {
                    if (err) {
                        console.log(err)
                    } else {
                        let buf = data.toString('base64')
                        ws.send(`prnt_scrn ${buf}`)
                    }
                })
                fs.unlink(__dirname + `/${fileName}`, (err) => {
                    if (err) console.log(err)
                })
            } else {
                console.log('найден')
            }
        })
    })
}
