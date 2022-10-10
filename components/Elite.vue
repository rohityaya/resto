<template>
<div class="elis">
<h1 class="r">r</h1>
    <div class="world">

        <img class="logo" src="../assets/pexels-ash-376464.jpg" />

        <div class="mous">

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

            <input type="password" placeholder="Password" class="confirm" />

            <input type="password" placeholder="Conform Password" class="confirm" />

            <input type="text" placeholder="GST No. Option" class="gst" />
            <input type="number" placeholder="Moblie No." class="gst" />

            <div class="use">
                <label for="use">Use Coupon:</label>
                <input type="fix" value="REST100" class="coupon" />
                <button class="copy">Copy</button>

                <input type="text" placeholder="Coupon Code" class="code" />
                <button class="apply">Apply</button>

            </div>

            <input type="text" value="Rs.999" class="rs" />

            <button class="up">
                <router-link to="/Submit" class="roh"> Sign Up</router-link>
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
.elis{
    background-image: url(../assets/pexels-life-of-pix-67468.jpg);
    height: 750px;
    margin-top: -22px;
}

.mous {
    margin-left: 311px;
    margin-top: -425px;
    width: 425px;
}

.elite:hover {
    background-color: blue;
    color: white;
    border: none;
}

.confirm {
    width: 177px;
    margin-left: 20px;
    border-radius: 4px;
    border: none;
    padding: 3px;
    margin-bottom: 6px;
}

.gst {
    width: 177px;
    margin-left: 20px;
    border-radius: 4px;
    border: none;
    padding: 3px;
    margin-bottom: 6px;
}

.use {
    margin-left: 20px;
    margin-bottom: 6px;

}

.coupon {
    width: 120px;
    border-radius: 4px;
    border: 1px dotted;
    padding: 3px;
    margin-bottom: 6px;
}

.copy {
    background-color: blue;
    border-radius: 4px;
    border: none;
    margin-left: -45px;
    color: white;
    cursor: pointer;
}

.code {
    margin-left: 11px;
    margin-bottom: 7px;
    width: 159px;
    border-radius: 4px;
    padding: 3px;
    border: none;
}

.apply {
    background-color: blue;
    color: white;
    cursor: pointer;
    border: none;
    margin-left: -39px;
    padding: 3px;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
}

.rs {
    width: 380px;
    border: none;
    margin-left: 20px;
    padding: 3px;
    padding-left: 10px;
    margin-bottom: 7px;
    border-radius: 4px;
}
</style>
