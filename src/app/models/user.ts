// Este modelo representa a un documento o entidad de la colección users
// de documentos de la base de datos

export class User{
	constructor(
		public _id: string,
		public cedula: string,
		public name: string,
		public email: string,
		public celular: string,
		public password: string,
		public role: string,
		public image: string,
		public fechaC:string,
		public numcuenta:string,
		public banco:string
	){}
}