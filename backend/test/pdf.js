process.env.NODE_ENV = "test";

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
      .post("/api/v1/documents")
      .send(data)
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body).to.have.property("success");
        done();
      });
  });
});


/*
 * Test send a document
 */
describe("/POST error base64 image", () => {
    it("it should send a bad request if you don't send a image", done => {
        let data = {
            doc: 'ARANDOMSTRING'
        };
        chai
            .request(server)
            .post("/api/v1/documents")
            .send(data)
            .end((err, res) => {
                res.should.have.status(400);
                expect(res.body.success).to.be.eql(false);
                done();
            });
    });
});
