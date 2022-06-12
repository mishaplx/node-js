
import {  stdout  } from 'process';

export default function currentPath(path){
  stdout.write(`You are currently in ${path} `);
}