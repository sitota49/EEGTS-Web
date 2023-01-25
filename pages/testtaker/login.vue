<template>
    <div class="items-center justify-center w-screen h-screen bg-white">
        <NuxtLink :to="`/`">
            <div class="flex flex-row">

                <img src="../../assets/images/eegtslogo.png" class="w-16 m-6" />
                <h1 class="text-2xl my-auto">EEGTS</h1>
            </div>
        </NuxtLink>
        <div class="flex flex-row h-full">
            <div class="w-1/2">
                <img src="../../assets/images/undraw_Online_test_re_kyfx.png" class="m-6 mx-auto h-4/6 w-4/6" />
            </div>
            <div class="w-1/2 h-full items-center align-middle my-auto ">
                <div class="w-8/12 mt-44 justify-center mx-auto">

                    <div class="intro-x mt-8">

                        <input type="text" class="intro-x login__input form-control py-3 px-4 block" placeholder="Admission ID"
                            v-model="userInfo.admissionID">

                        <input type="password" class="intro-x login__input form-control py-3 px-4 block mt-4"
                            placeholder="Password" v-model="userInfo.password">
                    </div>
                    <!-- <div class="intro-x flex text-slate-600 dark:text-slate-500 text-xs sm:text-sm mt-4">
                    <div></div>
                    <a href="" class="ml-auto">Forgot Password?</a>
                </div> -->


                    <button @click="login" class="bg-primary rounded-xl w-5/12 text-white py-3 px-4 text-center mt-8">
                        Sign In
                    </button>

                </div>

            </div>
        </div>


    </div>
</template>
<script>

export default {
    name: 'TestTakerLoginPage',
    components: {},
    data() {
        return {
            userInfo: {
                admissionID: '',
                password: ''
            },
            error: false,
            errorMessage: '',
            isLogging: false,
        }

    },
    methods: {
        login() {
            //TODO : form validation 
            console.log(this.userInfo);
            this.$router.push({ path: '/testtaker/exams/' })
        }
    }
}
</script>