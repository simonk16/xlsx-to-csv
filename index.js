const XLSX = require("xlsx");
const glob = require("glob");

let files = []

// this will find all our xlsx files and store their names in an array called 'files'
glob("**/*.xlsx", function (er, result) {
    // result is an array of filenames.
    // If the `nonull` option is set, and nothing
    // was found, then files is ["**/*.js"]
    // er is an error object or null.
    
    files = result
    
    for (let  i = 0; i < files.length; i++){
    
      let outputFileName = files[i].split(".")[0]
      
      const workBook = XLSX.readFile(files[i]);
      XLSX.writeFile(workBook, outputFileName, { bookType: "csv" });
    
    }
  })

