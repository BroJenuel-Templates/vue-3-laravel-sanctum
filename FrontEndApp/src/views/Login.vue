<script setup lang="ts">
import { ref } from 'vue';
import { NCard, NInput, NSpace, NButton } from 'naive-ui';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const email = ref('');
const password = ref('');
const showPassword = ref(false);
const router = useRouter();

async function submit() {
    await store
        .dispatch('signIn', {
            email: email.value,
            password: password.value,
        })
        .then(() => {
            router.push('/dashboard');
        })
        .catch((e) => {
            if (e instanceof Error) console.log(e.message);
            else console.log(e);
        });
}
</script>

<template>
    <div>
        <NCard class="max-w-500px mx-auto mt-10">
            <NSpace vertical>
                <NInput v-model:value="email" type="text" placeholder="Enter Username or Email">
                    <template #prefix>
                        <i class="bx bx-user text-size-18px"></i>
                    </template>
                </NInput>
                <NInput v-model:value="password" :type="showPassword ? 'text' : 'password'" placeholder="Enter Your Password Here">
                    <template #prefix>
                        <i class="bx bx-key text-size-20px"></i>
                    </template>
                    <template #suffix>
                        <i v-show="!showPassword" class="bx bx-show cursor-pointer text-size-18px" @click="showPassword = true"></i>
                        <i v-show="showPassword" class="bx bx-hide cursor-pointer text-size-18px" @click="showPassword = false"></i>
                    </template>
                </NInput>
                <NButton type="primary" @click="submit()">Login</NButton>
            </NSpace>
        </NCard>
    </div>
</template>
