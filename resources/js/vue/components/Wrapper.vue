<template>
    <div class="main-wrapper">
        <h2>{{ title }}</h2>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "Wrapper",
    props: {
        title: {
            Type: String,
            Default: '',
        }
    }
}
</script>

<style scoped>
    .main-wrapper {
        padding: 15px 0;
    }

    .main-wrapper h2 {
        margin-bottom: 15px;
        font-size: 18px;
        font-weight: bold;
        text-transform: uppercase;
    }
</style>
