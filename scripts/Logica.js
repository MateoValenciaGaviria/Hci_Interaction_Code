class Logica {

    constructor(app) {

        this.app = app;

        this.precio = 1;

        this.pantalla = 0;

        this.inicio = app.loadImage("./img/Pantalla Inicial.png");
        this.intro = app.loadImage("./img/Introducción.png");
        this.intro3 = app.loadImage("./img/Introducción tres.png");
        this.intro4 = app.loadImage("./img/Introducción cuatro.png");
        this.intro5 = app.loadImage("./img/Introducción cinco.png");
        this.intro6 = app.loadImage("./img/Introducción seis.png");
        this.final = app.loadImage("./img/Pantalla Final.png");

        this.btnNext = new Elemento(this.app, ("./img/BotonPasar.png"), 1149, 654);

        this.modal1 = app.loadImage("./img/modal.png");
        this.modal2 = app.loadImage("./img/modal2.png");
        this.modal3 = app.loadImage("./img/modal3.png");
        this.modal4 = app.loadImage("./img/modal4.png");
        this.modal5 = app.loadImage("./img/modal5.png");

        this.instrucciones = app.loadImage("./img/Instrucciones.png");

        this.meses = app.loadImage("./img/Meses.png");
        this.mes1 = app.loadImage("./img/Mes1.png");
        this.mes2 = app.loadImage("./img/Mes2.png");
        this.mes3 = app.loadImage("./img/Mes3.png");
        this.mes4 = app.loadImage("./img/Mes4.png");
        this.mes5 = app.loadImage("./img/Mes5.png");
        this.mes6 = app.loadImage("./img/Mes6.png");
        this.mes7 = app.loadImage("./img/Mes7.png");
        this.mes8 = app.loadImage("./img/Mes8.png");
        this.mes9 = app.loadImage("./img/Mes9.png");

        this.comprar = app.loadImage("./img/ModalparaComprar.png");
        this.vender = app.loadImage("./img/ModalparaVender.png");

        this.fuente = app.loadFont("./fonts/RobotoCondensed-Bold.ttf");
        this.fuente2 = app.loadFont("./fonts/RobotoCondensed-Regular.ttf");

        this.btnVenderActivado = app.loadImage("./img/BotonVenderActivado.png");
        this.btnVenderDesactivado = app.loadImage("./img/BotonVenderDesactivado.png");
        this.btnComprarActivado = app.loadImage("./img/BotonComprarActivado.png");
        this.btnComprarDesactivado = app.loadImage("./img/BotonComprarDesactivado.png");

        this.btnJugar = new Elemento(this.app, ("./img/BotonJugar.png"), 640, 652);

        this.botonesActivados = [
            this.btnCtdBarril1 = new Elemento(this.app, "./img/btn100.png", 184, 209),
            this.btnCtdBarril2 = new Elemento(this.app, "./img/btn200.png", 324, 209),
            this.btnCtdBarril3 = new Elemento(this.app, "./img/btn300.png", 466, 209),
            this.btnCtdBarril4 = new Elemento(this.app, "./img/btn400.png", 607, 209),
            this.btnCtdBarril5 = new Elemento(this.app, "./img/btn500.png", 184, 281),
            this.btnCtdBarril6 = new Elemento(this.app, "./img/btn600.png", 324, 281),
            this.btnCtdBarril7 = new Elemento(this.app, "./img/btn700.png", 466, 281),
            this.btnCtdBarril8 = new Elemento(this.app, "./img/btn800.png", 607, 281),
            this.btnCtdBarril9 = new Elemento(this.app, "./img/btn900.png", 184, 353),
            this.btnCtdBarril10 = new Elemento(this.app, "./img/btn1000.png", 324, 353),
            this.btnCtdBarril11 = new Elemento(this.app, "./img/btn1100.png", 466, 353),
            this.btnCtdBarril12 = new Elemento(this.app, "./img/btn1200.png", 607, 353),
            this.btnCtdBarril13 = new Elemento(this.app, "./img/btn1300.png", 184, 425),
            this.btnCtdBarril14 = new Elemento(this.app, "./img/btn1400.png", 324, 425),
            this.btnCtdBarril15 = new Elemento(this.app, "./img/btn1500.png", 466, 425),
            this.btnCtdBarril16 = new Elemento(this.app, "./img/btn1600.png", 607, 425),
            this.btnCtdBarril17 = new Elemento(this.app, "./img/btn1700.png", 184, 497),
            this.btnCtdBarril18 = new Elemento(this.app, "./img/btn1800.png", 324, 497),
            this.btnCtdBarril19 = new Elemento(this.app, "./img/btn1900.png", 466, 497),
            this.btnCtdBarril20 = new Elemento(this.app, "./img/btn2000.png", 607, 497)
        ];

        this.botonesDesactivados = [
            this.btnCtdBarril1B = new Elemento(this.app, "./img/btn100B.png", 184, 209),
            this.btnCtdBarril2B = new Elemento(this.app, "./img/btn200B.png", 324, 209),
            this.btnCtdBarril3B = new Elemento(this.app, "./img/btn300B.png", 466, 209),
            this.btnCtdBarril4B = new Elemento(this.app, "./img/btn400B.png", 607, 209),
            this.btnCtdBarril5B = new Elemento(this.app, "./img/btn500B.png", 184, 281),
            this.btnCtdBarril6B = new Elemento(this.app, "./img/btn600B.png", 324, 281),
            this.btnCtdBarril7B = new Elemento(this.app, "./img/btn700B.png", 466, 281),
            this.btnCtdBarril8B = new Elemento(this.app, "./img/btn800B.png", 607, 281),
            this.btnCtdBarril9B = new Elemento(this.app, "./img/btn900B.png", 184, 353),
            this.btnCtdBarril10B = new Elemento(this.app, "./img/btn1000B.png", 324, 353),
            this.tnCtdBarril11B = new Elemento(this.app, "./img/btn1100B.png", 466, 353),
            this.btnCtdBarril12B = new Elemento(this.app, "./img/btn1200B.png", 607, 353),
            this.btnCtdBarril13B = new Elemento(this.app, "./img/btn1300B.png", 184, 425),
            this.btnCtdBarril14B = new Elemento(this.app, "./img/btn1400B.png", 324, 425),
            this.btnCtdBarril15B = new Elemento(this.app, "./img/btn1500B.png", 466, 425),
            this.btnCtdBarril16B = new Elemento(this.app, "./img/btn1600B.png", 607, 425),
            this.btnCtdBarril17B = new Elemento(this.app, "./img/btn1700B.png", 184, 497),
            this.btnCtdBarril18B = new Elemento(this.app, "./img/btn1800B.png", 324, 497),
            this.btnCtdBarril19B = new Elemento(this.app, "./img/btn1900B.png", 466, 497),
            this.btnCtdBarril20B = new Elemento(this.app, "./img/btn2000B.png", 607, 497)
        ];

        this.booleansBotones = [
            this.btnCtdBarril1Active = false,
            this.btnCtdBarril2Active = false,
            this.btnCtdBarril3Active = false,
            this.btnCtdBarril4Active = false,
            this.btnCtdBarril5Active = false,
            this.btnCtdBarril6Active = false,
            this.btnCtdBarril7Active = false,
            this.btnCtdBarril8Active = false,
            this.btnCtdBarril9Active = false,
            this.btnCtdBarril10Active = false,
            this.btnCtdBarril11Active = false,
            this.btnCtdBarril12Active = false,
            this.btnCtdBarril13Active = false,
            this.btnCtdBarril14Active = false,
            this.btnCtdBarril15Active = false,
            this.btnCtdBarril16Active = false,
            this.btnCtdBarril17Active = false,
            this.btnCtdBarril18Active = false,
            this.btnCtdBarril19Active = false,
            this.btnCtdBarril20Active = false
        ];

        this.modalB1 = false;
        this.modalB2 = false;
        this.modalB3 = false;
        this.modalB4 = false;
        this.modalB5 = false;
        this.contador = 0;

        this.dinero = 100000;
        this.cantidadBarriles = 1000;
        this.precioBarril = 50;
        this.dineroTotal = this.dinero + (this.cantidadBarriles * this.precioBarril);

        this.compra = false;
        this.barrilesComprados = 0;
        this.vende = false;
        this.barrilesVendidos = 0;
        this.pasa = false;
    }

    mouse() {

        for (let i = 0; i < 20; i++) {
            if (this.compra) {
                if (this.botonesActivados[i].isSobre() && this.booleansBotones[i]) {
                    this.barrilesComprados = 100 + (i * 100);
                }
            }

            if (this.vende) {
                if (this.botonesActivados[i].isSobre() && this.booleansBotones[i]) {
                    this.barrilesVendidos = 100 + (i * 100);
                }
            }
        }

        switch (this.pantalla) {
            case 2:
                if (this.app.mouseX > 500 && this.app.mouseX < 777 && this.app.mouseY > 520 && this.app.mouseY < 575) {
                    this.pantalla = 3;
                }
                break;

            case 3:
                if (this.btnNext.isSobre()) {
                    this.contar = true;
                    this.pantalla = 4;
                }
                break;

            case 5:
                if (this.app.mouseX > 502 && this.app.mouseX < 777 && this.app.mouseY > 475 && this.app.mouseY < 527) {
                    this.pantalla = 6;
                }
                break;

            case 6:
                if (this.btnJugar.isSobre()) {
                    this.pasa = true;
                    this.precioBarril += this.precioBarril * this.porcentaje;
                }
                break;

            default:
                break;
        }

        if (this.pantalla == 7 || this.pantalla == 8 || this.pantalla == 9 || this.pantalla == 10 || this.pantalla == 11 || this.pantalla == 12 || this.pantalla == 13 || this.pantalla == 14 || this.pantalla == 15) {
            if (this.app.mouseX > 63 && this.app.mouseX < 313 && this.app.mouseY > 632 && this.app.mouseY < 702) {
                this.compra = true;
            }

            if (this.app.mouseX > 954 && this.app.mouseX < 1204 && this.app.mouseY > 632 && this.app.mouseY < 702) {
                this.vende = true;
            }

            if (this.app.mouseX > 508 && this.app.mouseX < 757 && this.app.mouseY > 632 && this.app.mouseY < 702) {
                this.pasa = true;
                this.precioBarril += this.precioBarril * this.porcentaje;
            }

            if (this.vende || this.compra) {
                if (this.app.mouseX > 366 && this.app.mouseX < 615 && this.app.mouseY > 567 && this.app.mouseY < 637) {
                    this.vende = false;
                    this.compra = false;
                    this.barrilesComprados = 0;
                    this.barrilesVendidos = 0;
                }

                if (this.vende && this.barrilesVendidos != 0) {
                    if (this.app.mouseX > 684 && this.app.mouseX < 934 && this.app.mouseY > 567 && this.app.mouseY < 637) {
                        this.dinero += (this.precioBarril * this.barrilesVendidos);
                        this.cantidadBarriles -= this.barrilesVendidos;
                        this.vende = false;
                        this.barrilesVendidos = 0;
                        this.pantalla++;
                        this.precioBarril += this.precioBarril * this.porcentaje;
                    }
                }

                if (this.compra && this.barrilesComprados != 0) {
                    if (this.app.mouseX > 684 && this.app.mouseX < 934 && this.app.mouseY > 567 && this.app.mouseY < 637) {
                        this.dinero -= (this.precioBarril * this.barrilesComprados);
                        this.cantidadBarriles += this.barrilesComprados;
                        this.compra = false;
                        this.barrilesComprados = 0;
                        this.pantalla++;
                        this.precioBarril += this.precioBarril * this.porcentaje;
                    }
                }
                for (let i = 0; i < 20; i++) {
                    this.booleansBotones[i] = false;
                }
            }
        }
    }


    pintar() {

        this.dineroTotal = this.dinero + (this.cantidadBarriles * this.precioBarril);
        this.app.textFont(this.fuente2);
        this.app.textAlign(this.app.LEFTH);
        this.app.textSize(24);
        if (this.contar == true) {
            this.contador++;
        } else {

        }

        this.contar = true;

        console.log(this.contador);
        console.log(this.pantalla);
        console.log(this.dinero);

        this.app.imageMode(this.app.CORNER);
        if (this.pasa) {
            this.pantalla++;
            this.pasa = false;
        }
        switch (this.pantalla) {
            case 0:
                if (this.contador > 300) {
                    this.pantalla = 1;
                }
                this.app.image(this.inicio, 0, 0);
                break;

            case 1:
                if (this.contador > 1250) {
                    this.pantalla = 2;
                }
                this.app.image(this.intro, 0, 0);
                break;

            case 2:
                this.app.image(this.intro3, 0, 0);
                this.contar = false;
                break;

            case 3:
                this.contar = false;
                this.app.image(this.intro4, 0, 0);
                if (this.app.mouseX > 444 && this.app.mouseX < 455 && this.app.mouseY > 342 && this.app.mouseY < 354) {
                    this.app.image(this.modal1, 110, 322);
                    this.modalB1 = true;
                }

                if (this.app.mouseX > 562 && this.app.mouseX < 573 && this.app.mouseY > 140 && this.app.mouseY < 152) {
                    this.app.image(this.modal2, 225, 120);
                    this.modalB2 = true;
                }

                if (this.app.mouseX > 674 && this.app.mouseX < 685 && this.app.mouseY > 372 && this.app.mouseY < 383) {
                    this.app.image(this.modal3, 340, 350);
                    this.modalB3 = true;
                }

                if (this.app.mouseX > 789 && this.app.mouseX < 801 && this.app.mouseY > 263 && this.app.mouseY < 274) {
                    this.app.image(this.modal4, 455, 240);
                    this.modalB4 = true;
                }

                if (this.app.mouseX > 902 && this.app.mouseX < 912 && this.app.mouseY > 164 && this.app.mouseY < 174) {
                    this.app.image(this.modal5, 565, 145);
                    this.modalB5 = true;
                }
                break;

            case 4:
                if (this.contador > 1950) {
                    this.pantalla = 5;
                }
                this.app.image(this.intro5, 0, 0);
                break;

            case 5:
                this.app.image(this.intro6, 0, 0);
                break;

            case 6:
                this.contar = false;
                this.app.image(this.instrucciones, 0, 0);
                this.btnJugar.pintar();
                break;

            case 7:
                this.contar = false;
                this.app.image(this.mes1, 0, 0);
                this.precio = 1;
                break;

            case 8:
                this.app.image(this.mes2, 0, 0);
                this.precio = 2;
                break;

            case 9:
                this.app.image(this.mes3, 0, 0);
                this.precio = 3;
                break;

            case 10:
                this.app.image(this.mes4, 0, 0);
                this.precio = 4;
                break;

            case 11:
                this.app.image(this.mes5, 0, 0);
                this.precio = 5;
                break;

            case 12:
                this.app.image(this.mes6, 0, 0);
                this.precio = 6;
                break;

            case 13:
                this.app.image(this.mes7, 0, 0);
                this.precio = 7;
                break;

            case 14:
                this.app.image(this.mes8, 0, 0);
                this.precio = 8;
                break;

            case 15:
                this.app.image(this.mes9, 0, 0);
                this.precio = 9;
                break;

            case 16:
                this.app.image(this.final, 0, 0);
                this.app.textSize(40);
                this.app.text(150000 + " " + "USD", 270, 570);
                if (this.dineroTotal < 150000) {
                    this.app.fill('rgb(164,2,0)');
                } else if (this.dineroTotal > 150000) {
                    this.app.fill('rgb(0,152,6)');
                }
                this.app.text(this.dineroTotal.toFixed(0) + " " + "USD", 840, 570);
                this.app.fill(0);
                break;

            default:
                break;

        }

        switch (this.precio) {
            case 1:
                this.porcentaje = 0.12;
                break;

            case 2:
                this.porcentaje = 0;
                break;

            case 3:
                this.porcentaje = -0.30;
                break;

            case 4:
                this.porcentaje = +0.10;
                break;

            case 5:
                this.porcentaje = -0.08;
                break;

            case 6:
                this.porcentaje = +0.22;
                break;

            case 7:
                this.porcentaje = +0.08;
                break;

            case 8:
                this.porcentaje = 0;
                break;

            case 9:
                this.porcentaje = -0.10;
                break;
            default:
                break;
        }

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

        if (this.pantalla == 3 && this.modalB1 == true && this.modalB2 == true && this.modalB3 == true && this.modalB4 == true && this.modalB5 == true) {
            this.btnNext.pintar();
        }

        if (this.pantalla == 7 || this.pantalla == 8 || this.pantalla == 9 || this.pantalla == 10 || this.pantalla == 11 || this.pantalla == 12 || this.pantalla == 13 || this.pantalla == 14 || this.pantalla == 15) {
            this.app.image(this.meses, 0, 0);
            this.app.text(": " + this.precioBarril.toFixed(0) + " " + "USD", 230, 55);
            this.app.text(": x " + this.cantidadBarriles, 485, 55);
            this.app.text(": " + this.dinero.toFixed(0) + " " + "USD", 775, 55);
            this.app.text(": " + this.dineroTotal.toFixed(0) + " " + "USD", 1030, 55);

            if (this.compra || this.vende) {

                //Ver que botones sirven para la compra

                this.app.textFont(this.fuente);
                this.app.textSize(40);
                this.app.fill('rgb(12,85,117)');

                if (this.compra) {
                    for (let i = 0; i < 20; i++) {
                        if (this.precioBarril * (100 + (i * 100)) <= this.dinero) {
                            this.booleansBotones[i] = true;
                        }
                    }
                    this.app.image(this.comprar, 0, 0);
                    this.app.text("x " + this.barrilesComprados, 879, 480);
                    if (this.barrilesComprados == 0) {
                        this.app.image(this.btnComprarDesactivado, 674, 561);
                    } else {
                        this.app.image(this.btnComprarActivado, 674, 561);
                    }

                }
                //Ver que botones sirven para la venta
                else if (this.vende) {
                    for (let i = 0; i < 20; i++) {
                        if (this.cantidadBarriles >= 100 + (i * 100)) {
                            this.booleansBotones[i] = true;
                        }
                    }
                    this.app.image(this.vender, 0, 0);
                    this.app.text("x " + this.barrilesVendidos, 879, 520);
                    if (this.barrilesVendidos == 0) {
                        this.app.image(this.btnVenderDesactivado, 674, 561);
                    } else {
                        this.app.image(this.btnVenderActivado, 674, 561);
                    }
                }

                for (let i = 0; i < 20; i++) {
                    if (this.booleansBotones[i]) {
                        this.botonesActivados[i].pintar();
                    } else {
                        this.botonesDesactivados[i].pintar();
                    }
                }
            }
        }
        this.app.text("X:" + this.app.mouseX + " " + "Y:" + this.app.mouseY, this.app.mouseX, this.app.mouseY);
    }
}

