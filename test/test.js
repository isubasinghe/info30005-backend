var expect = require('chai').expect;
var request = require('supertest');
var app = require('../app');

describe('Integration test for User Sign Up', function(){
    describe('#POST to /auth/signup with no params', function (){
        it('should try signup with no parameters', function(done){
            request(app)
                .post('/auth/signup')
                .send({})
                .end(function (err, res) {
                    expect(res.statusCode).to.equal(400);
                    expect(res.text).to.contains('{"msg":"Invalid field for address"}');
                    done();
                })
        })
    })
    describe('#POST to /auth/signup with correct params', function (){
        it('should try signup with valid parameters', function(done){
            request(app)
                .post('/auth/signup')
                .send({email: "abhishaalathas@gmail.com", password: "Hihello123.", name:"a", address:"7 Edgars road"})
                .end(function (err, res) {
                    
                    expect(res.statusCode).to.equal(200);
                    expect(res.text).to.contains('{"msg":"Writen to db, activate account by checking your email"}');
                    done();
                })
        })
    })
    describe('#POST to /auth/signup with incorrect email', function (){
        it('should try signup with invalid email', function(done){
            request(app)
                .post('/auth/signup')
                .send({email: "abhishaalatmail.com", password: "Hihello123.", name:"a", address:"7 Edgars road"})
                .end(function (err, res) {
                    
                    expect(res.statusCode).to.equal(200);
                    expect(res.text).to.contains('{"msg":"Writen to db, activate account by checking your email"}');
                    // done();
                })
        })
        it('should try signup with no email', function(done){
            request(app)
                .post('/auth/signup')
                .send({email: "", password: "Hihello123.", name:"a", address:"7 Edgars road"})
                .end(function (err, res) {
                    
                    expect(res.statusCode).to.equal(200);
                    expect(res.text).to.contains('{"msg":"Writen to db, activate account by checking your email"}');
                    done();
                })
        })
    })
    describe('#POST to /auth/signup with incorrect password', function (){
        it('should try signup with incorrect password', function(done){
            request(app)
                .post('/auth/signup')
                .send({email: "abhishaalat@gmail.com", password: "Hih", name:"a", address:"7 Edgars road"})
                .end(function (err, res) {
                    
                    expect(res.statusCode).to.equal(200);
                    expect(res.text).to.contains('{"msg":"Writen to db, activate account by checking your email"}');
                    done();
                })
        })
        it('should try signup with no incorrect password password', function(done){
            request(app)
                .post('/auth/signup')
                .send({email: "abhishaalat@gmail.com", password: "", name:"a", address:"7 Edgars road"})
                .end(function (err, res) {
                    
                    expect(res.statusCode).to.equal(200);
                    expect(res.text).to.contains('{"msg":"Writen to db, activate account by checking your email"}');
                    done();
                })
        })
    })
    describe('#POST to /auth/signup with incorrect name', function (){
        it('should try signup with invalid name', function(done){
            request(app)
                .post('/auth/signup')
                .send({email: "abhishaalat@gmail.com", password: "Hih", name:"     ", address:"7 Edgars road"})
                .end(function (err, res) {
                    
                    expect(res.statusCode).to.equal(200);
                    expect(res.text).to.contains('{"msg":"Writen to db, activate account by checking your email"}');
                    done();
                })
        })
        it('should try signup with no name', function(done){
            request(app)
                .post('/auth/signup')
                .send({email: "abhishaalat@gmail.com", password: "Hih", name:"", address:"7 Edgars road"})
                .end(function (err, res) {
                    
                    expect(res.statusCode).to.equal(200);
                    expect(res.text).to.contains('{"msg":"Writen to db, activate account by checking your email"}');
                    done();
                })
        })
    })
    describe('#POST to /auth/signup with incorrect address', function (){
        it('should try signup with incorrect address', function(done){
            request(app)
                .post('/auth/signup')
                .send({email: "abhishaalat@gmail.com", password: "Hih", name:"     ", address:"788888"})
                .end(function (err, res) {
                    
                    expect(res.statusCode).to.equal(200);
                    expect(res.text).to.contains('{"msg":"Writen to db, activate account by checking your email"}');
                    done();
                })
        })
        it('should try signup with no address', function(done){
            request(app)
                .post('/auth/signup')
                .send({email: "abhishaalat@gmail.com", password: "Hih", name:"", address:""})
                .end(function (err, res) {
                    
                    expect(res.statusCode).to.equal(200);
                    expect(res.text).to.contains('{"msg":"Writen to db, activate account by checking your email"}');
                    done();
                })
        })
    })
})

describe('Integration test for User Sign In', function(){
    describe('#POST to /auth/signin with no params', function (){
        it('should try signup with no parameters', function(done){
            request(app)
                .post('/auth/signup')
                .send({})
                .end(function (err, res) {
                    expect(res.statusCode).to.equal(400);
                    expect(res.text).to.contains('{msg: "Wrong password or email"}');
                    done();
                })
        })
    })
    describe('#POST to /auth/signup with correct params', function (){
        it('should try signin with valid parameters', function(done){
            request(app)
                .post('/auth/signin')
                .send({email: "abhisha.nirmalathas@gmail.com", password: "Hello123."})
                .end(function (err, res) {
                    
                    expect(res.statusCode).to.equal(200);
                    expect(res.text).to.contains('{"token":}');
                    done();
                })
        })
    })
})