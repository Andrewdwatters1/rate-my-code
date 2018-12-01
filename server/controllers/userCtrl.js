const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(process.env.BCRYPT_HASH, salt);

module.exports = self = {
  login: (req, res) => {
    const { username, password } = req.body;
    const db = req.app.get('db');

    db.auth.check_if_user_exists([username]).then(result => {
      if (result.length) { // USER EXISTS, RETRIEVE THEIR INFO
        db.auth.get_user_by_login_info(username).then(result => {
          bcrypt.compare(password, result[0].password, (err, response) => {
            if (response === true) {
              db.auth.get_user_by_id(result[0].id).then(result => {
                req.session.user = result[0];
                const { id, username } = req.session.user;
                res.status(200).send({ id, username })
              })
            }
          })
        })

      } else {  // USER DOESN'T EXIST, CREATE THEM
        bcrypt.genSalt(10, (error, salt) => {
          bcrypt.hash(password, salt, (error, hash) => {
            db.auth.register_new_user([username, hash])
              .then(result => {
                const { id, username } = result[0];
                const user = { id, username };
                res.status(200).send(user);
              })
          })
        })
      }
    })
  },

  logout: (req, res) => {
    req.session.destroy()
    res.sendStatus(200);
  },
}


// bcrypt.genSalt(10, (error, salt) => {
//   bcrypt.hash(password, salt, (error, hash) => {
//     db.auth.register_new_user([firstName, lastName, username, email, hash, avitar, zipcode]).then(result => {
//       let { id, firstname, lastname, username, email, zipcode, avitar } = result[0];
//       let currentUser = { id, firstname, lastname, username, email, zipcode, avitar }
//       res.status(200).send(currentUser);
//     }).catch((error) => console.log('Error from authController.register => register_new_user.sql', error));
//   });
// });




// module.exports = {
// register: (req, res) => {
//   let { firstName, lastName, username, email, password, avitar, zipcode } = req.body;
//   avitar = avitar ? avitar : 'https://images.unsplash.com/photo-1526867616473-50b45986aa40?';
//   bcrypt.genSalt(10, (error, salt) => {
//     bcrypt.hash(password, salt, (error, hash) => {

//       db.auth.register_new_user([firstName, lastName, username, email, hash, avitar, zipcode]).then(result => {
//         let { id, firstname, lastname, username, email, zipcode, avitar } = result[0];
//         let currentUser = { id, firstname, lastname, username, email, zipcode, avitar }
//         res.status(200).send(currentUser);
//       }).catch((error) => console.log('Error from authController.register => register_new_user.sql', error));
//     });
//   });
// },


//   login: (req, res) => {
//     let db = req.app.get('db');
//     let { username, password } = req.body;
//     db.auth.get_user_by_login_info([username, password]).then(result => {
//       bcrypt.compare(password, result[0].password, (err, response) => {
//         if (response === true) {
//           db.auth.get_user_by_id(result[0].id).then(result => {
//             req.session.user = result[0];
//             let { username, firstname, lastname, zipcode, email, avitar } = req.session.user;
//             res.status(200).send({ username, firstname, lastname, zipcode, email, avitar });
//           })
//         } else {
//           res.status(403).send({ data: null });
//         }
//       });
//     });
//   },



//   logoutUser: (req, res) => {
//     res.session = {};
//     res.sendStatus(200);
//   },

//   getCurrentUser: (req, res) => {
//     if (req.session.user) {
//       console.log(req.session.user)
//       let { id, firstname, lastname, username, email, avitar, zipcode } = req.session.user;
//       id ? id : null;
//       firstname ? firstname : null;
//       lastname ? lastname : null;
//       username ? username : null;
//       email ? email : null;
//       avitar ? avitar : null;
//       zipcode ? zipcode : null;
//       var currentUser = { id, firstname, lastname, username, email, avitar, zipcode };
//     }
//     res.status(200).send(currentUser)
//   }
// }