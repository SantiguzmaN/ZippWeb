import { User } from "./user";
import { ZonaZipp } from "./zonazipp";
import { UserZipp } from "./userzipp";

export class ReservaZona{
    constructor(
        public placa: string,
        public fecha_inicio: string,
        public fecha_final: string, 
        public tiempo_total: string,
        public estado_reserva: boolean,
        public valor_total: number,
        public zonazipp: ZonaZipp,
        public userzonazipp: UserZipp,
        public user: User
    ){}
}