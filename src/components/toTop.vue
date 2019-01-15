<template>
    <div class="">
            <a class="totop" href="#javascript: scroll(0, 0)">返回顶部 </a>
        <!-- <div class="totop" id="totop" @click="goTop"> -->
                <img src="../../static/app/img/backTop.png" alt="">
    </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // totop: true
            };
        },
        methods: {
            // goTop() {
            //     console.log("xyz")
            //     // var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
            //     // document.documentElement.scrollTop = document.body.scrollTop = 0;
            //     var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            //     console.log(scrollTop)
            // },
            // scrollToTop(el) {
            //     let topBtn = document.getElementById('totop');
            //     let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            //     let browserHeight = window.outerHeight;
            //     if (scrollTop > browserHeight) {
            //         topBtn.style.display = 'block';
            //     } else {
            //         topBtn.style.display = 'none';
            //     }
            // }
            goTop() {
                let x = document.body.scrollTop || document.documentElement.scrollTop; 
                let timer = setInterval(function () { x = x - 10; if (x < 100) { x = 0; window.scrollTo(x, x); clearInterval(timer); } window.scrollTo(x, x); }, "10");

            }
            //     goTop() {
            //         console.log("xyz")
            //     document.body.scrollTop = 0
            //     document.documentElement.scrollTop = 0
            // }
        },
        // mounted() {
        //     window.addEventListener("scroll", this.scrollToTop)
        // },
        // destroyed() {
        //     window.removeEventListener("scroll", this.scrollToTop);
        // },
        // created(){
        //     this.goTop()    
        // }
    };
</script>
<style scoped lang="scss">
    .totop {
        position: fixed;
        right: .8rem;
        bottom: 1.5rem;
        cursor: pointer;
    }
</style>