export var objects = [{
  id: 'box',
  span: 24,
  labelWidth: '100px',
  isForm: true,
  children: [{
    id: 'id',
    span: 24,
    label: 'id',
    required: false,
    disabled: false,
    defaultValue: '',
    optionals: [],
    placeholder: "Don't input me",
    unitType: 'inputUnit',
    onChange: function(object, objectValue) {
    // console.log(object, objectValue)
    }
  },
  {
    id: 'span',
    span: 24,
    label: 'span',
    required: false,
    disabled: false,
    defaultValue: '',
    optionals: [],
    placeholder: '请选择',
    unitType: 'inputUnit',
    onChange: function(object, objectValue) {
    // console.log(object, objectValue)
    }
  },
  {
    id: 'isForm',
    span: 24,
    label: 'isForm',
    required: false,
    disabled: false,
    defaultValue: '',
    optionals: [
      { value: true, label: '是' },
      { value: false, label: '否' }
    ],
    placeholder: '请选择',
    unitType: 'radioUnit',
    onChange: function(object, objectValue) {
    // console.log(object, objectValue)
    }
  },
  {
    id: 'labelWidth',
    span: 24,
    label: 'labelWidth',
    required: false,
    disabled: false,
    defaultValue: '',
    optionals: [],
    placeholder: '请选择',
    unitType: 'inputUnit',
    onChange: function(object, objectValue) {
    // console.log(object, objectValue)
    }
  },
  {
    id: 'label',
    span: 24,
    label: 'label',
    optionals: [
    ],
    required: false,
    disabled: false,
    defaultValue: 1,
    placeholder: '',
    unitType: 'inputUnit',
    onChange: function(object, objectValue) {
    // console.log(object, objectValue)
    }
  },
  {
    id: 'required',
    span: 24,
    label: 'required',
    required: false,
    disabled: false,
    defaultValue: '',
    onSearchFn: function(value) {
      return [
        {
          value: 'guangzhou',
          label: '广州'
        },
        {
          value: 'shenzhen',
          label: '深圳'
        }
      ]
    },
    placeholder: '请输入关键字',
    unitType: 'inputUnit',
    onChange: function(object, objectValue) {
    // console.log(object, objectValue)
    }
  },
  {
    id: 'disabled',
    span: 24,
    label: 'disabled',
    required: false,
    disabled: false,
    defaultValue: '',
    onSearchFn: (value) => {
      return [
        {
          value: 'guangzhou',
          label: '广州'
        },
        {
          value: 'shenzhen',
          label: '深圳'
        }
      ]
    },
    placeholder: '请输入关键字',
    unitType: 'inputUnit',
    onChange: function(object, objectValue) {
    // console.log(object, objectValue)
    }
  },
  {
    id: 'defaultValue',
    span: 24,
    label: 'defaultValue',
    required: false,
    disabled: false,
    defaultValue: '',
    optionals: [],
    placeholder: "Don't input me",
    unitType: 'inputUnit',
    onChange: function(object, objectValue) {
    // console.log(object, objectValue)
    }
  },
  {
    id: 'optionals',
    span: 24,
    label: 'optionals',
    required: false,
    disabled: false,
    defaultValue: '',
    optionals: [],
    placeholder: "Don't input me",
    unitType: 'textareaUnit',
    onChange: function(object, objectValue) {
    // console.log(object, objectValue)
    }
  },
  {
    id: 'placeholder',
    span: 24,
    label: 'placeholder',
    required: false,
    disabled: false,
    defaultValue: '',
    optionals: [
      { value: 'sQ2Qwn2', label: '现付' },
      { value: 'sQ2Qyn2', label: '到付' },
      { value: 'sQ2Q_o2', label: '月结/欠款' },
      { value: 'sQ2Q1o2', label: '多笔付' }
    ],
    placeholder: '请不要选我',
    unitType: 'inputUnit',
    onChange: function(object, objectValue) {
    // console.log(object, objectValue)
    }
  },
  {
    id: 'unitType',
    span: 24,
    label: 'unitType',
    required: false,
    disabled: false,
    defaultValue: '',
    onSearchFn: (value) => {
      return [
        {
          value: 'guangzhou',
          label: '广州'
        },
        {
          value: 'shenzhen',
          label: '深圳'
        }
      ]
    },
    placeholder: '请输入关键字',
    unitType: 'selectUnit',
    onChange: function(object, objectValue) {
    // console.log(object, objectValue)
    }
  },
  {
    id: 'onChange',
    span: 24,
    label: 'onChange',
    required: false,
    disabled: false,
    defaultValue: '',
    optionals: [
      { value: 'sQ2Qu3', label: '未签收' },
      { value: 'sQ2Qw3', label: '已签收' },
      { value: 'sQ2Qy3', label: '正常签收' },
      { value: 'sQ2Q_4', label: '异常签收' }
    ],
    placeholder: '请不要选我',
    unitType: 'inputUnit',
    onChange: function(object, objectValue) {
    // console.log(object, objectValue)
    }
  }],
  unitType: 'boxUnit'
}
]

