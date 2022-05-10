export var objects = [{
  id: 'root',
  span: 24,
  children: [
    {
      id: 'inputUnit',
      span: 24,
      label: 'inputUnit',
      required: false,
      disabled: false,
      defaultValue: '',
      optionals: [],
      placeholder: '',
      unitType: 'inputUnit',
      onChange: function (object, objectValue) {
        // console.log(object, objectValue)
      }
    },
    {
      id: 'numberUnit',
      span: 24,
      label: 'numberUnit',
      required: false,
      disabled: false,
      defaultValue: 0,
      optionals: [],
      placeholder: '',
      unitType: 'numberUnit',
      onChange: function (object, objectValue) {
        // console.log(object, objectValue)
      }
    },
    {
      id: 'selectUnit',
      span: 24,
      label: 'selectUnit',
      required: false,
      disabled: false,
      defaultValue: '',
      optionals: [
        { value: 'sQ2Q5o2', label: '顺丰订单' },
        { value: 'sQ2Q7o2', label: '沃埃家订单' },
        { value: 'sQ2Q9o2', label: 'EDI大客户' },
        { value: 'sQ2Qbo2', label: '淘宝会员' },
        { value: 'sQ2Qdo2', label: '阿里诚信通' },
        { value: 'sQ2Qfo2', label: '阿里普通客' },
        { value: 'sQ2Qho2', label: '顺心官网' },
        { value: 'sQ2Qjo2', label: '微信下单' },
        { value: 'sQ2Qlo2', label: '客户下单' },
        { value: 'sQ2Qno2', label: '京东订单' },
        { value: 'sQ2Q0p2', label: '官网小程序' }
      ],
      placeholder: '请不要选我',
      unitType: 'selectUnit',
      onChange: function (object, objectValue) {
        // console.log(object, objectValue)
      }
    },
    {
      id: 'remoteSelectUnit',
      span: 24,
      label: 'remoteSelectUnit',
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
      unitType: 'remoteSelectUnit',
      onChange: function (object, objectValue) {
        // console.log(object, objectValue)
      }
    },
    {
      id: 'radioUnit',
      span: 24,
      label: 'radioUnit',
      required: false,
      disabled: false,
      defaultValue: 'all',
      optionals: [
        { value: 'all', label: '全部' },
        { value: 'y', label: '是' },
        { value: 'n', label: '否' }
      ],
      placeholder: '',
      unitType: 'radioUnit',
      onChange: function (object, objectValue) {
        // console.log(object, objectValue)
      }
    },
    {
      id: 'textareaUnit',
      span: 24,
      label: 'textareaUnit',
      required: false,
      disabled: false,
      defaultValue: '',
      optionals: [],
      placeholder: '',
      unitType: 'textareaUnit',
      onChange: function (object, objectValue) {
        // console.log(object, objectValue)
      }
    },
    {
      id: 'rangePickerUnit',
      span: 24,
      label: 'rangePickerUnit',
      required: false,
      disabled: false,
      defaultValue: '',
      optionals: [],
      placeholder: '请选择',
      unitType: 'rangePickerUnit',
      onChange: function (object, objectValue) {
        // console.log(object, objectValue)
      }
    },
    {
      id: 'checkboxUnit',
      span: 24,
      label: 'checkboxUnit',
      optionals: [
        { value: '1', label: '1天' },
        { value: '3', label: '3天' },
        { value: '7', label: '7天' },
        { value: '15', label: '15天' },
        { value: '30', label: '30天' }
      ],
      required: false,
      disabled: false,
      defaultValue: 1,
      placeholder: '',
      unitType: 'checkboxUnit',
      onChange: function (object, objectValue) {
        // console.log(object, objectValue)
      }
    },
    {
      id: 'tableUnit',
      span: 24,
      label: 'tableUnit',
      required: false,
      disabled: false,
      defaultValue: '',
      optionals: [],
      unitType: 'tableUnit',
      onChange: function (object, objectValue) {
        // console.log(object, objectValue)
      }
    },
    {
      id: 'buttonUnit',
      span: 24,
      label: 'buttonUnit',
      unitType: 'buttonUnit',
      onClick: function (object, objectValue) {
        console.log(object, objectValue)
      }
    }
  ],
  unitType: 'boxUnit'
}
]

export var listObjects = [
  {
    id: 'selectUnit',
    span: 24,
    label: 'selectUnit',
    optionals: [
      { value: '1', label: '1天' },
      { value: '3', label: '3天' },
      { value: '7', label: '7天' },
      { value: '15', label: '15天' },
      { value: '30', label: '30天' }
    ],
    required: false,
    disabled: false,
    defaultValue: 1,
    placeholder: '',
    unitType: 'selectUnit',
    onChange: function (object, objectValue) {
      // console.log(object, objectValue)
    }
  },
  {
    id: 'tableUnit',
    span: 24,
    label: 'tableUnit',
    required: false,
    disabled: false,
    defaultValue: '',
    optionals: [],
    placeholder: '请不要选我',
    unitType: 'tableUnit'
  },
  {
    id: 'buttonUnit',
    span: 24,
    label: 'buttonUnit',
    placeholder: '',
    unitType: 'buttonUnit',
    onClick: function (object, objectValue) {
      alert('搜索')
    }
  }
]
