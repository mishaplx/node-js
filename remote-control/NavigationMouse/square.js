import robot from 'robotjs'
export default function square(value) {
    value = Number(value)

    let mousePosition = robot.getMousePos()

    robot.moveMouseSmooth(mousePosition.x + value, mousePosition.y)
    mousePosition = robot.getMousePos()
    robot.moveMouseSmooth(mousePosition.x, mousePosition.y + value)
    mousePosition = robot.getMousePos()
    robot.moveMouseSmooth(mousePosition.x - value, mousePosition.y)
    mousePosition = robot.getMousePos()
    robot.moveMouseSmooth(mousePosition.x, mousePosition.y - value)
}
