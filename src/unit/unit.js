import { units } from './list'
export default {
  props: {
    object: Object,
    objectValue: Object,
    units: Object,
    isForm: { type: Boolean, default: null }
  },
  render: function(createElement) {
    var unit = require('./module/' + units[this.object.unitType].file).default
    var theUnit = createElement(
      unit,
      {
        props: {
          units: this.units,
          object: this.object,
          objectValue: this.objectValue
        }
      },
      this.$slots.default
    )
    if (this.isForm) {
      return createElement('el-form-item', {
        props: {
          label: this.object.label,
          prop: this.object.id
        }
      },
      [
        theUnit
      ])
    } else {
      return theUnit
    }
  }
}
