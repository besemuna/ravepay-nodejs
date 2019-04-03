var morx = require('morx');
var q = require('q');

// var r = require('../lib/rave.base');
// var R = new r("", "", false)


//This allows you retrieve a single transfer

var spec =  morx.spec()  
				.build('__n', 'required:false, eg:NGN')  
				.end();

function service(_rave, reference=""){

	var d = q.defer();

	q.fcall( () => {

		var validated = morx.validate(spec, _rave.MORX_DEFAULT);
        var params = validated.params; 
        // console.log(params)
        _rave.params = params
        return _rave

	})
	.then( _rave  => {
		 
        _rave.params.seckey = _rave.getSecretKey();
        _rave.params.reference = reference;
        // console.log(_rave.params.seckey)
		_rave.params.method = "GET"; 
        return _rave.request('v2/gpx/transfers', _rave.params)
        
	})
	.then( response => {

		console.log(response);
		d.resolve(response);

	})
	.catch( err => {

		d.reject(err);

	})

	return d.promise;
	
	

}
service.morxspc = spec;
module.exports = service;



// service(R, reference=2922).then((err, res) => {
// 	if(err){
// 		console.log(err)
// 	}else{
// 		console.log(res)
// 	}
// }).catch(err => {
// 	console.log(err)
// })