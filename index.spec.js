const request = require("supertest");
const server = require('./server.js');

describe("users", () => {
    
    it("should be reigstering a user", () => {
        const response = request(server).post("/users/register");
    
        response.send({username:  "john123", password: "blahblahblah")
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
        .end(function(err, res) {
            if (err) return done(err);
            done();
          });
    })

    it("should be logging in", () => {
        const response = request(server).post("/users/login");

        response.send({username:  "john123", password: "blahblahblah")
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
        .end(function(err, res) {
            if (err) return done(err);
            done();
          });
    })

})


describe("dates", () => {
    
    it("should be getting all dates", () => {
        const response = request(server).get("/dates/:user_id");

        response.
        .auth({username:  "john123", password: "blahblahblah"}).
        send()
    }
    
    it("should post a message", () => {
        const response = request(server).post("/dates/:user_id");
        
        response.
        .auth({username:  "john123", password: "blahblahblah"})
        .send({


        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
        .end(function(err, res) {
            if (err) return done(err);
            done();
          });
    
    }

    it("should update a message", () => {
        const response = request(server).put("/dates/:user_id/:date_id");

        response.
        .auth({username:  "john123", password: "blahblahblah"})
        .send({


        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
        .end(function(err, res) {
            if (err) return done(err);
            done();
          });
    }

    it("should delete a message", () => {
        const response = request(server).delete("/dates/:user_id/date_id");
    }
})