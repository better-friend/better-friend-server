const request = require("supertest");

const server1 = require('../routers/usersRouter');
const server2 = require('../routers/datesRouter');

describe("users", () => {
    
    it("should be reigstering a user", (done) => {
        const response = request(server1).post("/register");
    
        response.send({username:  "john123", password: "blahblahblah"})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
        // .end(function(err, res) {
        //     if (err) return done(err);
        //     done();
        //   });
    }),

    it("should be logging in", (done) => {
        const response = request(server1).post("/login");

        response.send({username:  "john123", password: "blahblahblah"})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
        // .end(function(err, res) {
        //     if (err) return done(err);
        //     done();
        //   });
    })

})


// describe("dates", () => {
    
//     it("should be getting all dates", () => {
//         const response = request(server2).get("/dates/:user_id");

//         response
//         .auth({username:  "john123", password: "blahblahblah"})
//         .expect(200)
//         .end(function(err, res) {
//             if (err) throw err;
//           });
//     }),
    
//     it("should post a message", () => {
//         const response = request(server2).post("/dates/:1");
        
//         response
//         .auth({username:  "john123", password: "blahblahblah"})
//         .send({
//             date: stripISOTime(new Date()),
//             personToSendMessageTo: "Joe",
//             phone_number: "555-555-5555",
//             message: "Happy Birthday",
//             sent: false
//         })
//         .set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect(200, done)
//         .end(function(err, res) {
//             if (err) return done(err);
//             done();
//           });
    
//     }),

//     it("should update a message", () => {
//         const response = request(server2).put("/dates/:1/:1");

//         response
//         .auth({username:  "john123", password: "blahblahblah"})
//         .send({
//             date: stripISOTime(new Date()),
//             personToSendMessageTo: "Joe",
//             phone_number: "555-555-5555",
//             message: "Happy Birthday",
//             sent: false
//         })
//         .set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect(200, done)
//         .end(function(err, res) {
//             if (err) return done(err);
//             done();
//           });
//     }),

//     it("should delete a message", () => {
//         const response = request(server2).delete("/dates/:1/:1");
//         response.end(function(err, res) {
//             if (err) {
//             throw err;
//             }
//             res.should.have.status(200);
//             done();
//     })
//     })

// });