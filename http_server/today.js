// module.exports.getDate = function getDate() {
//     var aestTime = new Date().toLocaleString("en-US", {timeZone: "Australia/Brisbane"});
//     return new Date(aestTime);
// }


module.exports.getDate = function getDate(){
    var ist= new Date().toLocaleString("en-US",{timeZone: "IST"})
    return new Date(ist)
}