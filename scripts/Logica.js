class Logica {

    constructor(app) {
        this.app = app;
        this.precio = 1;

        this.pantalla = 7;
        this.inicio = app.loadImage("./img/Pantalla Inicial.png");
        this.intro = app.loadImage("./img/Introducción.png");
        this.intro2 = app.loadImage("./img/Introducción dos.png");
        this.intro3 = app.loadImage("./img/Introducción tres.png");
        this.intro4 = app.loadImage("./img/Introducción cuatro.png");
        this.intro5 = app.loadImage("./img/Introducción cinco.png");
        this.btnNext = new Elemento(this.app, ("./img/BotonPasar.png"), 1149, 654);
        this.modal1 = app.loadImage("./img/modal.png");


        this.instrucciones = app.loadImage("./img/Instrucciones.png");
        this.meses = app.loadImage("./img/Meses.png");
        this.comprar = app.loadImage("./img/ModalparaComprar.png");
        this.vender = app.loadImage("./img/ModalparaVender.png");
        this.fuente = app.loadFont("./fonts/RobotoCondensed-Bold.ttf");
        this.fuente2 = app.loadFont("./fonts/RobotoCondensed-Regular.ttf");


        this.btnCtdBarril1 = new Elemento(this.app, "./img/Group 21.png", 184, 209);
        this.btnCtdBarril2 = new Elemento(this.app, "./img/Group 22.png", 324, 209);
        this.btnCtdBarril3 = new Elemento(this.app, "./img/Group 23.png", 466, 209);
        this.btnCtdBarril4 = new Elemento(this.app, "./img/Group 24.png", 607, 209);
        this.btnCtdBarril5 = new Elemento(this.app, "./img/Group 25.png", 184, 281);
        this.btnCtdBarril6 = new Elemento(this.app, "./img/Group 26.png", 324, 281);
        this.btnCtdBarril7 = new Elemento(this.app, "./img/Group 27.png", 466, 281);
        this.btnCtdBarril8 = new Elemento(this.app, "./img/Group 28.png", 607, 281);
        this.btnCtdBarril9 = new Elemento(this.app, "./img/Group 29.png", 184, 353);
        this.btnCtdBarril10 = new Elemento(this.app, "./img/Group 30.png", 324, 353);
        this.btnCtdBarril11 = new Elemento(this.app, "./img/Group 31.png", 466, 353);
        this.btnCtdBarril12 = new Elemento(this.app, "./img/Group 32.png", 607, 353);
        this.btnCtdBarril13 = new Elemento(this.app, "./img/Group 33.png", 324, 425);
        this.btnCtdBarril14 = new Elemento(this.app, "./img/Group 34.png", 466, 425);
        this.btnCtdBarril15 = new Elemento(this.app, "./img/Group 35.png", 607, 425);
        this.btnCtdBarril16 = new Elemento(this.app, "./img/Group 36.png", 184, 425);
        this.btnCtdBarril17 = new Elemento(this.app, "./img/Group 37.png", 324, 497);
        this.btnCtdBarril18 = new Elemento(this.app, "./img/Group 38.png", 184, 497);
        this.btnCtdBarril19 = new Elemento(this.app, "./img/Group 39.png", 466, 497);
        this.btnCtdBarril20 = new Elemento(this.app, "./img/Group 40.png", 607, 497);


        this.modalB1 = false;
        this.modalB2 = false;
        this.modalB3 = false;
        this.modalB4 = false;
        this.modalB5 = false;
        this.contador = 0;

        this.dinero = 100000;


        this.barrilesD = 1000;

        this.total;

        this.valorI = 50;
        this.valor;
        this.porcentaje;
        this.valorCalculado;
        this.valorMes;

        this.compra;
        this.vende;
    }



    mouse() {

        if (this.btnCtdBarril1.isSobre && this.compra == true) {
            this.dinero - (this.valorMes * 100);
        }
        if (this.btnCtdBarril2.isSobre && this.compra == true) {
            this.dinero - (this.valorMes * 200);
        }
        if (this.btnCtdBarril3.isSobre && this.compra == true) {
            this.dinero - (this.valorMes * 300);
        }
        if (this.btnCtdBarril4.isSobre && this.compra == true) {
            this.dinero - (this.valorMes * 400);
        }
        if (this.btnCtdBarril5.isSobre && this.compra == true) {
            this.dinero - (this.valorMes * 500);
        }
        if (this.btnCtdBarril6.isSobre && this.compra == true) {
            this.dinero - (this.valorMes * 600);
        }
        if (this.btnCtdBarril7.isSobre && this.compra == true) {
            this.dinero - (this.valorMes * 700);
        }
        if (this.btnCtdBarril8.isSobre && this.compra == true) {
            this.dinero - (this.valorMes * 800);
        }
        if (this.btnCtdBarril9.isSobre && this.compra == true) {
            this.dinero - (this.valorMes * 900);
        }
        if (this.btnCtdBarril10.isSobre && this.compra == true) {
            this.dinero - (this.valorMes * 1000);
        }
        if (this.btnCtdBarril11.isSobre && this.compra == true) {
            this.dinero - (this.valorMes * 1100);
        }
        if (this.btnCtdBarril12.isSobre && this.compra == true) {
            this.dinero - (this.valorMes * 1200);
        }
        if (this.btnCtdBarril13.isSobre && this.compra == true) {
            this.dinero - (this.valorMes * 1300);
        }
        if (this.btnCtdBarril14.isSobre && this.compra == true) {
            this.dinero - (this.valorMes * 1400);
        }
        if (this.btnCtdBarril15.isSobre && this.compra == true) {
            this.dinero - (this.valorMes * 1500);
        }
        if (this.btnCtdBarril16.isSobre && this.compra == true) {
            this.dinero - (this.valorMes * 1600);
        }
        if (this.btnCtdBarril17.isSobre && this.compra == true) {
            this.dinero - (this.valorMes * 1700);
        }
        if (this.btnCtdBarril18.isSobre && this.compra == true) {
            this.dinero - (this.valorMes * 1800);
        }
        if (this.btnCtdBarril19.isSobre && this.compra == true) {
            this.dinero - (this.valorMes * 1900);
        }
        if (this.btnCtdBarril20.isSobre && this.compra == true) {
            this.dinero - (this.valorMes * 2000);
        }

        if (this.btnCtdBarril1.isSobre && this.vende == true) {
            this.dinero + (this.valorMes * 100);
        }
        if (this.btnCtdBarril2.isSobre && this.vende == true) {
            this.dinero + (this.valorMes * 200);
        }
        if (this.btnCtdBarril3.isSobre && this.vende == true) {
            this.dinero + (this.valorMes * 300);
        }
        if (this.btnCtdBarril4.isSobre && this.vende == true) {
            this.dinero + (this.valorMes * 400);
        }
        if (this.btnCtdBarril5.isSobre && this.vende == true) {
            this.dinero + (this.valorMes * 500);
        }
        if (this.btnCtdBarril6.isSobre && this.vende == true) {
            this.dinero + (this.valorMes * 600);
        }
        if (this.btnCtdBarril7.isSobre && this.vende == true) {
            this.dinero + (this.valorMes * 700);
        }
        if (this.btnCtdBarril8.isSobre && this.vende == true) {
            this.dinero + (this.valorMes * 800);
        }
        if (this.btnCtdBarril9.isSobre && this.vende == true) {
            this.dinero + (this.valorMes * 900);
        }
        if (this.btnCtdBarril10.isSobre && this.vende == true) {
            this.dinero + (this.valorMes * 1000);
        }
        if (this.btnCtdBarril11.isSobre && this.vende == true) {
            this.dinero + (this.valorMes * 1100);
        }
        if (this.btnCtdBarril12.isSobre && this.vende == true) {
            this.dinero + (this.valorMes * 1200);
        }
        if (this.btnCtdBarril13.isSobre && this.vende == true) {
            this.dinero + (this.valorMes * 1300);
        }
        if (this.btnCtdBarril14.isSobre && this.vende == true) {
            this.dinero + (this.valorMes * 1400);
        }
        if (this.btnCtdBarril15.isSobre && this.vende == true) {
            this.dinero + (this.valorMes * 1500);
        }
        if (this.btnCtdBarril16.isSobre && this.vende == true) {
            this.dinero + (this.valorMes * 1600);
        }
        if (this.btnCtdBarril17.isSobre && this.vende == true) {
            this.dinero + (this.valorMes * 1700);
        }
        if (this.btnCtdBarril18.isSobre && this.vende == true) {
            this.dinero + (this.valorMes * 1800);
        }
        if (this.btnCtdBarril19.isSobre && this.vende == true) {
            this.dinero + (this.valorMes * 1900);
        }
        if (this.btnCtdBarril20.isSobre && this.vende == true) {
            this.dinero + (this.valorMes * 2000);
        }
        switch (this.pantalla) {
            case 3:
                if (this.app.mouseX > 500 && this.app.mouseX < 777 && this.app.mouseY > 520 && this.app.mouseY < 575) {
                    this.pantalla = 4;
                }
                break;

            case 4:
                /* if (this.app.mouseX > 1018 && this.app.mouseX < 1200 && this.app.mouseY > 650 && this.app.mouseY < 720) {
                     this.pantalla = 5;
                 }*/

                if (this.btnNext.isSobre()) {
                    this.pantalla = 5;
                }
                break;

            case 6:
                if (this.app.mouseX > 522 && this.app.mouseX < 772 && this.app.mouseY > 627 && this.app.mouseY < 697) {
                    this.pantalla = 7;
                }
                break;

            case 7:
                if (this.app.mouseX > 508 && this.app.mouseX < 758 && this.app.mouseY > 632 && this.app.mouseY < 702) {
                    this.pantalla++;
                }

                if (this.app.mouseX > 63 && this.app.mouseX < 313 && this.app.mouseY > 632 && this.app.mouseY < 702) {
                    this.compra = true;
                }

                if (this.app.mouseX > 954 && this.app.mouseX < 1204 && this.app.mouseY > 632 && this.app.mouseY < 702) {
                    this.vende = true;
                }

                if (this.app.mouseX > 366 && this.app.mouseX < 616 && this.app.mouseY > 567 && this.app.mouseY < 686) {
                    this.vende = false;
                    this.compra = false;
                }
                break;

            case 8:
                if (this.app.mouseX > 508 && this.app.mouseX < 758 && this.app.mouseY > 632 && this.app.mouseY < 702) {
                    this.pantalla++;
                }
                if (this.app.mouseX > 63 && this.app.mouseX < 313 && this.app.mouseY > 632 && this.app.mouseY < 702) {
                    this.compra = true;
                }

                if (this.app.mouseX > 954 && this.app.mouseX < 1204 && this.app.mouseY > 632 && this.app.mouseY < 702) {
                    this.vende = true;
                }


                if (this.app.mouseX > 366 && this.app.mouseX < 616 && this.app.mouseY > 567 && this.app.mouseY < 686) {
                    this.vende = false;
                    this.compra = false;
                }
                break;

            case 9:
                if (this.app.mouseX > 508 && this.app.mouseX < 758 && this.app.mouseY > 632 && this.app.mouseY < 702) {
                    this.pantalla++;
                }
                if (this.app.mouseX > 63 && this.app.mouseX < 313 && this.app.mouseY > 632 && this.app.mouseY < 702) {
                    this.compra = true;
                }

                if (this.app.mouseX > 954 && this.app.mouseX < 1204 && this.app.mouseY > 632 && this.app.mouseY < 702) {
                    this.vende = true;
                }


                if (this.app.mouseX > 366 && this.app.mouseX < 616 && this.app.mouseY > 567 && this.app.mouseY < 686) {
                    this.vende = false;
                    this.compra = false;
                }
                break;

            case 10:
                if (this.app.mouseX > 508 && this.app.mouseX < 758 && this.app.mouseY > 632 && this.app.mouseY < 702) {
                    this.pantalla++;
                }
                if (this.ap.mouseX > 63 && this.app.mouseX < 313 && this.app.mouseY > 632 && this.app.mouseY < 702) {
                    this.compra = true;
                }

                if (this.app.mouseX > 954 && this.app.mouseX < 1204 && this.app.mouseY > 632 && this.app.mouseY < 702) {
                    this.vende = true;
                }


                if (this.app.mouseX > 366 && this.app.mouseX < 616 && this.app.mouseY > 567 && this.app.mouseY < 686) {
                    this.vende = false;
                    this.compra = false;
                }
                break;

            case 11:
                if (this.app.mouseX > 508 && this.app.mouseX < 758 && this.app.mouseY > 632 && this.app.mouseY < 702) {
                    this.pantalla++;
                }

                if (this.app.mouseX > 63 && this.app.mouseX < 313 && this.app.mouseY > 632 && this.app.mouseY < 702) {
                    this.compra = true;
                }

                if (this.app.mouseX > 954 && this.app.mouseX < 1204 && this.app.mouseY > 632 && this.app.mouseY < 702) {
                    this.vende = true;
                }


                if (this.app.mouseX > 366 && this.app.mouseX < 616 && this.app.mouseY > 567 && this.app.mouseY < 686) {
                    this.vende = false;
                    this.compra = false;
                }
                break;

            case 12:
                if (this.app.mouseX > 508 && this.app.mouseX < 758 && this.app.mouseY > 632 && this.app.mouseY < 702) {
                    this.pantalla++;
                }

                if (this.app.mouseX > 63 && this.app.mouseX < 313 && this.app.mouseY > 632 && this.app.mouseY < 702) {
                    this.compra = true;
                }

                if (this.app.mouseX > 954 && this.app.mouseX < 1204 && this.app.mouseY > 632 && this.app.mouseY < 702) {
                    this.vende = true;
                }


                if (this.app.mouseX > 366 && this.app.mouseX < 616 && this.app.mouseY > 567 && this.app.mouseY < 686) {
                    this.vende = false;
                    this.compra = false;
                }
                break;

            case 13:
                if (this.app.mouseX > 508 && this.app.mouseX < 758 && this.app.mouseY > 632 && this.app.mouseY < 702) {
                    this.pantalla++;
                }

                if (this.app.mouseX > 63 && this.app.mouseX < 313 && this.app.mouseY > 632 && this.app.mouseY < 702) {
                    this.compra = true;
                }

                if (this.app.mouseX > 954 && this.app.mouseX < 1204 && this.app.mouseY > 632 && this.app.mouseY < 702) {
                    this.vende = true;
                }


                if (this.app.mouseX > 366 && this.app.mouseX < 616 && this.app.mouseY > 567 && this.app.mouseY < 686) {
                    this.vende = false;
                    this.compra = false;
                }
                break;

            case 14:
                if (this.app.mouseX > 508 && this.app.mouseX < 758 && this.app.mouseY > 632 && this.app.mouseY < 702) {
                    this.pantalla++;
                }
                if (this.app.mouseX > 63 && this.app.mouseX < 313 && this.app.mouseY > 632 && this.app.mouseY < 702) {
                    this.compra = true;
                }

                if (this.app.mouseX > 954 && this.app.mouseX < 1204 && this.app.mouseY > 632 && this.app.mouseY < 702) {
                    this.vende = true;
                }


                if (this.app.mouseX > 366 && this.app.mouseX < 616 && this.app.mouseY > 567 && this.app.mouseY < 686) {
                    this.vende = false;
                    this.compra = false;
                }
                break;

            case 15:
                if (this.app.mouseX > 63 && this.app.mouseX < 313 && this.app.mouseY > 632 && this.app.mouseY < 702) {
                    this.compra = true;
                }

                if (this.app.mouseX > 954 && this.app.mouseX < 1204 && this.app.mouseY > 632 && this.app.mouseY < 702) {
                    this.vende = true;
                }


                if (this.app.mouseX > 366 && this.app.mouseX < 616 && this.app.mouseY > 567 && this.app.mouseY < 686) {
                    this.vende = false;
                    this.compra = false;
                }
                break;

            default:
                break;
        }











    }


    pintar() {

        this.app.textFont(this.fuente2);
        this.app.textAlign(this.app.LEFTH);
        this.app.textSize(24);
        if (this.contar == true) {
            this.contador++;
        } else {
            this.contador
        }
        this.contar = true;

        console.log(this.contador);
        console.log(this.pantalla);
        console.log(this.valorMes);
        console.log(this.dinero);



        if (this.contador == 250) {
            this.pantalla = 0

        }

        if (this.pantalla == 0 && this.contador > 750) {
            this.pantalla = 1;
        }

        if (this.pantalla == 1 && this.contador > 1250) {
            this.pantalla = 2;
        }

        if (this.pantalla == 2 && this.contador > 1750) {
            this.pantalla = 3;
        }

        if (this.pantalla == 3) {
            this.contar = false;
        }

        if (this.pantalla == 5) {
            this.contar = true;
        }

        if (this.pantalla == 5 && this.contador > 2250) {
            this.pantalla = 6;
        }

        if (this.pantalla == 6) {
            this.contar = false;
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

            case 6:
                this.app.imageMode(this.app.CORNER);
                this.app.image(this.instrucciones, 0, 0);
                break;

            case 7:
                this.app.imageMode(this.app.CORNER);
                this.app.image(this.meses, 0, 0);
                this.app.text(": " + this.valorMes + " " + "USD", 230, 55);
                this.app.text(": " + this.barrilesD + " " + "USD", 485, 55);
                this.app.text(": " + this.dinero + " " + "USD", 775, 55);
                this.app.text(": " + this.total + " " + "USD", 1030, 55);
                this.precio = 1;

                if (this.compra) {
                    this.app.imageMode(this.app.CORNER);
                    this.app.image(this.comprar, 0, 0);

                    this.btnCtdBarril1.pintar();
                    this.btnCtdBarril2.pintar();
                    this.btnCtdBarril3.pintar();
                    this.btnCtdBarril4.pintar();
                    this.btnCtdBarril5.pintar();
                    this.btnCtdBarril6.pintar();
                    this.btnCtdBarril7.pintar();
                    this.btnCtdBarril8.pintar();
                    this.btnCtdBarril9.pintar();
                    this.btnCtdBarril10.pintar();
                    this.btnCtdBarril11.pintar();
                    this.btnCtdBarril12.pintar();
                    this.btnCtdBarril13.pintar();
                    this.btnCtdBarril14.pintar();
                    this.btnCtdBarril15.pintar();
                    this.btnCtdBarril16.pintar();
                    this.btnCtdBarril17.pintar();
                    this.btnCtdBarril18.pintar();
                    this.btnCtdBarril19.pintar();
                    this.btnCtdBarril20.pintar();
                }

                if (this.vende) {
                    this.app.imageMode(this.app.CORNER);
                    this.app.image(this.vender, 0, 0);
                    this.btnCtdBarril1.pintar();
                    this.btnCtdBarril2.pintar();
                    this.btnCtdBarril3.pintar();
                    this.btnCtdBarril4.pintar();
                    this.btnCtdBarril5.pintar();
                    this.btnCtdBarril6.pintar();
                    this.btnCtdBarril7.pintar();
                    this.btnCtdBarril8.pintar();
                    this.btnCtdBarril9.pintar();
                    this.btnCtdBarril10.pintar();
                    this.btnCtdBarril11.pintar();
                    this.btnCtdBarril12.pintar();
                    this.btnCtdBarril13.pintar();
                    this.btnCtdBarril14.pintar();
                    this.btnCtdBarril15.pintar();
                    this.btnCtdBarril16.pintar();
                    this.btnCtdBarril17.pintar();
                    this.btnCtdBarril18.pintar();
                    this.btnCtdBarril19.pintar();
                    this.btnCtdBarril20.pintar();
                }
                break;

            case 8:
                this.app.imageMode(this.app.CORNER);
                this.app.image(this.meses, 0, 0);
                this.app.text(": " + this.valorMes + " " + "USD", 230, 55);
                this.app.text(": " + this.barrilesD + " " + "USD", 485, 55);
                this.app.text(": " + this.dinero + " " + "USD", 775, 55);
                this.app.text(": " + this.total + " " + "USD", 1030, 55);
                this.precio = 2;

                if (this.compra) {
                    this.app.imageMode(this.app.CORNER);
                    this.app.image(this.comprar, 0, 0);
                    this.btnCtdBarril1.pintar();
                    this.btnCtdBarril2.pintar();
                    this.btnCtdBarril3.pintar();
                    this.btnCtdBarril4.pintar();
                    this.btnCtdBarril5.pintar();
                    this.btnCtdBarril6.pintar();
                    this.btnCtdBarril7.pintar();
                    this.btnCtdBarril8.pintar();
                    this.btnCtdBarril9.pintar();
                    this.btnCtdBarril10.pintar();
                    this.btnCtdBarril11.pintar();
                    this.btnCtdBarril12.pintar();
                    this.btnCtdBarril13.pintar();
                    this.btnCtdBarril14.pintar();
                    this.btnCtdBarril15.pintar();
                    this.btnCtdBarril16.pintar();
                    this.btnCtdBarril17.pintar();
                    this.btnCtdBarril18.pintar();
                    this.btnCtdBarril19.pintar();
                    this.btnCtdBarril20.pintar();
                }

                if (this.vende) {
                    this.app.imageMode(this.app.CORNER);
                    this.app.image(this.vender, 0, 0);
                    this.btnCtdBarril1.pintar();
                    this.btnCtdBarril2.pintar();
                    this.btnCtdBarril3.pintar();
                    this.btnCtdBarril4.pintar();
                    this.btnCtdBarril5.pintar();
                    this.btnCtdBarril6.pintar();
                    this.btnCtdBarril7.pintar();
                    this.btnCtdBarril8.pintar();
                    this.btnCtdBarril9.pintar();
                    this.btnCtdBarril10.pintar();
                    this.btnCtdBarril11.pintar();
                    this.btnCtdBarril12.pintar();
                    this.btnCtdBarril13.pintar();
                    this.btnCtdBarril14.pintar();
                    this.btnCtdBarril15.pintar();
                    this.btnCtdBarril16.pintar();
                    this.btnCtdBarril17.pintar();
                    this.btnCtdBarril18.pintar();
                    this.btnCtdBarril19.pintar();
                    this.btnCtdBarril20.pintar();
                }

                break;

            case 9:
                this.app.imageMode(this.app.CORNER);
                this.app.image(this.meses, 0, 0);
                this.app.text(": " + this.valorMes + " " + "USD", 230, 55);
                this.app.text(": " + this.barrilesD + " " + "USD", 485, 55);
                this.app.text(": " + this.dinero + " " + "USD", 775, 55);
                this.app.text(": " + this.total + " " + "USD", 1030, 55);
                this.precio = 3;

                if (this.compra) {
                    this.app.imageMode(this.app.CORNER);
                    this.app.image(this.comprar, 0, 0);
                    this.btnCtdBarril1.pintar();
                    this.btnCtdBarril2.pintar();
                    this.btnCtdBarril3.pintar();
                    this.btnCtdBarril4.pintar();
                    this.btnCtdBarril5.pintar();
                    this.btnCtdBarril6.pintar();
                    this.btnCtdBarril7.pintar();
                    this.btnCtdBarril8.pintar();
                    this.btnCtdBarril9.pintar();
                    this.btnCtdBarril10.pintar();
                    this.btnCtdBarril11.pintar();
                    this.btnCtdBarril12.pintar();
                    this.btnCtdBarril13.pintar();
                    this.btnCtdBarril14.pintar();
                    this.btnCtdBarril15.pintar();
                    this.btnCtdBarril16.pintar();
                    this.btnCtdBarril17.pintar();
                    this.btnCtdBarril18.pintar();
                    this.btnCtdBarril19.pintar();
                    this.btnCtdBarril20.pintar();
                }

                if (this.vende) {
                    this.app.imageMode(this.app.CORNER);
                    this.app.image(this.vender, 0, 0);
                    this.btnCtdBarril1.pintar();
                    this.btnCtdBarril2.pintar();
                    this.btnCtdBarril3.pintar();
                    this.btnCtdBarril4.pintar();
                    this.btnCtdBarril5.pintar();
                    this.btnCtdBarril6.pintar();
                    this.btnCtdBarril7.pintar();
                    this.btnCtdBarril8.pintar();
                    this.btnCtdBarril9.pintar();
                    this.btnCtdBarril10.pintar();
                    this.btnCtdBarril11.pintar();
                    this.btnCtdBarril12.pintar();
                    this.btnCtdBarril13.pintar();
                    this.btnCtdBarril14.pintar();
                    this.btnCtdBarril15.pintar();
                    this.btnCtdBarril16.pintar();
                    this.btnCtdBarril17.pintar();
                    this.btnCtdBarril18.pintar();
                    this.btnCtdBarril19.pintar();
                    this.btnCtdBarril20.pintar();
                }
                break;

            case 10:
                this.app.imageMode(this.app.CORNER);
                this.app.image(this.meses, 0, 0);
                this.app.text(": " + this.valorMes + " " + "USD", 230, 55);
                this.app.text(": " + this.barrilesD + " " + "USD", 485, 55);
                this.app.text(": " + this.dinero + " " + "USD", 775, 55);
                this.app.text(": " + this.total + " " + "USD", 1030, 55);
                this.precio = 4;

                if (this.compra) {
                    this.app.imageMode(this.app.CORNER);
                    this.app.image(this.comprar, 0, 0);
                    this.btnCtdBarril1.pintar();
                    this.btnCtdBarril2.pintar();
                    this.btnCtdBarril3.pintar();
                    this.btnCtdBarril4.pintar();
                    this.btnCtdBarril5.pintar();
                    this.btnCtdBarril6.pintar();
                    this.btnCtdBarril7.pintar();
                    this.btnCtdBarril8.pintar();
                    this.btnCtdBarril9.pintar();
                    this.btnCtdBarril10.pintar();
                    this.btnCtdBarril11.pintar();
                    this.btnCtdBarril12.pintar();
                    this.btnCtdBarril13.pintar();
                    this.btnCtdBarril14.pintar();
                    this.btnCtdBarril15.pintar();
                    this.btnCtdBarril16.pintar();
                    this.btnCtdBarril17.pintar();
                    this.btnCtdBarril18.pintar();
                    this.btnCtdBarril19.pintar();
                    this.btnCtdBarril20.pintar();
                }

                if (this.vende) {
                    this.app.imageMode(this.app.CORNER);
                    this.app.image(this.vender, 0, 0);
                    this.btnCtdBarril1.pintar();
                    this.btnCtdBarril2.pintar();
                    this.btnCtdBarril3.pintar();
                    this.btnCtdBarril4.pintar();
                    this.btnCtdBarril5.pintar();
                    this.btnCtdBarril6.pintar();
                    this.btnCtdBarril7.pintar();
                    this.btnCtdBarril8.pintar();
                    this.btnCtdBarril9.pintar();
                    this.btnCtdBarril10.pintar();
                    this.btnCtdBarril11.pintar();
                    this.btnCtdBarril12.pintar();
                    this.btnCtdBarril13.pintar();
                    this.btnCtdBarril14.pintar();
                    this.btnCtdBarril15.pintar();
                    this.btnCtdBarril16.pintar();
                    this.btnCtdBarril17.pintar();
                    this.btnCtdBarril18.pintar();
                    this.btnCtdBarril19.pintar();
                    this.btnCtdBarril20.pintar();
                }
                break;

            case 11:
                this.app.imageMode(this.app.CORNER);
                this.app.image(this.meses, 0, 0);
                this.app.text(": " + this.valorMes + " " + "USD", 230, 55);
                this.app.text(": " + this.barrilesD + " " + "USD", 485, 55);
                this.app.text(": " + this.dinero + " " + "USD", 775, 55);
                this.app.text(": " + this.total + " " + "USD", 1030, 55);
                this.precio = 5;

                if (this.compra) {
                    this.app.imageMode(this.app.CORNER);
                    this.app.image(this.comprar, 0, 0);
                    this.btnCtdBarril1.pintar();
                    this.btnCtdBarril2.pintar();
                    this.btnCtdBarril3.pintar();
                    this.btnCtdBarril4.pintar();
                    this.btnCtdBarril5.pintar();
                    this.btnCtdBarril6.pintar();
                    this.btnCtdBarril7.pintar();
                    this.btnCtdBarril8.pintar();
                    this.btnCtdBarril9.pintar();
                    this.btnCtdBarril10.pintar();
                    this.btnCtdBarril11.pintar();
                    this.btnCtdBarril12.pintar();
                    this.btnCtdBarril13.pintar();
                    this.btnCtdBarril14.pintar();
                    this.btnCtdBarril15.pintar();
                    this.btnCtdBarril16.pintar();
                    this.btnCtdBarril17.pintar();
                    this.btnCtdBarril18.pintar();
                    this.btnCtdBarril19.pintar();
                    this.btnCtdBarril20.pintar();
                }

                if (this.vende) {
                    this.app.imageMode(this.app.CORNER);
                    this.app.image(this.vender, 0, 0);
                    this.btnCtdBarril1.pintar();
                    this.btnCtdBarril2.pintar();
                    this.btnCtdBarril3.pintar();
                    this.btnCtdBarril4.pintar();
                    this.btnCtdBarril5.pintar();
                    this.btnCtdBarril6.pintar();
                    this.btnCtdBarril7.pintar();
                    this.btnCtdBarril8.pintar();
                    this.btnCtdBarril9.pintar();
                    this.btnCtdBarril10.pintar();
                    this.btnCtdBarril11.pintar();
                    this.btnCtdBarril12.pintar();
                    this.btnCtdBarril13.pintar();
                    this.btnCtdBarril14.pintar();
                    this.btnCtdBarril15.pintar();
                    this.btnCtdBarril16.pintar();
                    this.btnCtdBarril17.pintar();
                    this.btnCtdBarril18.pintar();
                    this.btnCtdBarril19.pintar();
                    this.btnCtdBarril20.pintar();
                }
                break;

            case 12:
                this.app.imageMode(this.app.CORNER);
                this.app.image(this.meses, 0, 0);
                this.app.text(": " + this.valorMes + " " + "USD", 230, 55);
                this.app.text(": " + this.barrilesD + " " + "USD", 485, 55);
                this.app.text(": " + this.dinero + " " + "USD", 775, 55);
                this.app.text(": " + this.total + " " + "USD", 1030, 55);
                this.precio = 6;

                if (this.compra) {
                    this.app.imageMode(this.app.CORNER);
                    this.app.image(this.comprar, 0, 0);
                    this.btnCtdBarril1.pintar();
                    this.btnCtdBarril2.pintar();
                    this.btnCtdBarril3.pintar();
                    this.btnCtdBarril4.pintar();
                    this.btnCtdBarril5.pintar();
                    this.btnCtdBarril6.pintar();
                    this.btnCtdBarril7.pintar();
                    this.btnCtdBarril8.pintar();
                    this.btnCtdBarril9.pintar();
                    this.btnCtdBarril10.pintar();
                    this.btnCtdBarril11.pintar();
                    this.btnCtdBarril12.pintar();
                    this.btnCtdBarril13.pintar();
                    this.btnCtdBarril14.pintar();
                    this.btnCtdBarril15.pintar();
                    this.btnCtdBarril16.pintar();
                    this.btnCtdBarril17.pintar();
                    this.btnCtdBarril18.pintar();
                    this.btnCtdBarril19.pintar();
                    this.btnCtdBarril20.pintar();
                }

                if (this.vende) {
                    this.app.imageMode(this.app.CORNER);
                    this.app.image(this.vender, 0, 0);
                    this.btnCtdBarril1.pintar();
                    this.btnCtdBarril2.pintar();
                    this.btnCtdBarril3.pintar();
                    this.btnCtdBarril4.pintar();
                    this.btnCtdBarril5.pintar();
                    this.btnCtdBarril6.pintar();
                    this.btnCtdBarril7.pintar();
                    this.btnCtdBarril8.pintar();
                    this.btnCtdBarril9.pintar();
                    this.btnCtdBarril10.pintar();
                    this.btnCtdBarril11.pintar();
                    this.btnCtdBarril12.pintar();
                    this.btnCtdBarril13.pintar();
                    this.btnCtdBarril14.pintar();
                    this.btnCtdBarril15.pintar();
                    this.btnCtdBarril16.pintar();
                    this.btnCtdBarril17.pintar();
                    this.btnCtdBarril18.pintar();
                    this.btnCtdBarril19.pintar();
                    this.btnCtdBarril20.pintar();
                }
                break;

            case 13:
                this.app.imageMode(this.app.CORNER);
                this.app.image(this.meses, 0, 0);
                this.app.text(": " + this.valorMes + " " + "USD", 230, 55);
                this.app.text(": " + this.barrilesD + " " + "USD", 485, 55);
                this.app.text(": " + this.dinero + " " + "USD", 775, 55);
                this.app.text(": " + this.total + " " + "USD", 1030, 55);
                this.precio = 7;

                if (this.compra) {
                    this.app.imageMode(this.app.CORNER);
                    this.app.image(this.comprar, 0, 0);
                    this.btnCtdBarril1.pintar();
                    this.btnCtdBarril2.pintar();
                    this.btnCtdBarril3.pintar();
                    this.btnCtdBarril4.pintar();
                    this.btnCtdBarril5.pintar();
                    this.btnCtdBarril6.pintar();
                    this.btnCtdBarril7.pintar();
                    this.btnCtdBarril8.pintar();
                    this.btnCtdBarril9.pintar();
                    this.btnCtdBarril10.pintar();
                    this.btnCtdBarril11.pintar();
                    this.btnCtdBarril12.pintar();
                    this.btnCtdBarril13.pintar();
                    this.btnCtdBarril14.pintar();
                    this.btnCtdBarril15.pintar();
                    this.btnCtdBarril16.pintar();
                    this.btnCtdBarril17.pintar();
                    this.btnCtdBarril18.pintar();
                    this.btnCtdBarril19.pintar();
                    this.btnCtdBarril20.pintar();
                }

                if (this.vende) {
                    this.app.imageMode(this.app.CORNER);
                    this.app.image(this.vender, 0, 0);
                    this.btnCtdBarril1.pintar();
                    this.btnCtdBarril2.pintar();
                    this.btnCtdBarril3.pintar();
                    this.btnCtdBarril4.pintar();
                    this.btnCtdBarril5.pintar();
                    this.btnCtdBarril6.pintar();
                    this.btnCtdBarril7.pintar();
                    this.btnCtdBarril8.pintar();
                    this.btnCtdBarril9.pintar();
                    this.btnCtdBarril10.pintar();
                    this.btnCtdBarril11.pintar();
                    this.btnCtdBarril12.pintar();
                    this.btnCtdBarril13.pintar();
                    this.btnCtdBarril14.pintar();
                    this.btnCtdBarril15.pintar();
                    this.btnCtdBarril16.pintar();
                    this.btnCtdBarril17.pintar();
                    this.btnCtdBarril18.pintar();
                    this.btnCtdBarril19.pintar();
                    this.btnCtdBarril20.pintar();
                }
                break;

            case 14:
                this.app.imageMode(this.app.CORNER);
                this.app.image(this.meses, 0, 0);
                this.app.text(": " + this.valorMes + " " + "USD", 230, 55);
                this.app.text(": " + this.barrilesD + " " + "USD", 485, 55);
                this.app.text(": " + this.dinero + " " + "USD", 775, 55);
                this.app.text(": " + this.total + " " + "USD", 1030, 55);
                this.precio = 8;

                if (this.compra) {
                    this.app.imageMode(this.app.CORNER);
                    this.app.image(this.comprar, 0, 0);
                    this.btnCtdBarril1.pintar();
                    this.btnCtdBarril2.pintar();
                    this.btnCtdBarril3.pintar();
                    this.btnCtdBarril4.pintar();
                    this.btnCtdBarril5.pintar();
                    this.btnCtdBarril6.pintar();
                    this.btnCtdBarril7.pintar();
                    this.btnCtdBarril8.pintar();
                    this.btnCtdBarril9.pintar();
                    this.btnCtdBarril10.pintar();
                    this.btnCtdBarril11.pintar();
                    this.btnCtdBarril12.pintar();
                    this.btnCtdBarril13.pintar();
                    this.btnCtdBarril14.pintar();
                    this.btnCtdBarril15.pintar();
                    this.btnCtdBarril16.pintar();
                    this.btnCtdBarril17.pintar();
                    this.btnCtdBarril18.pintar();
                    this.btnCtdBarril19.pintar();
                    this.btnCtdBarril20.pintar();
                }

                if (this.vende) {
                    this.app.imageMode(this.app.CORNER);
                    this.app.image(this.vender, 0, 0);
                    this.btnCtdBarril1.pintar();
                    this.btnCtdBarril2.pintar();
                    this.btnCtdBarril3.pintar();
                    this.btnCtdBarril4.pintar();
                    this.btnCtdBarril5.pintar();
                    this.btnCtdBarril6.pintar();
                    this.btnCtdBarril7.pintar();
                    this.btnCtdBarril8.pintar();
                    this.btnCtdBarril9.pintar();
                    this.btnCtdBarril10.pintar();
                    this.btnCtdBarril11.pintar();
                    this.btnCtdBarril12.pintar();
                    this.btnCtdBarril13.pintar();
                    this.btnCtdBarril14.pintar();
                    this.btnCtdBarril15.pintar();
                    this.btnCtdBarril16.pintar();
                    this.btnCtdBarril17.pintar();
                    this.btnCtdBarril18.pintar();
                    this.btnCtdBarril19.pintar();
                    this.btnCtdBarril20.pintar();
                }

                break;

            case 15:
                this.app.imageMode(this.app.CORNER);
                this.app.image(this.meses, 0, 0);
                this.app.text(": " + this.valorMes + " " + "USD", 230, 55);
                this.app.text(": " + this.barrilesD + " " + "USD", 485, 55);
                this.app.text(": " + this.dinero + " " + "USD", 775, 55);
                this.app.text(": " + this.total + " " + "USD", 1030, 55);
                this.precio = 9;

                if (this.compra) {
                    this.app.imageMode(this.app.CORNER);
                    this.app.image(this.comprar, 0, 0);
                    this.btnCtdBarril1.pintar();
                    this.btnCtdBarril2.pintar();
                    this.btnCtdBarril3.pintar();
                    this.btnCtdBarril4.pintar();
                    this.btnCtdBarril5.pintar();
                    this.btnCtdBarril6.pintar();
                    this.btnCtdBarril7.pintar();
                    this.btnCtdBarril8.pintar();
                    this.btnCtdBarril9.pintar();
                    this.btnCtdBarril10.pintar();
                    this.btnCtdBarril11.pintar();
                    this.btnCtdBarril12.pintar();
                    this.btnCtdBarril13.pintar();
                    this.btnCtdBarril14.pintar();
                    this.btnCtdBarril15.pintar();
                    this.btnCtdBarril16.pintar();
                    this.btnCtdBarril17.pintar();
                    this.btnCtdBarril18.pintar();
                    this.btnCtdBarril19.pintar();
                    this.btnCtdBarril20.pintar();
                }

                if (this.vende) {
                    this.app.imageMode(this.app.CORNER);
                    this.app.image(this.vender, 0, 0);
                    this.btnCtdBarril1.pintar();
                    this.btnCtdBarril2.pintar();
                    this.btnCtdBarril3.pintar();
                    this.btnCtdBarril4.pintar();
                    this.btnCtdBarril5.pintar();
                    this.btnCtdBarril6.pintar();
                    this.btnCtdBarril7.pintar();
                    this.btnCtdBarril8.pintar();
                    this.btnCtdBarril9.pintar();
                    this.btnCtdBarril10.pintar();
                    this.btnCtdBarril11.pintar();
                    this.btnCtdBarril12.pintar();
                    this.btnCtdBarril13.pintar();
                    this.btnCtdBarril14.pintar();
                    this.btnCtdBarril15.pintar();
                    this.btnCtdBarril16.pintar();
                    this.btnCtdBarril17.pintar();
                    this.btnCtdBarril18.pintar();
                    this.btnCtdBarril19.pintar();
                    this.btnCtdBarril20.pintar();
                }
                break;


            default:
                break;
        }

        switch (this.precio) {
            case 1:
                this.porcentaje = 0.12;
                this.valor = this.valorI + (this.porcentaje * this.valorI);
                this.total = this.dinero + (this.barrilesD * this.valorMes);
                this.valorMes = this.valor.toFixed(2);

                break;

            case 2:
                this.porcentaje = 0;
                this.valorCalculado = this.valor + (this.porcentaje * this.valor)
                this.total = this.dinero + (this.barrilesD * this.valorMes);
                this.valorMes = this.valorCalculado.toFixed(2);
                break;

            case 3:
                this.porcentaje = 0.30;
                this.valorCalculado = this.valor - (this.porcentaje * this.valor)
                this.total = this.dinero + (this.barrilesD * this.valorMes);
                this.valorMes = this.valorCalculado.toFixed(2);
                break;

            case 4:
                this.porcentaje = 0.10;
                this.valorCalculado = this.valor + (this.porcentaje * this.valor)
                this.total = this.dinero + (this.barrilesD * this.valorMes);
                this.valorMes = this.valorCalculado.toFixed(2);
                break;

            case 5:
                this.porcentaje = 0.08;
                this.valorCalculado = this.valor - (this.porcentaje * this.valor)
                this.total = this.dinero + (this.barrilesD * this.valorMes);
                this.valorMes = this.valorCalculado.toFixed(2);
                break;

            case 6:
                this.porcentaje = 0.22;
                this.valorCalculado = this.valor + (this.porcentaje * this.valor)
                this.total = this.dinero + (this.barrilesD * this.valorMes);
                this.valorMes = this.valorCalculado.toFixed(2);
                break;

            case 7:
                this.porcentaje = 0.08;
                this.valorCalculado = this.valor + (this.porcentaje * this.valor)
                this.total = this.dinero + (this.barrilesD * this.valorMes);
                this.valorMes = this.valorCalculado.toFixed(2);
                break;

            case 8:
                this.porcentaje = 0;
                this.valorCalculado = this.valor + (this.porcentaje * this.valor)
                this.total = this.dinero + (this.barrilesD * this.valorMes);
                this.valorMes = this.valorCalculado.toFixed(2);
                break;

            case 9:
                this.porcentaje = 0.10;
                this.valorCalculado = this.valor - (this.porcentaje * this.valor)
                this.total = this.dinero + (this.barrilesD * this.valorMes);
                this.valorMes = this.valorCalculado.toFixed(2);
                break;
            default:
                break;
        }

        this.app.text("X:" + this.app.mouseX + " " + "Y:" + this.app.mouseY, this.app.mouseX, this.app.mouseY);

        if (this.app.mouseX > 511 && this.app.mouseX < 522 && this.app.mouseY > 339 && this.app.mouseY < 350 && this.pantalla == 4) {
            this.app.image(this.modal1, 195, 155);
            this.modalB1 = true;
        }

        if (this.app.mouseX > 629 && this.app.mouseX < 640 && this.app.mouseY > 130 && this.app.mouseY < 141 && this.pantalla == 4) {
            this.app.image(this.modal1, 313, 132);
            this.modalB2 = true;
        }

        if (this.app.mouseX > 740 && this.app.mouseX < 751 && this.app.mouseY > 370 && this.app.mouseY < 381 && this.pantalla == 4) {
            this.app.image(this.modal1, 424, 182);
            this.modalB3 = true;
        }

        if (this.app.mouseX > 855 && this.app.mouseX < 866 && this.app.mouseY > 258 && this.app.mouseY < 269 && this.pantalla == 4) {
            this.app.image(this.modal1, 540, 72);
            this.modalB4 = true;
        }

        if (this.app.mouseX > 970 && this.app.mouseX < 981 && this.app.mouseY > 154 && this.app.mouseY < 165 && this.pantalla == 4) {
            this.app.image(this.modal1, 653, 162);
            this.modalB5 = true;
        }

        if (this.pantalla == 4 && this.modalB1 == true && this.modalB2 == true && this.modalB3 == true && this.modalB4 == true && this.modalB5 == true) {
            this.btnNext.pintar();
        }
        /*this.app.image(this.btnNext, 1018, 650);
*/


    }




}

