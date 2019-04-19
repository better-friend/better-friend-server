const request = require("supertest");
const server = require('./server.js');

describe("users", () => {
    
    it("should be reigstering a user", () => {
        const response = request(server).post("/users/register");
    })

    it("should be logging in", () => {
        const response = request(server).post("/users/login");

    })

})


describe("dates", () => {
    
    it("should be getting all dates", () => {
        const response = request(server).get("/dates/:user_id");
    }
    
    it("should post a message", () => {
        const response = request(server).post("/dates/:user_id");
    }

    it("should update a message", () => {
        const response = request(server).put("/dates/:user_id/:date_id");
    }

    it("should delete a message", () => {
        const response = request(server).delete("/dates/:user_id/date_id");
    }
})