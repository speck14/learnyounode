const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], function getDir (err, data) {
  if(err) {
    console.log(err);
  }
  let ext_name = '.'+ process.argv[3];
  for(i = 0; i < data.length; ++i) {
    if (ext_name == path.extname(data[i])) {
      console.log(data[i]);
    }
  }
})