import { WebSocketServer } from 'ws'
import mousePos from './NavigationMouse/mousePos.js'
import mouseNavigation from './NavigationMouse/mouse.js'
import rectungle from './NavigationMouse/rectungle.js'
import Jimp from 'jimp'
import robot from 'robotjs'
import screen from './screen.js'

import square from './NavigationMouse/square.js'
import fs from 'fs'
const PORT = 8080
const wss = new WebSocketServer({ port: 8080 })

wss.on('connection', onConnection)
function onConnection(ws) {
    console.log('Новый пользователь')
    ws.on('message', function message(data) {
        const arrMessage = data.toString().split(' ')
        const param = arrMessage[0]
        const value = arrMessage[1]
        if (param == 'mouse_position') {
            mousePos()
            let res = mousePos(param)
            console.log(res)
            ws.send(JSON.stringify(res))
        }
        if (param == 'mouse_left') {
            mouseNavigation(param, value)
        }
        if (param == 'mouse_right') {
            mouseNavigation(param, value)
        }
        if (param == 'mouse_up') {
            mouseNavigation(param, value)
        }
        if (param == 'mouse_down') {
            mouseNavigation(param, value)
        }
        if (param == 'draw_circle') {
            mouseNavigation(param, value)
        }
        if (param == 'draw_square') {
            square(value)
            //mouseNavigation(param, value)
        }
        if (param == 'draw_rectangle') {
            const param = arrMessage[0]
            const wigth = arrMessage[1]
            const length = arrMessage[2]
            rectungle(param, wigth, length)
        }
        if (param == 'prnt_scrn') {
            screen(ws)
        }
    })
    ws.on('close', function () {
        // отправка уведомления в консоль
        console.log('Пользователь отключился')
    })
}
