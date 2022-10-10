<template>
<div class="el">
    <h1 class="r">r</h1>
    <div class="world">

        <img class="logo" src="../assets/pexels-ash-376464.jpg" />

        <div class="mouse">

            <h1 class="to">Resto<span>world</span></h1>
            <button class="sign">Sign-up</button>
            <button class="elite">Elite Account</button>

            <select class="type">
                <option>Select Bussiness Type?</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>

            <input type="text" placeholder="First Name" class="name" />
            <input type="text" placeholder="Last Name" class="name" />

            <select class="country">
                <option>Countery</option>
                <option>India</option>
                <option>Russia</option>
                <option>USA</option>
            </select>

            <select class="state">
                <option>State</option>
                <option>Uttar Pradesh</option>
                <option>Bhiar</option>
                <option>Assam</option>
            </select>

            <select class="city">
                <option>City</option>
                <option>Gorakhpur</option>
                <option>Banars</option>
                <option>Gola</option>
            </select>

            <input type="text" placeholder="Enter your E-mail address" class="emai" />

            <input type="password" placeholder="Password" class="password" />

            <input type="password" placeholder="Conform Password" class="password" />

            <input type="checkbox" id="Remember me" value="Remember me" class="checkbox" />
            <label for="Remember me">By creating an account you agree our <span class="term">Terms & Privacy</span></label>

            <button class="ro">
                <router-link to="/Elite" class="roh"> Sign Up</router-link>
            </button>

            <p class="have">Have an account?<span class="term">Login</span></p>

        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'HomeUp'
}
</script>

<style>
.r {
    color: white;
    visibility: hidden;
}

.el {
    background-image: url(../assets/pexels-life-of-pix-67468.jpg);
    height: 745px;
    margin-top: -22px;
}

.world {
    background-color: blueviolet;
    width: 754px;
    height: 400px;
    border: 2px solid;
    margin-left: 336px;
    margin-top: 152px;
    padding-left: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
}

.mouse {
    margin-left: 311px;
    margin-top: -404px;
    width: 425px;
}

.logo {
    width: 311px;
    height: 400px;
}

.to {
    margin-left: -18px;
}

.sign {
    width: 194px;
    padding: 4px;
    margin-left: 20px;
    cursor: pointer;
    margin-bottom: 7px;
}

.sign:hover {
    background-color: blue;
    color: white;
    border: none;
}

.elite {
    width: 194px;
    padding: 4px;
    cursor: pointer;
    margin-bottom: 7px;
}

.type {
    width: 388px;
    margin-left: 20px;
    padding: 3px;
    margin-bottom: 7px;
    border-radius: 4px;
}

.name {
    width: 176px;
    margin-left: 20px;
    padding: 4px;
    border-radius: 4px;
    border: none;
    margin-bottom: 7px;
}

.country {
    margin-left: 20px;
    border-radius: 4px;
    border: none;
    width: 126px;
    padding: 3px;
    padding-left: 10px;
    margin-bottom: 7px;
}

.state {
    margin-left: 5px;
    border-radius: 4px;
    border: none;
    width: 126px;
    padding: 3px;
    padding-left: 10px;
    margin-bottom: 7px;
}

.city {
    margin-left: 5px;
    border-radius: 4px;
    border: none;
    width: 125px;
    padding: 3px;
    padding-left: 10px;
    margin-bottom: 7px;
}

.emai {
    width: 380px;
    border: none;
    margin-left: 20px;
    padding: 3px;
    margin-bottom: 8px;
    border-radius: 4px;
}

.password {
    width: 380px;
    border: none;
    margin-left: 20px;
    padding: 3px;
    margin-bottom: 7px;
    border-radius: 4px;
}

.checkbox {
    border: none;
    margin-left: 20px;
    padding: 3px;
    margin-bottom: 6px;
    border-radius: 4px;
}

label {
    margin-bottom: 6px;
}

.term {
    color: blue;
    cursor: pointer;
}

.up {
    width: 386px;
    border: none;
    margin-left: 20px;
    padding: 3px;
    margin-bottom: 7px;
    border-radius: 4px;
    background-color: rgb(31, 31, 159);
    color: white;
}

.ro {
    background-color: blue;
    width: 389px;
    color: white;
    margin-left: 20px;
    padding: 7px;
    border: none;
    border-radius: 3px;
    margin-top: 7px;
    cursor: pointer;
}

.roh {
    color: white;
    text-decoration: none;
}

.have {
    text-align: center;
}
</style>
