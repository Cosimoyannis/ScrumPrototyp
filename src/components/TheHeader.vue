<template>
  <div>
    <header>
      <nav>
        <div class="logo">
          <router-link to="/home">
            <img
              src="https://assets.asana.biz/m/3c50f4ae7cfa3a99/webimage-article-agile-scrum-2x.jpg"
              alt="logo"
            />
          </router-link>
        </div>
        <ul>
          <router-link to="/project">Projekt</router-link>
          <router-link to="/overview">Overview</router-link>
          <router-link to="/overview2">Overview 2</router-link>
          <router-link to="/sprint">Sprint</router-link>
          <router-link to="/notizen">Notizen</router-link>
          <router-link to="/todos">Todo's</router-link>
        </ul>
      </nav>
    </header>
  </div>
</template>

<style scoped>
header {
  z-index: 3;
  padding: 0 2rem;
  height: 80px;
  /* background-color: rgb(14, 89, 121); */
  background-color: rgb(37, 32, 32);
  color: white;
}

.logo {
  height: 100%;
  display: flex;
  align-items: center;
}

img {
  height: 80%;
  border-radius: 5px;
}

nav {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  height: 100%;
  list-style: none;
  display: flex;
  justify-content: space-between;
}

li,
a {
  height: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  transition: all 300ms;
  text-decoration: none;
  color: white;
}
li:hover,
a:hover {
  background-color: rgb(48, 170, 222);
  border-radius: 5px;
}
</style>
