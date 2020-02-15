<template>
  <div class="bg">
    <div class="login_box">
      <div class="logo">
        <img src="../assets/imgs/titleImg.png" alt="" />
      </div>
      <div class="content">
        <div class="left">
          <span class="title">无线资源实时管理平台</span>
          <span class="edition">v0.0.1</span>
          <br />
          <span class="english"
            >WIRELESS RESOURCE REAL-TIME MANAGEMENT PLATFORM</span
          >
        </div>
        <div class="right">
          <span class="login_title">账号登陆</span>
          <a-form :form="form" class="login_form" @submit="login">
            <a-form-item>
              <a-input
                v-decorator="[
                  'userName',
                  {
                    rules: [
                      { required: true, message: 'Please input your username!' }
                    ]
                  }
                ]"
                placeholder="Username"
              >
                <a-icon slot="prefix" type="user" class="icon_color" />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input
                v-decorator="[
                  'passWord',
                  {
                    rules: [
                      { required: true, message: 'Please input your Password!' }
                    ]
                  }
                ]"
                type="password"
                placeholder="Password"
              >
                <a-icon slot="prefix" type="lock" class="icon_color" />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-button
                type="primary"
                html-type="submit"
                class="login_form_button"
                :loading="loading"
                >登录</a-button
              >
            </a-form-item>
          </a-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * @description 系统登陆页面
 */
export default {
  components: {},
  name: "Login",
  data() {
    return {
      loading:false
    };
  },
  methods: {
    login(){
      this.loading=true
    }
  }
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "Arista2";
  src: url("../assets/font/BauLF-Regular.otf");
}

@font-face {
  font-family: "Regular";
  src: url("../assets/font/方正综艺_GBK.ttf");
}
.bg {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url("../assets/imgs/bg.jpg") no-repeat fixed center;
  background-size: cover;
  .login_box {
    position: relative;
    margin: 10% auto;
    width: 700px;
    height: 300px;
    border-radius: 10px;
    background: rgba(190, 190, 190, 0.4);
    overflow: hidden;
    .logo {
      position: absolute;
      top: 20px;
      left: 20px;
    }
    .content {
      display: flex;
      color: #fff;
      .left {
        margin-top: 12%;
        padding-top: 50px;
        width: 68%;
        height: 150px;
        border-right: 1px solid #ccc;
        border-color: rgba(255, 255, 255, 0.6);
        text-align: center;
        .title {
          font-size: 28px;
          font-family: Regular;
        }
        .edition {
          font-size: 12px;
          font-family: Regular;
          margin-left: 5px;
        }
        .english {
          font-size: 13px;
          font-family: Arista2;
        }
      }
      .right {
        margin-top: 50px;
        padding: 0 20px;
        flex: 1;
        .login_title {
          font-size: 20px;
          font-family: Regular;
          font-weight: normal;
        }
        .login_form {
          max-width: 300px;
          .icon_color {
            color: #fff;
          }
          .login_form_button {
            width: 100%;
            border-radius: 20px;
          }
        }
      }
    }
  }
}
</style>
