let month = (prompt ("Gib' hier bitte deinen Geburtsmonat an (1 für Januer - 12 für Dezember)"));

var januar = 1;
var februar = 2;
var maerz = 3;
var april = 4;
var mai = 5;
var juni = 6;
var juli = 7;
var august = 8;
var september = 9;
var oktober = 10;
var november = 11;
var dezember = 12;


month == januar?
document.write(`
<figure>
    <div class="img">
        <img src="/img/jan_icon_aquarius.png" alt="Januar">
    </div>
    <figcaption>
        <p>Dein Sternzeichen ist Wassermann</p>
    </figcaption>
</figure>
`) : null

month == februar?
document.write(`
<figure>
    <div class="img">
        <img src="/img/feb_icon_pisces.png" alt="Februar">
    </div>
    <figcaption>
        <p>Dein Sternzeichen ist Fische</p>
    </figcaption>
</figure>
`) : null

month == maerz?
document.write(`
<figure>
    <div class="img">
        <img src="/img/mar_icon_aries.png" alt="März">
    </div>
    <figcaption>
        <p>Dein Sternzeichen ist Widder</p>
    </figcaption>
</figure>
`) : null

month == april?
document.write(`
<figure>
    <div class="img">
        <img src="/img/apr_icon_taurus.png" alt="April">
    </div>
    <figcaption>
        <p>Dein Sternzeichen ist Stier</p>
    </figcaption>
</figure>
`) : null

month == mai?
document.write(`
<figure>
    <div class="img">
        <img src="/img/may_icon_gemini.png" alt="Mai">
    </div>
    <figcaption>
        <p>Dein Sternzeichen ist Zwilling</p>
    </figcaption>
</figure>
`) : null

month == juni?
document.write(`
<figure>
    <div class="img">
        <img src="img/jun_icon_cancer.png" alt="Juni">
    </div>
    <figcaption>
        <p>Dein Sternzeichen ist Krebs</p>
    </figcaption>
</figure>
`) : null

month == juli?
document.write(`
<figure>
    <div class="img">
        <img src="img/jul_icon_leo.png" alt="April">
    </div>
    <figcaption>
        <p>Dein Sternzeichen ist Löwe</p>
    </figcaption>
</figure>
`) : null

month == august?
document.write(`
<figure>
    <div class="img">
        <img src="img/aug_icon_virgo.png" alt="August">
    </div>
    <figcaption>
        <p>Dein Sternzeichen ist Jungfrau</p>
    </figcaption>
</figure>
`) : null

month == september?
document.write(`
<figure>
    <div class="img">
        <img src="img/sep_icon_libra.png" alt="April">
    </div>
    <figcaption>
        <p>Dein Sternzeichen ist Waage</p>
    </figcaption>
</figure>
`) : null

month == oktober?
document.write(`
<figure>
    <div class="img">
        <img src="img/oct_icon_scorpio.png" alt="Oktober">
    </div>
    <figcaption>
        <p>Dein Sternzeichen ist Scorpion</p>
    </figcaption>
</figure>
`) : null

month == november?
document.write(`
<figure>
    <div class="img">
        <img src="img/nov_icon_sagittarius.png" alt="November">
    </div>
    <figcaption>
        <p>Dein Sternzeichen ist Schütze</p>
    </figcaption>
</figure>
`) : null

month == dezember?
document.write(`
<figure>
    <div class="img">
        <img src="img/dec_icon_capricorn.png" alt="Dezember">
    </div>
    <figcaption>
        <p>Dein Sternzeichen ist Steinbock</p>
    </figcaption>
</figure>
`) : null


