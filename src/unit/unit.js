import { units } from "./list"
export default {
  props: {
    object: Object,
    objectValue: Object,
  },
  render: function(createElement) {
    return createElement(
      require("./module/" + units[this.object.unitType].file + ".vue").default,
      {
        props: {
          object: this.object,
          objectValue: this.objectValue,
        },
      }
    )
  },
}
