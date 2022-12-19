import {  stdout  } from 'process';

export default function currentPath(path){
  const defaultColorTerminal = '\x1b[0m'
  const newColorTerminal = '\x1b[36m'
  stdout.write(`${newColorTerminal} You are currently in ${path} ${defaultColorTerminal}`);
}