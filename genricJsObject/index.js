//use case: swagger match up with response
//use case: Better diffs with a complete JSon
//TBD: attributes with same name , different types
//->warn and keep previous or error
//combine jsons, convert to generic
//arrays can be heterogenuous cuz JaVAScRiPt
//null gives object type
//deepmerge already available
const defaultVal ={
	"string":"string"
	"number":0,
	"bool":false,
	"null":null,

}

//to be added: override values by type, override values by key
exports.createGenericObject= function(ob, options){
const genOb = {}
const defVal = Object.assign({}, defaultVal, options?.defaultVal || {}) 
Object.keys(ob).forEach{(key) => genOb[key]=defVal[typeof(ob[key])]}
return genOb
}