export class Educacion {
    id!: number;
    nombreE: string;
    descripcionE: string;
    finalE: string;

    constructor(nombreE: string, descripcionE: string, finalE: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.finalE = finalE;
    }
}
