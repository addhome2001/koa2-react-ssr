import assert from 'assert';
import agents from 'supertest';
import app from '../server.js'

const server = app.listen();

const request = agents.agent(server);

var csrf;

describe('Authentication', function () {
  describe('when not authenticated', function () {
    it('GET / should 200', function (done) {
      request.get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200, done);
    });

    it('GET /login should 200', function (done) {
      request.get('/login')
        .expect('Content-Type', /text\/html/)
        .expect(200, done)
    });

    it('GET /logout should 302', function (done) {
      request.get('/logout')
        .expect('Content-Type', /text\/html/)
        .expect('Location', '/')
        .expect(302, done);
    })
  });

  describe('logging in', function () {
    it('GET /login should render a CSRF token', function (done) {
      request.get('/login')
        .expect('Content-Type', /text\/html/)
        .expect(200, function (err, res) {
          if (err) return done(err);

          var html = res.text;
          csrf = /name="csrf" value="([^"]+)"/.exec(html)[1];
          done();
      })
    });

    it('POST /login should 403 without a CSRF token', function (done) {
      request.post('/login')
        .send({
          username: 'username',
          password: 'password'
        })
        .expect(403, done);
    });

    it('POST /login should 403 with an invalid CSRF token', function (done) {
      request.post('/login')
        .send({
          username: 'username',
          password: 'password',
          csrf: 'lkjalksdjfasdf'
        })
        .expect(403, done);
    });

    it('POST /login should 401 with bad auth details', function (done) {
      request.post('/login')
        .send({
          csrf: csrf,
          username: 'klajklsdjfasdf',
          password: 'lkjlakjsdlkfja'
        })
        .expect(401, done)
    });

    it('POST /login should 302 with good auth details', function (done) {
      request.post('/login')
        .send({
          csrf: csrf,
          username: 'addhome',
          password: 'password'
        })
        .expect(302)
        .expect('Location', '/profile/addhome', done);
    });

    it('GET / should return profile', function (done) {
      request.get('/')
        .expect(302)
        .expect('Location', '/profile/addhome', done);
    })
  })

  describe('logging out', function () {
    it('GET /logout should 302 to /', function (done) {
      request.get('/logout')
        .expect('Location', '/')
        .expect(302, done);
    });

    it('GET / should 200', function (done) {
      request.get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200, done);
    })
  })
});
