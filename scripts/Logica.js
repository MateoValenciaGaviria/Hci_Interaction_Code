class Logica {

    constructor(app) {
        this.app = app;
        this.precio = 1;

        this.pantalla = -1;
        this.inicio = app.loadImage("./Img/Pantalla Inicial.png");
        this.intro = app.loadImage("./Img/Introducción.png");
        this.intro2 = app.loadImage("./Img/Introducción dos.png");
        this.intro3= app.loadImage("./Img/Introducción tres.png");
        this.intro4 = app.loadImage("./Img/Introducción cuatro.png");
        this.intro5 = app.loadImage("./Img/Introducción cinco.png");
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

        if (this.pantalla == 0 && this.contador > 500) {
            this.pantalla = 1;
        }

        if (this.pantalla == 1 && this.contador > 750) {
            this.pantalla = 2;
        }

        if (this.pantalla == 2 && this.contador > 1000) {
            this.pantalla = 3;
        }

        if (this.pantalla == 3 && this.contador > 1250) {
            this.pantalla = 4;
        }

        if (this.pantalla == 4 && this.contador > 1500) {
            this.pantalla = 5;
        }



        switch (this.pantalla) {
            case 0:
                this.app.imageMode(this.app.CORNER);
                this.app.image(this.inicio, 0, 0);
                break;
            
            case 1:
                this.app.imageMode(this.app.CORNER);
                this.app.image(this.intro, 0, 0);
            break;

            case 2:
                this.app.imageMode(this.app.CORNER);
                this.app.image(this.intro2, 0, 0);
            break;

            case 3:
                this.app.imageMode(this.app.CORNER);
                this.app.image(this.intro3, 0, 0);
            break;

            case 4:
                this.app.imageMode(this.app.CORNER);
                this.app.image(this.intro4, 0, 0);
            break;

            case 5:
                this.app.imageMode(this.app.CORNER);
                this.app.image(this.intro5, 0, 0);
            break;
            default:
                break;
        }
        
    }

    
    
    
    
    
}

