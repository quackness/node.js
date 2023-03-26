// function (arguments) {
//this is a hidden wrappign function of node, 


// console.log(arguments);
//what will the above print? will print the 5 arguments which node passed to this function
//(exports, module, require. filename, dirname), there is a hidden
//wrapping function here

let g = 1;//local var in a wrapping function
// console.log(arguments)
exports.a = 42;//first arg to a hidden wrapping function

console.log(arguments)



//}



