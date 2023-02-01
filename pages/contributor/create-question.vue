<template>
    <div>
        <AdminTopBar role="contributor" />
        <div class="flex">
    
            <ContributorSideBar pageName="questions" />
            <div class="w-10/12 mx-6 ">
    
    <div class="flex flex-row  align-middle mt-10"> 
        <NuxtLink :to="`/contributor/questions`">
        <Icon name="mdi:chevron-left" class="h-6 w-6 mr-2 "></Icon>
        </NuxtLink>
        <h2 class="intro-y text-lg font-medium ">Add Question</h2>
      </div>
                <!-- BEGIN: Form Layout -->
            <div class=" rounded-md mt-5 p-5 ">
  
                <div class="mx-auto relative before:hidden before:lg:block before:absolute before:w-[69%] before:h-[3px] before:top-0 before:bottom-0 before:mt-4 before:bg-slate-100 before:dark:bg-darkmode-400 flex flex-col lg:flex-row justify-center px-5 sm:px-20">
                     <div class="intro-x lg:text-center flex items-center lg:block flex-1 z-10">
                    <button class="w-10 h-10 rounded-full " :class="{ 
                               'btn btn-primary': step === 1, 
                   'text-slate-500 bg-slate-100' : step !== 1
                        }">1</button>
                    <div class=" text-base lg:mt-3 ml-3 lg:mx-auto text-slate-600 dark:text-slate-400"
                        :class="{'font-medium': step === 1}">
                        Create Question
                    </div>
                </div>
                <div class="intro-x lg:text-center flex items-center mt-5 lg:mt-0 lg:block flex-1 z-10">
                    <button class="w-10 h-10 rounded-full btn" :class="{ 
                               'btn btn-primary': step === 2, 
                   'text-slate-500 bg-slate-100' : step !== 2
                        }">
                        2
                    </button>
                    <div class=" text-base lg:mt-3 ml-3 lg:mx-auto text-slate-600 dark:text-slate-400"
                        :class="{'font-medium': step === 2}">
                        Add Choices
                    </div>
                </div>
                <div class="intro-x lg:text-center flex items-center mt-5 lg:mt-0 lg:block flex-1 z-10">
                    <button class="w-10 h-10 rounded-full btn" :class="{ 
                               'btn btn-primary': step === 3, 
                   'text-slate-500 bg-slate-100' : step !== 3
                        }">
                        3
                    </button>
                    <div class=" text-base lg:mt-3 ml-3 lg:mx-auto text-slate-600 dark:text-slate-400"
                        :class="{'font-medium': step === 3}">
                        Select Correct Answer
                    </div>
                </div>
 </div>



<div class="mt-10 py-5 px-5">
    <div v-if="step === 1" class="w-10/12">
        <div class="font-medium text-base">Enter the question below</div>
        <div class="px-10 my-2">


        </div>
  
        <div class="py-3">
            <client-only>
                <Tiptap v-model="questionInfo.title" class="w-screen" />
            </client-only>
        </div>

       <div v-if="questionInfo.title.length>10" class="py-2 ml-auto w-1/12">

           <div @click="nextStep" class="btn btn-primary">Next</div>
       </div>

            <h1>{{ questionInfo.title }}</h1>

    </div>
    <div v-else-if="step === 2">
        <!-- Step 2 content goes here -->
        <button @click="prevStep">Previous</button>
        <button @click="nextStep">Next</button>
    </div>
    <div v-else-if="step === 3">
        <!-- Step 3 content goes here -->
        <button @click="prevStep">Previous</button>
        <button @click="submit">Submit</button>
    </div>
</div>


<!-- <CaeherEditor v-model="data" /> -->

           
            

                    <div v-if="questionInfo.choiceOne.length > 24 && questionInfo.choiceTwo.length > 24 && questionInfo.choiceThree.length > 24 && questionInfo.choiceFour.length > 24">
                    
                    
                    <div class="flex flex-row w-4/6 mt-3 ">
                        <label for="horizontal-form-1" class="my-auto w-2/6  font-medium">Correct Answer</label>
                        <div class="flex flex-row rounded-md border">
                            <div class="  w-10 flex items-center justify-center bg-white rounded-l-md text-gray-400 ">
                                <Icon name="tabler:checkup-list" class="w-4 h-4 my-auto"></Icon>
                            </div>
                    
                    <DropDownSelect :optionslist="[
                    { 'id':'choiceOne', 'name': 'Choice 1'}
                    ,{ 'id':'choiceTwo', 'name': 'Choice 2'}
                    ,{ 'id':'choiceThree', 'name': 'Choice 3'}
                    ,{ 'id':'choiceFour', 'name': 'Choice 4'}]" v-model="questionInfo.correctAnswer"
                        title="Choose Answer" class="" />
                        </div>
                    </div>
                    
                    </div>
                </div>
                <!-- END: Form Layout -->
            </div>
        </div>
    </div>
                
              
       
</template>

<script>
import AdminTopBar from '~~/components/TopBar.vue'
import ContributorSideBar from '~~/components/contributor/ContributorSideBar.vue';
import DropDownSelect from '~~/components/DropDownSelect.vue';
import Tiptap from '~~/components/Tiptap.vue';
export default {
    components: { ContributorSideBar, AdminTopBar, DropDownSelect, Tiptap },
    name: 'CreateQuestion',

    data() {
        return {
            questionInfo: {
                title: '',
                choiceOne: '', 
                choiceTwo: '', 
                choiceThree: '', 
                choiceFour: '', 
            },
            correctAnswer :'',
            data:'1',
            step: 1
           
        }

    },
    computed: {
        
    },
 
    methods: {
        addQuestion() {
            //TODO : form validation 
            console.log(this.questionInfo);
        },
        nextStep() {
            this.step++;
        },
        prevStep() {
            this.step--;
        },
        
        
    }
}
</script>
