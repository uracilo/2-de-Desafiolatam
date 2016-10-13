console.log('test');

function TELEFONO(numero, marca, color){
	this.numero = "55-45-99-33-22"
	this.marca = marca
	this.color= color
	this.llamar = function(MARCANDO){
		console.log(MARCANDO.phone)
		MARCANDO.LLAMADO++
		return MARCANDO.LLAMADO
	}
}

function MARCANDO(phone){
	this.phone = "ring"
	this.LLAMANDO = 0 

}

var persona1 = new TELEFONO("nokia","azul")
persona1.llamar()

telefonos = ["telefono1","telefono2","telefono3","telefono4"]
