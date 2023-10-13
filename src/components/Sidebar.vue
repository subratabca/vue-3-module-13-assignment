//create home component
<script setup>

</script>

<template>
    <section class="mt-[40px] text-white p-5">
        <ul class="flex flex-col space-y-5">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/profile">Profile</router-link>
          </li>
          <li>
            <router-link to="/profile/edit">Profile Edit</router-link>
          </li>
        </ul>
      </section>
</template>

<style></style>