<script setup>
import Hero from './components/hero.vue';
import Socials from './components/socials.vue';

import Videocard_moord from './components/videocard_moord.vue';
import Videocard_toewijding from './components/videocard_toewijding.vue';
import Videocard_missing from './components/videocard_missing.vue';
import Videocard_streetwise from './components/videocard_streetwise.vue';
</script>

<template>
    <div class="grid grid-cols-12 gap-4 mt-5 pb-5 mb-5 pb-5">
        <div class="col-start-3 col-span-8"><Hero /></div>
    </div>

    <div class="grid grid-cols-12 gap-4 mt-5 pb-5">
        <div class="col-start-2 col-end-11 lg:col-start-4 lg:col-end-10">
            <Socials />
        </div>
    </div>

    <div class="grid grid-cols-12 gap-4 mt-5 pb-5">
        <div class="col-start-2 col-end-11 lg:col-start-4 lg:col-end-10">
            <Videocard_moord />
        </div>
    </div>

    <div class="grid grid-cols-12 gap-4 mt-5 mb-5 pb-5">
        <div class="col-start-2 col-end-11 lg:col-start-4 lg:col-end-10">
            <Videocard_toewijding />
        </div>
    </div>

    <div class="grid grid-cols-12 gap-4 mt-5 pb-5">
        <div class="col-start-2 col-end-11 lg:col-start-4 lg:col-end-10">
            <Videocard_missing />
        </div>
    </div>

    <div class="grid grid-cols-12 gap-4 mt-5 mb-5 pb-5">
        <div class="col-start-2 col-end-11 lg:col-start-4 lg:col-end-10">
            <Videocard_streetwise />
        </div>
    </div>

    <div class="grid grid-cols-1 gap-0 mt-5 mb-5 pb-5"></div>

    <footer class="footer footer-center p-4 bg-base-200 text-base-content">
        <aside>
            <p>
                Copyright © 2023 - All right reserved by Aviva de Marcas | Made
                by
                <a class="link link-success" href="https://github.com/slluxx"
                    >Slluxx</a
                >
            </p>
        </aside>
    </footer>
</template>
