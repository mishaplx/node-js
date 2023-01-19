import robot from 'robotjs'
export default function rectungle(param, width, length) {
    width = Number(width)
    length = Number(length)
    let mousePosition = robot.getMousePos()

    robot.moveMouseSmooth(mousePosition.x + width, mousePosition.y)
    mousePosition = robot.getMousePos()
    robot.moveMouseSmooth(mousePosition.x, mousePosition.y + length)
    mousePosition = robot.getMousePos()
    robot.moveMouseSmooth(mousePosition.x - width, mousePosition.y)
    mousePosition = robot.getMousePos()
    robot.moveMouseSmooth(mousePosition.x, mousePosition.y - length)
}
