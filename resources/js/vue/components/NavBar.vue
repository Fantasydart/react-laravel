<template>
<nav class="nav">
    <div class="nav-top">
        <img src="../assets/pizza-logo.svg" alt="">
        <div class="nav-top__desc">
            <h3>Система управления</h3>
            <h4>React PIZZA</h4>
        </div>
    </div>
    <div class="nav-center">
        <ul>
            <li><router-link to="/admin" class="navbar-brand">Главная</router-link></li>
            <li><router-link to="/admin/category" class="navbar-brand">Категории</router-link></li>
            <li><router-link to="/admin/goods" class="navbar-brand">Товары</router-link></li>
        </ul>
    </div>
    <div class="nav-bottom"></div>
</nav>
</template>

<script>
export default {
    name: "NavBar"
}
</script>

<style scoped>
    .nav {
        width: 300px;
        height: 100vh;
        box-shadow: 0 1px 3px rgba(255, 255, 255, 0.12), 0 1px 2px rgba(255, 255, 255, 0.24);
        background-color:#3c3c3c;
    }

    .nav-top {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px 10px;
        background-color: #3c3c3c;
        width: 100%;
        box-shadow: 0 1px 3px rgba(255, 255, 255, 0.12), 0 1px 2px rgba(255, 255, 255, 0.24);
    }

    .nav-top img {
        width: 50px;
        height: auto;
        margin-right: 20px;
    }

    .nav-top h3,  .nav-top h4 {
        margin: 0;
        padding: 0;
        color: white;
    }

    .nav-center ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .nav-center ul li {
        margin: 0;
        padding: 0;
    }

    .nav-center ul li a {
        color: white;
        width: 100%;
        padding: 14px 20px;
        display: flex;
        align-items: center;
        box-shadow: 0 1px 3px rgba(255, 255, 255, 0.12), 0 1px 2px rgba(255, 255, 255, 0.24);
        transition: 0.5s;
    }

    .nav-center ul li:hover a {
        padding: 14px 25px;
    }
    
    .nav-center ul li a.router-link-active {
        background-color: #4a4a4a;
    }

</style>
