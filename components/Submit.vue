<template>
<div class="elista">
    <div class="resto">

        <h1>Resto<span>World</span></h1>
        <p class="restoworld">
            "Restoworld is the first global community specially designed for the Restaurant Industy.This is the first global platform head from the industry can find each and every kind of"
        </p>
    </div>
    <div class="rest">
        <img src="../assets/jason-leung-mZNRsYE9Qi4-unsplash.jpg" class="ja" />
        <p class="for">Forgot your password?</p>
        <p class="please">Please enter your registered email and we will send you password reset instruction to the email.</p>

        <div class="register">
            <input type="text" placeholder="Enter your E-mail address" class="ema" />
            <br />

        </div>
        <button>
            <router-link to="/Reset" class="roh"> Submit</router-link>
        </button>

        <p class="don">Didn't recive email?<span class="re">Resend</span></p>
    </div>
</div>
</template>

    
<script>
export default {
    name: 'SignUp',

}
</script>

    
<style>
.elista {
    background-image: url(../assets/pexels-life-of-pix-67468.jpg);
    height: 750px;
}

.resto {
    background-color: rgb(159, 106, 115);
    display: inline-block;
    height: 300px;
    width: 300px;
    margin-left: 321px;
    margin-top: 196px;
    padding-top: 20px;
    padding-left: 26px;
}

.ja {
    width: 70px;
    height: 70px;
    margin-left: 265px;
    margin-top: 30px;
    border-radius: 20%;
}

.for {
    color: blue;
    margin-left: 170px;
    font-size: 30px;
    margin-top: 3px;
    font-weight: bold;
    margin-bottom: 6px;
}

.restoworld {
    width: 218px;
    padding-left: 21px;
    word-spacing: 7px;
}

.rest {
    height: 319px;
    width: 565px;
    border: 2px solid red;
    margin-left: 646px;
    margin-top: -322px;
    background-color: purple;
}

.please {
    margin-left: 170px;
    color: gray;
    width: 330px;
    margin-top: 10px;
}

.ema{
    width: 516px;
    border-radius: 4px;
    margin-left: 20px;
    margin-bottom: 23px;
    border: 1px solid gray;
    padding: 5px;
}

.rest button {
    background-color: blue;
    width: 528px;
    color: white;
    margin-left: 20px;
    padding: 7px;
    border: none;
    border-radius: 3px;
    margin-top: -18px;
    cursor: pointer;
}

.roh {
    color: white;
    text-decoration: none;
}

.don {
    margin-left: 170px;
}

.re {
    color: blue;
    cursor: pointer;
}
</style>
