// const connection = require('../config/connection');
// const { Users } = require('../models');
// const getRandomName = require('./data');

// console.log(getRandomName());
// connection.on('error', (err) => err);

// connection.once('open', async () => {
//   console.log('connected');
//  // await Post.deleteMany({});
//   await Users.deleteMany({});

//   const Users = [];

//   for (let i = 0; i < 20; i++) {
//     const fullName = getRandomName();
//     const first = fullName.split(' ')[0];
//     const last = fullName.split(' ')[1];

//     Users.push({
//       first,
//       last,
//       age: Math.floor(Math.random() * (99 - 18 + 1) + 18),
//     });
//   }

//   await Users.collection.insertMany(Users);
//   console.log(Users);
//   process.exit(0);
// });