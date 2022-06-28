const fake  = require('./fake.js')
const resolver = {
  Query : {
    getAllTracks(){
      return 1
    }
  }
}


module.exports = {resolver}