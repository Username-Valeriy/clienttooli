<template>
    <div class="sidebar" data-image="../assets/img/sidebar-5.jpg">
        <!--
    Tip 1: You can change the color of the sidebar using: data-color="purple | blue | green | orange | red"

    Tip 2: you can also add an image using data-image tag
-->
        <div class="sidebar-wrapper">
            <div class="logo">
                <nuxt-link to="/" class="simple-text">
                    TooliCat
                </nuxt-link>
            </div>
            <ul class="nav">
                <li class="nav-item active">
                    <nuxt-link :to="{ name: 'admin' }" class="nav-link">
                        <i class="nc-icon nc-chart-pie-35"></i>
                        <p>Dashboard</p>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/admin/users" class="nav-link">
                        <i class="nc-icon nc-circle-09"></i>
                        <p>Пользователи</p>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/admin/services/сategories" class="nav-link">
                        <i class="nc-icon nc-circle-09"></i>
                        <p>Категории</p>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/admin/services" class="nav-link">
                        <i class="nc-icon nc-circle-09"></i>
                        <p>Сервисы</p>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/admin/reviews" class="nav-link">
                        <i class="nc-icon nc-circle-09"></i>
                        <p>Отзывы</p>
                    </nuxt-link>
                </li>
<!--                <li>-->
<!--                    <a class="nav-link" href="./table.html">-->
<!--                        <i class="nc-icon nc-notes"></i>-->
<!--                        <p>Table List</p>-->
<!--                    </a>-->
<!--                </li>-->
<!--                <li>-->
<!--                    <a class="nav-link" href="./typography.html">-->
<!--                        <i class="nc-icon nc-paper-2"></i>-->
<!--                        <p>Typography</p>-->
<!--                    </a>-->
<!--                </li>-->
<!--                <li>-->
<!--                    <a class="nav-link" href="./icons.html">-->
<!--                        <i class="nc-icon nc-atom"></i>-->
<!--                        <p>Icons</p>-->
<!--                    </a>-->
<!--                </li>-->
<!--                <li>-->
<!--                    <a class="nav-link" href="./maps.html">-->
<!--                        <i class="nc-icon nc-pin-3"></i>-->
<!--                        <p>Maps</p>-->
<!--                    </a>-->
<!--                </li>-->
<!--                <li>-->
<!--                    <a class="nav-link" href="./notifications.html">-->
<!--                        <i class="nc-icon nc-bell-55"></i>-->
<!--                        <p>Notifications</p>-->
<!--                    </a>-->
<!--                </li>-->
            </ul>
        </div>
    </div>
</template>

<script>

    export default {
        name: "AdminSidebar"
    }
</script>

<style scoped>

</style>
