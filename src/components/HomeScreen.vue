<template>
  <div class="home-screen">
    <div class="video-wrapper">
      <video autoplay muted loop>
        <source src="@/assets/video.mp4" />
      </video>
      <div class="video-title">
        <h1>Willkommen auf unserem Scrum Tool</h1>
      <base-button class="btn" link-p to="/project">Zum Projekt</base-button>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.video-wrapper video {
 /*  position: absolute;
  z-index: -2;
  top: 0; */
  width: 100%;
  height: 90vh;
  object-fit: cover;
  background-repeat: no-repeat;
  opacity: 70%;
}
.video-title {
    position: absolute;
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.btn {
  background-color: rgb(37, 32, 32);
  color: white;
  border: solid 1px white;
  cursor: pointer;
  padding: 15px;
  border-radius: 4px;
}
.btn:hover {
  border: solid 2px white;
  background-color: rgb(48, 170, 222);
  letter-spacing: 2px;
  border-radius: 10px;
}

</style>
