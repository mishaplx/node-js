import {stdout} from 'process'
export default function closeApp(name){
  stdout.write(`\n`);
  stdout.write(`Thank you for using File Manager ${name}`)
  process.exit(0);
}