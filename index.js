//importo il modulo http 
//(modulo base presente in node di default) per creare un web server.
var http = require('http'); //con require importo il modulo
//il modulo è referenziato dalla variabile 'http'
var mydateMod = require('./app_modules/MyDateModule');

var ago = require('s-ago'); //importiamo il modulo
var startupDate;


//inizializzo il server e lo metto in ascolto:
//definisco una funzione anonima che sarà usata come callback dal nostro server ed invocata ad ogni request in arrivo.
var myServer = http.createServer(function(req,res){ 
	//i due oggetti req e res che il server passerà alla nostra callback
	//conterranno rispettivamente la request e la response.
	//la request è un oggetto che contiene tutti i dati relativi alla richiesta in entrata.
	//la response è un oggetto che conterrà tutti i dati relativi alla risposta ritornata dal nostro server
	
	res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
	res.write('Hello Node!<br>');
	res.write(mydateMod.MyDateTime()+'<br>');
	res.write('Server started '+ago(startupDate));
	res.end();
});

myServer.listen(8080, function(){
	console.log('Server listening on port 8080!');
	startupDate = new Date();	
});