<script setup>
import IconInstagram from './icons/instagram.vue';
import IconTwitter from './icons/twitter.vue';
import IconYoutube from './icons/youtube.vue';
import IconLinkedin from './icons/linkedin.vue';
</script>
<template>
    <div class="card card-compact w-100 bg-base-200 shadow-xl">
        <div class="card-body" style="padding: 0.6rem !important">
            <div class="grid lg:grid-flow-col justify-stretch grid-flow-row">
                <a
                    class="btn btn-sm"
                    href="https://www.instagram.com/aviva._.m/"
                    target="_blank"
                >
                    <IconInstagram />
                    Instagram
                </a>
                <a
                    class="btn btn-sm"
                    href="https://www.linkedin.com/in/aviva-de-marcas-3b8b471a3/"
                    target="_blank"
                >
                    <IconLinkedin />
                    LinkedIn
                </a>
                <a
                    class="btn btn-sm"
                    href="https://www.youtube.com/@a.m2219"
                    target="_blank"
                >
                    <IconYoutube />
                    Youtube
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.btn:hover {
    background-color: #870ec7;
}
</style>
