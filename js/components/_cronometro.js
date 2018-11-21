class Cronometro {
    constructor() {
        this.initCronometro();
    }

    initCronometro() {
        $(".cronometro__time").countdowntimer({
            dateAndTime : "2018/11/22 00:00:00",
            size : "lg",
            regexpMatchFormat: "([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})",
            regexpReplaceWith: "<span>$2<strong>HRS</strong></span> : <span>$3<strong>MIN</strong></span> : <span>$4<strong>SEG</strong></span>"
        });
    }
}

window.Cronometro = new Cronometro();