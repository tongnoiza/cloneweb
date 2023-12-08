<template>
  <div>
    <head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
    </head>
    <v-row no-gutters>
      <v-toolbar class="tab" style="background-color: #202124">
        <template v-slot:prepend> </template>
        <div style="padding-right: 15px">
          <a class="gb_F gb_E tab-font text" href="#">Gmail</a>
          <a class="gb_F gb_E tab-font text" href="#">ค้นรูป</a>
        </div>

        <div>
          <v-btn icon="$vuetify" style="color: white" variant="text">
            <span class="material-symbols-outlined" style="font-size: 28px">
              apps
            </span>
          </v-btn>
          <v-btn icon="$vuetify" style="color: white" variant="text">
            <img
              class="profile-icon"
              src="https://lh3.googleusercontent.com/ogw/ANLem4YCOZW3b4c6YmIfmUD3jQSU549XhlnrdTedyUWoSZ4=s32-c-mo"
              alt=""
            />
          </v-btn>
        </div>

        <a href="" aria-expanded="false" role="button"> </a>
        <template v-if="$vuetify.display.smAndUp">
          <v-divider
            class="mx-3 align-self-center"
            length="24"
            thickness="2"
            vertical
          ></v-divider>
        </template> </v-toolbar
    ></v-row>
    <v-row class="pa-2 ma-2 center" style="min-height: 92px">
      <v-col></v-col>
      <v-col cols="auto">
        <img
          class="googlepos"
          style="margin-top: 100px"
          height="115"
          width="272"
          src="/img/gg.png"
          alt=""
        />
      </v-col>
      <v-col></v-col>
    </v-row>
    <div class="bar">
      <input class="searchbar" type="text" title="Search" />
      <a href="#">
        <img
          class="voice"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/716px-Google_mic.svg.png"
          title="Search by Voice"
      /></a>
    </div>

    <v-row class="pa-2 ma-2">
      <v-col> </v-col>
      <v-col cols="auto">
        <v-row>
          <v-col cols="auto">
            <v-btn size="large" variant="tonal">
              ค้นหาด้วย Google
            </v-btn></v-col
          >
          <v-col cols="auto"
            ><v-btn size="large" variant="tonal">
              ดีใจจัง ค้นแล้วเจอเลย
            </v-btn></v-col
          ></v-row
        >
      </v-col>
      <v-col></v-col>
    </v-row>
    <v-row class="pa-2 ma-2">
      <v-col></v-col>
      <v-col cols="auto"> แสดง Google ใน: <a href="#">English</a> </v-col>
      <v-col></v-col>
    </v-row>
    <div class="contentinfo">
      <div class="uU7dJb">
        <a class="tab-font"> ไทย</a>
      </div>

      <div class="uU7dJb">
        <div class="KxwPGc">
          <a class="pHiOh gb_E" v-for="link in links" :key="link">
            {{ link }}
          </a>
        </div>
        <div class="KxwPGc">
          <a class="pHiOh gb_E" v-for="r in rightmenu" :key="r">
            {{ r }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const rightmenu = ["ความเป็นส่วนตัว", "ข้อกำหนด", "การตั้งค่า"];
const links = ["เกี่ยวกับ", "โฆษณา", "ธุรกิจ", "วิธีการทำงานของ Search"];
</script>
<style>
body {
  background-color: #202124;
  color: white;
}
.pHiOh {
  font-size: 18px;
  display: block;
  padding: 10px;
  white-space: nowrap;
}
.KxwPGc {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
a.text {
  color: white ;
  text-decoration: none;
  font-family: arial, sans-serif;
  /* float: right !important; */
  padding-left: 15px;
  display: inline-block;
}
a.gb_E:hover {
  text-decoration: underline;
}
.menu {
  float: right;
  padding-left: 32px;
  height: 60px;
  padding: 6px;
  color: white;
}
.tab {
  margin: 15px 1px 1px -16px;
}
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
}
.space {
  padding: 4px;
}
.gb_F {
  display: inline-block;
  padding-left: 15px;
}
.tab-font {
  padding-right: 23px;
  font-size: 18px;
}
.profile-icon {
  border-radius: 50%;
  width: 45px;
}
.googlepos {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
  object-position: center bottom;
  width: auto;
}
img {
  overflow-clip-margin: content-box;
  overflow: clip;
}
.gb_n {
  -webkit-background-size: 32px 32px;
  background-size: 32px 32px;
  border: 0;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  display: block;
  margin: 0px;
  position: relative;
  height: 32px;
  width: 32px;
  z-index: 0;
}
.bar {
  margin: 0 auto;
  width: 575px;
  border-radius: 30px;
  border: 0.5px solid #dcdcdc;
}
.bar:hover {
  box-shadow: 1px 1px 8px 1px #dcdcdc;
}

.searchbar {
  height: 45px;
  border: none;
  width: 500px;
  font-size: 16px;
  outline: none;
  color: white;
  font-family: arial, sans-serif;
  padding: 10px;
}
.voice {
  height: 20px;
  position: relative;
  top: 5px;
  left: 10px;
}
.KxwPGc {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.footerbar {
  bottom: 0px;
  margin-left: 5px;
  position: absolute;
  border-bottom: 1px solid #3c4043;
  display: block;
  width: 100%;
  height: 7%;
  background-color: #171717;
  font-size: 14px;
  font-family: arial, sans-serif;
  color: #171717;
  padding: 0 20px;
}
.contentinfo {
  width: 100%;
  padding-top: 10px;
  padding-bottom: 0px;
  position: fixed;
  bottom: 0;
  /* position: relative; */
  /* bottom: -168px; */
  flex-shrink: 0;
  /* box-sizing: border-box; */
  background: #171717;
}
.row {
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  margin: -9px;
  position: relative;
  top: 31px;
}
.topfooter {
  bottom: 0px;
  padding: 15px 30px;
  border-bottom: 1px solid #3c4043;
  font-size: 15px;
  color: #e8eaed;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.uU7dJb {
  padding: 15px 30px;
  border-bottom: 1px solid #3c4043;
  font-size: 15px;
  color: #e8eaed;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.topfooterbar {
  bottom: 64px;
  margin-left: 5px;
  position: absolute;
  border-bottom: 1px solid #3c4043;
  display: block;
  width: 100%;
  height: 70px;
  background-color: #171717;
  font-size: 14px;
  font-family: arial, sans-serif;
  color: #171717;
  padding: 0 20px;
}
.footermenu {
  top: -12px;
  position: relative;
}
</style>
