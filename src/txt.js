
if ($.browser.msie) {  
    window.setInterval("CollectGarbage();", 10000);  
} 

  mounted() {
    var scope = this
    window.document.body.onresize = function() {
      scope.$set(scope.client, 'height', document.body.clientHeight)
      scope.$set(scope.client, 'width', document.body.clientWidth)
    }
    const theUA = window.navigator.userAgent.toLowerCase()
    if ((theUA.match(/msie\s\d+/) && theUA.match(/msie\s\d+/)[0]) || (theUA.match(/trident\s?\d+/) && theUA.match(/trident\s?\d+/)[0])) {
      const ieVersion = theUA.match(/msie\s\d+/)[0].match(/\d+/)[0] || theUA.match(/trident\s?\d+/)[0]
      if (ieVersion < 10) {
        this.$confirm('您当前的浏览器版本过低，请升级到IE10及以上版本，点击“下载”按钮可跳转至升级页面，谢谢！', '提示', {
          confirmButtonText: '下载',
          cancelButtonText: '取消',
          type: 'warning',
          closeOnClickModal: false
        }).then(() => {
          window.open('http://softdown.hikvision.com.cn/?s=internet+explore')
        })
      }
    }
  },
  
// 获取浏览器内核名称
export function getBrowserKerneIName() {
  const userAgent = navigator.userAgent

  if (userAgent.indexOf('Opera') > -1) {
    return 'Opera'
  }
  if (userAgent.indexOf('Firefox') > -1) {
    return 'Firefox'
  }
  if (userAgent.indexOf('Chrome') > -1) {
    return 'Chrome'
  }
  if (userAgent.indexOf('Safari') > -1) {
    return 'Safari'
  }
  if (userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 || !!window.ActiveXObject || 'ActiveXObject' in window) {
    return 'IE'
  }
  return 'Other'
}

export function closeWin() {
  window.opener = null
  window.open('about:blank', '_self', '')
  window.close()
  // try {
  //   window.opener = window
  //   var win = window.open('', '_self')
  //   win.close()
  //   window.opener.close()
  //   // frame的时候
  //   // top.close()
  // } catch (e) {
  //   console.error(e)
  // }
}

 @media screen and (max-width: 1600) {

}

router.beforeEach(async(to, from, next) => {
}
 provide() {
    return {
    }
  },
  data() {
    return {
      myDept: ''
    }
  },
  computed: {
    ...mapState(['user'])
  },


import VueI18n from 'vue-i18n'
import Vue from 'vue'
Vue.use(VueI18n)
// 通过选项创建 VueI18n 实例
const i18n = new VueI18n({
  locale: 'CN', // 设置地区
  messages: {
    EN: {
      ...EN, // eslint-disable-line
      ...enLocale
    },
    CN: {
      ...CN, // eslint-disable-line
      ...zhLocale
    }
  }
})

export const setLang = (lang = 'CN') => {
  i18n.locale = lang
}

export const getLang = () => {
  return i18n.locale
}

export default i18n


<template>
  <div class="cus-input-wrapper" :class="{extext:extext}">
    <textarea
      v-model="inputText"
      :disabled="readonly"
      class="myCircle_input"
      :placeholder="placeholder"
      :style="{
        height:domHeight+'px',
        overflow: maxHeight&&maxHeight<scrollHeight?'auto':'hidden'
      }"
      @input="value=>{
        change(value)
        inputEvent(value)}"
      @change="change"
      @blur="blur"
    />
    <div class="poicon">
      <textarea
        v-model="inputText"
        :disabled="readonly"
        class="myCircle_input"
        :placeholder="placeholder"
        :style="{
          height:domHeights+'px',
          overflow: maxHeight&&maxHeight<scrollHeight?'auto':'hidden'
        }"
        @input="value=>{
          change(value)
          inputEvent(value)}"
        @change="change"
        @blur="blur"
      />
    </div>
  </div>
</template>

<script>

import { getElementsByClassName } from '@/utils/tool'
export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: { type: String, default: null },
    placeholder: { type: String, default: null },
    boxHeight: { type: Number, default: null },
    extext: { type: Boolean, default: false },
    maxLength: { type: Number, default: 1000 },
    maxHeight: { type: Number, default: 0 },
    readonly: { type: Boolean, default: false }
  },
  data() {
    return {
      domHeight: 60,
      domHeights: 60,
      scrollHeight: 0,
      inputText: ''
    }
  },
  watch: {
    value() {
      this.inputText = this.value
      this.change(this.value)
    }
  },
  created() {
    this.domHeight = this.boxHeight
    this.domHeights = this.boxHeight
    this.inputText = this.value
    this.change(this.value)
    console.log(this.extext)
  },
  mounted() {
    this.change(this.value)
  },
  methods: {
    inputEvent(val) {
      this.$emit('inputEvent', val)
    },
    change(val) {
      if (val && val.length > this.maxLength) {
        this.inputText = val.slice(0, this.maxLength)
        this.$message({
          type: 'warning',
          message: '最多可输入' + this.maxLength + '个字符'
        })
      }
      this.$emit('change', this.inputText)
      this.$emit('input', this.inputText)
      setTimeout(() => {
        this.domHeights = this.boxHeight
        this.$nextTick(() => {
          var dom = getElementsByClassName('myCircle_input', this.$el)[1]
          if (dom.scrollHeight > this.boxHeight) {
            if (this.maxHeight) {
              if (this.maxHeight > dom.scrollHeight) {
                this.domHeight = dom.scrollHeight + 2
              } else {
                this.domHeight = this.maxHeight
              }
            } else {
              this.domHeight = dom.scrollHeight + 2
            }
          } else {
            this.domHeight = this.boxHeight
          }
          this.scrollHeight = dom.scrollHeight
        })
      }, 100)
    },
    blur(...args) {
      this.$emit('blur', args)
    }
  }
}
</script>
<style lang="less" scoped>
.myCircle_input{
  background: #ffffff;
  border: 1px solid #BBB;
  // border: 1px solid #ff0000;
  border-radius:5px;
  outline: none;
  width: 100%;
  border-radius: 4px;
  padding: 5px 5px 5px 8px;
  resize: none;
  font-size: 14px;
  color:#000;
  line-height: 20px;
  word-break: break-all;
  box-sizing: border-box;

}
.extext{
  padding-right:80px;
  .myCircle_input{
    margin: 4px 8px;
  }
}
@media screen and (max-width: 1600px) {
  .extext{
    padding-right:54px;
  }
}

@media screen and (max-width: 1600px) {
  .myCircle_input{
    font-size: 12px;
  }
}
textarea::-webkit-input-placeholder{
        color: #999;
}
textarea::-moz-placeholder{
        color: #999;
}
textarea:-ms-input-placeholder{
        color: #999;
}
.cus-input-wrapper {
  line-height: 1;
  // margin:4px;
}
.poicon{
  position: relative;
  z-index: -3;
  overflow: hidden;
  height: 0px;
}
</style>
