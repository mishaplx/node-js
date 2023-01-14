import  it,{request} from  'supertest'
import {app} from "../app";



it('should return Hello Test', function (done) {
    request(app).get('/api/users').expect('Hello Test').end(done);
});