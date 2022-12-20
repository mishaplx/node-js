import createCRUD from './index.ts'
import dotenv from 'dotenv'
createCRUD(dotenv.config().parsed.PORT)