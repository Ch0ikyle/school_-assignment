var express = require('express');
var createError = require('http-errors');
var router = express.Router();
const User = require('../../../models/users')
const Account = require('../../../models/accounts')

module.exports = router;

  //Restful
  router.get('/', function(req, res, next) {

    User.find()
      .then(r => {
        res.send({ success : true, users: r})
      })
      .catch(e => {
        res.send({ success : false})
      })

});

router.post('/', (req, res, next) => {

  const { email, password } = req.body
  const u = new User({ email, password })
    u.save()
      .then(r => {
        console.log("데이터베이스 저장 성공");
        res.send({ success: true, msg: r })
      })
      .catch(e => {
        console.log("실패..")
        res.send({ success: false, msg: e.message })
      })
})

router.post('/signup2', (req, res, next) => {
  const { email, password, name, age } = req.body
  const u = new Account({ email, password, name, age})
  u.save().then(r => { console.log("데이터베이스 저장 성공");
  res.send({success:true, msg:r})}).catch(e => { console.log("실패..");
  res.send({success:false, msg:e.mssage})});
})

router.put('/:id', (req, res, next) => {
  const id = req.params.id
  const { name, age } = req.body
  User.updateOne({ _id: id }, { $set: { name, age }})
    .then(r => {
      res.send({ success: true, msg: r })
    })
    .catch(e => {
      res.send({ success: false, msg: e.message })
    })
  // res.send({ success: true, msg: 'put ok' })
})


router.delete('/:id', (req, res, next) => {
  const id = req.params.id
  User.deleteOne({ _id: id })
    .then(r => {
      res.send({ success: true, msg: r })
    })
    .catch(e => {
      res.send({ success: false, msg: e.message })
    })
  res.send({ success: true, msg: 'del ok' })
})


router.all('*', function(req, res, next) {
  next(createError(404, 'API를 찾을 수 없습니다.'));
});

module.exports = router;
