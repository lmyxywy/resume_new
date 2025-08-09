<template>
  <div class="handleProject">
      <DialogInput 
      :dialogTit="dialogTit" :isOpenDialog="isOpenDialog"
      @closeDialog="closeDialog" @resetBtn="resetBtn" @saveBtn="saveBtn">
        <div slot="content">
           <form action="">
              <mu-text-field v-model="content.projrctName" label="项目名称" color="primary" label-float full-width></mu-text-field><br/>
              <mu-text-field v-model="content.projrctDescribe" label="项目简介" color="primary" label-float full-width></mu-text-field><br/>
              <div class="cover_img">
                  <div class="cover_img_tit">选择封面</div>
                  <div class="checked_cover_img">
                      <img src="../../../static/avatar_01.jpg">
                  </div>
                  <mu-row gutter class="cover_img_box">
                      <mu-col span="4" v-for="(coverImg,index) in coverImgs" :key="index" @click="chooseCoverImg(coverImg)"><img :src="coverImg"></mu-col>
                  </mu-row>
              </div>
           </form>
        </div>
      </DialogInput>
  </div>
</template>

<script type="text/ecmascript-6">

import DialogInput from "../dialog/DialogInput.vue";

import * as ApiPath from "../../api/apiPath.js"
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "HandleProject",
  data() {
    return {
      coverImgs:ApiPath.coverImg
    };
  },
  props: {
    isOpenDialog: {
      type: Boolean,
      default: false
    },
    dialogTit: {
      type: String
    },
    content: {
      type: Object,
      default: () => {
        return {
          projectId:0,
          projrctName: "",
          projrctDescribe: "",
          coverImgSrc:ApiPath.coverImg[0]
        };
      }
    }
  },
  components: {
    DialogInput
  },
  methods: {
    closeDialog() {
      this.resetBtn()
      this.$emit("closeDialog");
    },
    resetBtn(){
      this.content.projrctName=''
      this.content.projrctDescribe=''
      this.content.coverImgSrc=ApiPath.coverImg[0]
    },
    saveBtn(){
      this.$emit("saveBtn",this.content);
    },
    chooseCoverImg(coverImg){
      this.$emit("chooseCoverImg",coverImg);
    }
  },
  created(){
  }
};
</script>

<style lang="less">
</style>
