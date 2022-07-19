<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/license.svg" alt="License"></a>
</p>

<p align="center"><a href="https://ru.reactjs.org/" target="_blank" style="font-size: 60px;color: #61dafb;">React</a></p>



## How to use project
1. `composer install`

2. `npm i` or `yarn add`

3. first terminal `npm run watch` or yarn (your webpack autocompile files)

4. second terminal `php artisan serve` (you php webserver backend)


## Separation front, admin and api
1. Front - it's on react.js + ts
2. Admin panel - vue 3 + ts
3. API - laravel framework

We configure webpack for build react and vue for another folders:

`mix.ts("resources/js/react/index.tsx", "public/js").react().ts("resources/js/vue/main.ts", "public/control/js").vue();`

build react bundles(js) to folder `public/js` - front side

build vue bundles(js) to folder `public/control/js` - admin side

## React APP
React application - it's classic SPA, we are using redux, router. I try to use typescript for development on react.

## Vue APP
Vue 3 Single-Page Application that uses the Composition API, it's just test vue3+ts.

## Laravel
Classic use laravel framework and REST API for to front and admin sides
