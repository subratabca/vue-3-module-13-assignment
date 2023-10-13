import { defineStore } from 'pinia';

export const useUserStore = defineStore('profile', {
  state: () => ({
    name: 'John Doe',
    profileImage: 'https://media.istockphoto.com/id/1315157821/photo/asian-male-doctor-consulting-and-consoling-his-patient-on-live-video-call-at-hospital-clinic.jpg?s=2048x2048&w=is&k=20&c=B_i0tPy9EMc-zpg-7xSbDBDG6AFbnFSE9jN2uy37Jdc=',
    birthdate: '1990-01-01',
    email: 'johndoe@example.com',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  }),
  getters: {
    birthYear: (state) => {
      const birthYear = new Date(state.birthdate).getFullYear();
      return birthYear;
    },
    isEligibleToVote: (state) => {
      const age = new Date().getFullYear() - new Date(state.birthdate).getFullYear();
      return age >= 18;
    },
  },
  actions: {
    updateProfile(data) {
      this.name = data.name;
      this.profileImage = data.profileImage;
      this.birthdate = data.birthdate;
      this.email = data.email;
      this.description = data.description;
    },
  },
});
