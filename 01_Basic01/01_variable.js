console.log("hello world");

const employeeId = 1232;
//employeeId = 65756; ( reassignment is not allowed )
//const employeeId = 98889; ( redeclaration is not allowed )
//const employeeId; ( must be intialized at the time of declaration )

var employeeSurname = "singh"
var employeeSurname // we can intialized afterward
employeeSurname = "kumar" // reassignment is allowed 
var employeeSurname = "dayal" //redeclaration is allowed

let employeeCity ; // we can intialized afterward
employeeCity = "delhi" //reassignment is allowed
//let employeeCity = "jaipur" //redeclaration is not allowed

let employeeAddress ; // undefined

employeeName = "tania";

console.table([employeeId, employeeSurname, employeeCity,employeeAddress, employeeName])