class Logica {

    constructor(app) {
        this.app = app;
        this.precio = 1;

        this.pantalla = -1;
        this.inicio = app.loadImage("./Img/Pantalla Inicial.png");
        this.instrucciones;

        this.contador = 0;


        this.valor;

        switch (this.precio) {
            case 1:
                this.valor = 50;
                break;

            case 2:
                this.valor = 0;
                break;

            case 3:
                this.valor = 0;
                break;

            case 4:
                this.valor = 0;
                break;

            case 5:
                this.valor = 0;
                break;

            case 6:
                this.valor = 0;
                break;

            case 7:
                this.valor = 0;
                break;

            case 8:
                this.valor = 0;
                break;

            case 9:
                this.valor = 0;
                break;
            default:
                break;
        }
    }



    mouse() {

    }


    pintar() {

        this.contador++;
        console.log(this.contador);

        if (this.contador == 250) {
            this.pantalla = 0
           
        }

        if (this.pantalla == 0) {
            this.contador = 250 
        }

        if (condition) {
            
        }
        switch (this.pantalla) {
            case 0:
                this.app.imageMode(this.app.CORNER);
                this.app.image(this.inicio, 0, 0);
                break;

            default:
                break;
        }
        
    }

    
    
    
    
    
}

