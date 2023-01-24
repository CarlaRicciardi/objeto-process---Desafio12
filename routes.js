const getRoute = (req, res) => {
  res.render('login', {});
};

const getLogin = (req, res) => {
  if (req.isAuthenticated()) {
    const { username, password } = req.user;
    const user = { username, password };
    res.render('profileUser', { user });
  } else {
    res.render('login', {});
  }
};

const getFailLogin = (req, res) => {
  res.render('failLogin', {});
};

const getSignUp = (req, res) => {
  if (req.isAuthenticated()) {
    const { username, password } = req.user;
    const user = { username, password };
    res.render('profileUser', { user });
  } else {
    res.render('signup');
  }
};

const getFailSignUp = (req, res) => {
  res.render('failSignUp', {});
};

const getLogout = (req, res) => {
  const { username } = req.user;
  console.log(username);
  req.session.destroy((err) => {
    if (err) {
      res.send('No se pudo deslogear');
    } else {
      res.render('logout', { user: username });
    }
  });
};

const failRoute = (req, res) => {
  res.status(404).render('routing-error', {});
};

const postLogin = (req, res) => {
  const { username, password } = req.user;
  const user = { username, password };
  res.render('profileUser', { user });
};

const postSignUp = (req, res) => {
  const { username, password } = req.user;
  const user = { username, password };
  res.render('successSignUp', { user });
};

const getInfo = (req, res) => {
  res.send('hola mundo');
};

const getRandoms = (req, res) => {
  // let cant = req.query.cant
  // cant = parseInt(cant)
  // console.log(cant)
  res.send('hola mundo');
};

module.exports = { getRoute, getLogin, getInfo, getRandoms, getFailLogin, getSignUp, getFailSignUp, getLogout, failRoute, postLogin, postSignUp };
