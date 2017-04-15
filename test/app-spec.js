const agents = require('supertest');
const app = require('../src');

const server = app.listen();

const request = agents.agent(server);

let csrf;

describe('Authentication', () => {
  describe('when not authenticated', () => {
    it('GET / should 200', (done) => {
      request.get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200, done);
    });

    it('GET /login should 200', (done) => {
      request.get('/login')
        .expect('Content-Type', /text\/html/)
        .expect(200, done);
    });

    it('GET /logout should 302', (done) => {
      request.get('/logout')
        .expect('Content-Type', /text\/html/)
        .expect('Location', '/')
        .expect(302, done);
    });
  });

  describe('logging in', () => {
    it('GET /login should render a CSRF token', (done) => {
      request.get('/login')
        .expect('Content-Type', /text\/html/)
        .expect(200, (err, res) => {
          if (err) return done(err);
          const html = res.text;
          csrf = /name="_csrf" value="([^"]+)"/.exec(html)[1];
          return done();
        });
    });

    it('POST /login should 403 without a CSRF token', (done) => {
      request.post('/login')
        .send({
          username: 'username',
          password: 'password',
        })
        .expect(403, done);
    });

    it('POST /login should 403 with an invalid CSRF token', (done) => {
      request.post('/login')
        .send({
          username: 'addhome',
          password: 'password',
          csrf: 'lkjalksdjfasdf',
        })
        .expect(403, done);
    });

    it('POST /login should 403 with bad auth details', (done) => {
      request.post('/login')
        .send({
          csrf,
          username: 'klajklsdjfasdf',
          password: 'lkjlakjsdlkfja',
        })
        .expect(403, done);
    });

    it('POST /login should redirect to error with wrong user info', (done) => {
      request.post('/login')
        .send({
          _csrf: csrf,
          username: 'klajklsdjfasdf',
          password: 'lkjlakjsdlkfja',
        })
        .expect('Location', '/error', done);
    });

    it('POST /login should 302 with good auth details', (done) => {
      request.post('/login')
        .send({
          _csrf: csrf,
          username: 'username',
          password: 'password',
        })
        .expect(302)
        .expect('Location', '/profile', done);
    });

    it('GET / should return profile if user is authenticated', (done) => {
      request.get('/')
        .expect(302)
        .expect('Location', '/profile', done);
    });
  });

  describe('logging out', () => {
    it('GET /logout should 302 to /', (done) => {
      request.get('/logout')
        .expect('Location', '/')
        .expect(302, done);
    });

    it('GET / should 200', (done) => {
      request.get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200, done);
    });
  });
});
