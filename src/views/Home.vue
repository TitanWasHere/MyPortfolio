<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-8 ">
                prova
                <Typed :strings="['Software Engineer', 'Frontend Developer' , 'Backend Developer' , 'Student', 'Designer']" :typeSpeed="50" :loop="true" :backSpeed="50">
                    I'm a <span class="tpying"></span>
                </Typed>
            </div>
            <div class="col-4 d-none d-lg-block">
                <img src="./../assets/MySelf.png" style="width: 100%;">
            </div>
        </div>
    </div>
</template>

<script>
import VueTypedJs from 'vue-typed-js';
export default{
    components: {
        Typed: VueTypedJs,
    }
}


</script>

<style>

</style>