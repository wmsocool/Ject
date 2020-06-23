import { units } from './list'
export default {
  props: {
    object: Object,
    objectValue: Object,
    units: Object
  },
  // render: function(createElement) {
  //   return createElement(
  // require('./module/' + units[this.object.unitType].file).default,
  // {
  //   props: {
  //     units: this.units,
  //     object: this.object,
  //     objectValue: this.objectValue
  //   }
  // },
  // this.$slots.default
  // }
  render: function(createElement) {
    return createElement('el-form-item', {
      props: {
        label: this.object.label
      }
    },
    [
      createElement(
        require('./module/' + units[this.object.unitType].file).default,
        {
          props: {
            units: this.units,
            object: this.object,
            objectValue: this.objectValue
          }
        },
        this.$slots.default
      )
    ])
  }
}
