process.env.NODE_ENV = "test";
process.env.EMAIL_TO = "nromero125@gmail.com";

let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app");
let should = chai.should();
let expect = chai.expect;
const base64 = require("./base64");
chai.use(chaiHttp);

/*
 * Test send a document
 */
describe("/POST base64 image", () => {
  it("it should send a pdf to email", done => {
    let data = {
      doc: base64.img
    };
    chai
      .request(server)
      .post("/api/send-document")
      .send(data)
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body).to.have.property("success");
      });
  });
});
