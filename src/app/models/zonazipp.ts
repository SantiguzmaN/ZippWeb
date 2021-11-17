// Este modelo representa a un documento o entidad de la colección zonazipps 
// de documentos de la base de datos

export class ZonaZipp{
    constructor(
        public _id: string,
        public city: string,
        public address: string,
        public number_spaces: number,
        public price: number,

        public big_type: boolean,
        public medium_type: boolean,
        public small_type: boolean,
        
        public electric_station: boolean,
        public leave_key: boolean,
        public total_hours_day: boolean,
        public cctv: boolean,
        public phone: boolean,
        public roofed: boolean,
        public security_guard: boolean,

        public car_type: boolean,
        public motorcycle_type: boolean,
        public bike_type: boolean,	    

        public image_zona_zipp: string,
        public image_bill: string,
        public estado_zonazipp: boolean,
        public horary: string,
        public lat: number,
        public lng: number,
        public score: number,
        public description: string,
        public fechaC:string,
    ){}
}