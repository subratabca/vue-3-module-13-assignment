<script setup>
  import { useRouter } from "vue-router";
  import { useUserStore } from "../store/profile";
  const userStore = useUserStore();
  const router = useRouter();

  const editProfile = () => {
    router.push("/profile/edit");
  };
</script>

<template>
  <div class="flex items-center justify-center">
    <div class="max-w-md bg-white rounded-lg shadow-lg p-6">
      <div class="text-center">
        <img
          :src="userStore.profileImage"
          alt="Profile Picture"
          class="w-28 h-28 mx-auto rounded-full"
        />

        <h1 class="text-2xl font-semibold mt-4">Name: {{ userStore.name }}</h1>
        <p class="text-gray-500 text-sm">
          <strong>Email:</strong> {{ userStore.email }}
        </p>
        <p class="text-gray-500 text-sm">
          <strong>Date of Birth:</strong> {{ userStore.birthYear }}
        </p>
        <h3 v-if="userStore.isEligibleToVote">
          <strong>Voting Status:</strong> Eligible for voting
        </h3>
        <h3 v-else><strong>Voting Status: </strong> Not eligible for voting</h3>
      </div>
      <p class="text-gray-700 text-center mt-4">
        <strong>Description:</strong> {{ userStore.description }}
      </p>
      <button @click="editProfile" class="mt-4 w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300">Edit Profile</button>
    </div>
  </div>
</template>


