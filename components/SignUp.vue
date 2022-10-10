<template>
<div class="elista">
    <div class="resto">

        <h1>Resto<span>World</span></h1>
        <p class="restoworld">
            "Restoworld is the first global community specially designed for the Restaurant Industy.This is the first global platform head from the industry can find each and every kind of"
        </p>
    </div>
    <div class="rest">
        <h1>Resto<span>World</span></h1>
        <p class="here">Restaurant Industry is Here</p>
        <p class="billions">Billions of Restaurant,Vendors ,Chefs,Captains are waiting for you at Restaurant</p>

        <div class="register">
            <input type="text" placeholder="Enter your E-mail address" class="enter" />
            <br />
            <input type="password" placeholder="Password" class="enter" />
            <br />
            <input type="checkbox" id="Remember me" value="Remember me" class="checkbox" />
            <label for="Remember me">Remember me</label>
        </div>
        <p class="forgot">
            <router-link to="/Submit">Forgot password ?</router-link>
        </p>
        <button>
            <router-link to="/HomeUp" class="roh"> Sign in</router-link>
        </button>

        <p class="don">Don't have an account?<span class="re">Register here</span></p>
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

span {
    color: red;
}

h1 {
    color: blue;
    padding-left: 41px;
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

.rest h1 {
    margin-left: 194px;
}

.here {
    color: blue;
    text-align: center;
    margin-left: 85px;
    margin-top: -14px;
}

.billions {
    margin-left: 170px;
    color: gray;
    width: 318px;
    margin-top: -8px;
}

.enter {
    width: 500px;
    padding-left: 20px;
    margin-left: 20px;
    margin-bottom: 5px;
}

.checkbox {
    margin-left: 20px;
}

.forgot {
    color: blue;
    margin-left: 426px;
    margin-top: -18px;
    cursor: pointer;
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
