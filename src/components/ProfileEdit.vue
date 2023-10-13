
<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../store/profile';
const userStore = useUserStore();
const router = useRouter();

const formData = ref({
  name: '',
  profileImage: '',
  birthdate: '',
  email: '',
  description: '',
});

onMounted(() => {
  formData.value = { ...userStore.$state };
});

const saveProfile = () => {
  userStore.updateProfile(formData.value);
  router.push('/profile');
};
</script>

<template>
<div class="bg-white p-8 rounded shadow-lg max-w-md">
    <h2 class="text-2xl font-semibold mb-4">Update Form</h2><hr>
    <div class="mt-5">
        <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" v-model="formData.name" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"  required>
        </div>

        <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" v-model="formData.email"  class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300" required>
        </div>

        <div class="mb-4">
            <label for="dob" class="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input type="date" v-model="formData.birthdate" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300" required>
        </div>

        <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">Upload Profile Image Link</label>
            <input type="text" v-model="formData.profileImage" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"  required>
        </div>

        <div class="mb-4">
            <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
            <textarea v-model="formData.description" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300" rows="4" required></textarea>
        </div>

        <button @click="saveProfile" class="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300">Update Profile</button>
      </div>
</div>


  </template>
  

  