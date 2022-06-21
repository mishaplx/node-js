import robot from 'robotjs'
export default function mouseNavigation(param, value){ //'mouse_left', '10'
 value = Number(value)

  let mousePosition = robot.getMousePos();
  if(param == "mouse_left"){
     robot.moveMouseSmooth(mousePosition.x - value,mousePosition.y);
  }
  if(param == "mouse_right"){
    robot.moveMouseSmooth(mousePosition.x + value,mousePosition.y);
    }
  if(param == "mouse_up"){
    robot.moveMouseSmooth(mousePosition.x,mousePosition.y - value );
    }
  if(param == "mouse_down"){
    robot.moveMouseSmooth(mousePosition.x,mousePosition.y + value);
    }
    if(param == "draw_circle"){
   

      //Уравнение окружности имеет вид: (x – a)2 + (y – b)2 = r2, где «a» и «b» - координаты центра окружности (по оси Х и оси Y, соответственно); «r» - радиус окружности.
      
    }
    if(param == 'draw_square'){
        robot.moveMouseSmooth(mousePosition.x + value, mousePosition.y);
         mousePosition = robot.getMousePos();
        robot.moveMouseSmooth(mousePosition.x, mousePosition.y + value);
         mousePosition = robot.getMousePos();
        robot.moveMouseSmooth(mousePosition.x - value, mousePosition.y);
         mousePosition = robot.getMousePos();
        robot.moveMouseSmooth(mousePosition.x, mousePosition.y - value);
      }
     
      
  
}