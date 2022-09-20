const app = Vue.createApp({
  data() {
    return {
      user1: false,
      user2: false,
      isVisible: true,
      backgroundColor: "",
    };
  },

  methods: {
    handler(event) {
      if (event.target.value === "user1") {
        console.log("shemvedi");
        this.user1 = true;
      }
      if (event.target.value === "user2") {
        this.user2 = true;
      }
    },
    toggleHandler() {
      this.isVisible = !this.isVisible;
      console.log(this.backgroundColor);
    },
  },
});

app.mount("#assignment");
