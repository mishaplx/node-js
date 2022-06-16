import createCRUD from './index.js'
import dotenv from 'dotenv'
createCRUD(dotenv.config().parsed.PORT)