export var objects = [
  {
    id: "key001",
    span: 12,
    label: "textareaUnit",
    required: false,
    disabled: false,
    defaultValue: "",
    optionals: [],
    placeholder: "Don't input me",
    unitType: "textareaUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    },
  },
  {
    id: "key003",
    span: 12,
    label: "rangePickerUnit",
    required: false,
    disabled: false,
    defaultValue: "",
    optionals: [],
    placeholder: "请选择",
    unitType: "rangePickerUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    },
  },
  {
    id: "key004",
    span: 6,
    label: "radioUnit",
    optionals: [
      { value: "1", label: "1天" },
      { value: "3", label: "3天" },
      { value: "7", label: "7天" },
      { value: "15", label: "15天" },
      { value: "30", label: "30天" },
    ],
    required: false,
    disabled: false,
    defaultValue: 1,
    placeholder: "",
    unitType: "radioUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    },
  },
  {
    id: "key005",
    span: 6,
    label: "remoteSelectUnit",
    required: false,
    disabled: false,
    defaultValue: "",
    onSearchFn: function(value) {
      return [
        {
          value: "guangzhou",
          label: "广州",
        },
        {
          value: "shenzhen",
          label: "深圳",
        },
      ]
    },
    placeholder: "请输入关键字",
    unitType: "remoteSelectUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    },
  },
  {
    id: "key006",
    span: 6,
    label: "remoteSelectUnit",
    required: false,
    disabled: false,
    defaultValue: "",
    onSearchFn: (value) => {
      return [
        {
          value: "guangzhou",
          label: "广州",
        },
        {
          value: "shenzhen",
          label: "深圳",
        },
      ]
    },
    placeholder: "请输入关键字",
    unitType: "remoteSelectUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    },
  },
  {
    id: "key007",
    span: 6,
    label: "inputUnit",
    required: false,
    disabled: false,
    defaultValue: "",
    optionals: [],
    placeholder: "Don't input me",
    unitType: "inputUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    },
  },
  {
    id: "key008",
    span: 6,
    label: "inputUnit",
    required: false,
    disabled: false,
    defaultValue: "",
    optionals: [],
    placeholder: "Don't input me",
    unitType: "inputUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    },
  },
  {
    id: "key009",
    span: 6,
    label: "selectUnit",
    required: false,
    disabled: false,
    defaultValue: "",
    optionals: [
      { value: "sQ2Qwn2", label: "现付" },
      { value: "sQ2Qyn2", label: "到付" },
      { value: "sQ2Q_o2", label: "月结/欠款" },
      { value: "sQ2Q1o2", label: "多笔付" },
    ],
    placeholder: "请不要选我",
    unitType: "selectUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    },
  },
  {
    id: "key00a",
    span: 6,
    label: "remoteSelectUnit",
    required: false,
    disabled: false,
    defaultValue: "",
    onSearchFn: (value) => {
      return [
        {
          value: "guangzhou",
          label: "广州",
        },
        {
          value: "shenzhen",
          label: "深圳",
        },
      ]
    },
    placeholder: "请输入关键字",
    unitType: "remoteSelectUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    },
  },
  {
    id: "key00b",
    span: 6,
    label: "状态",
    required: false,
    disabled: false,
    defaultValue: "",
    optionals: [
      { value: "sQ2Qu3", label: "未签收" },
      { value: "sQ2Qw3", label: "已签收" },
      { value: "sQ2Qy3", label: "正常签收" },
      { value: "sQ2Q_4", label: "异常签收" },
    ],
    placeholder: "请不要选我",
    unitType: "selectUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    },
  },
  {
    id: "key00c",
    span: 6,
    label: "numberRangeUnit",
    required: false,
    disabled: false,
    defaultValue: "",
    optionals: [],
    placeholder: "Don't input me",
    unitType: "numberRangeUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    },
  },
  {
    id: "key00d",
    span: 6,
    label: "付款",
    required: false,
    disabled: false,
    defaultValue: "",
    optionals: [],
    placeholder: "Don't input me",
    unitType: "numberRangeUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    },
  },
  {
    id: "key00e",
    span: 6,
    label: "收款",
    required: false,
    disabled: false,
    defaultValue: "",
    optionals: [],
    placeholder: "Don't input me",
    unitType: "numberRangeUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    },
  },
  {
    id: "key00f",
    span: 6,
    label: "状态",
    required: false,
    disabled: false,
    defaultValue: "",
    optionals: [
      { value: "key1", label: "选择1" },
      { value: "key2", label: "选择2" },
    ],
    placeholder: "请不要选我",
    unitType: "selectUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    },
  },
  {
    id: "key00g",
    span: 6,
    label: "selectUnit",
    required: false,
    disabled: false,
    defaultValue: "",
    optionals: [
      { value: "sQ2Q5o2", label: "顺丰订单" },
      { value: "sQ2Q7o2", label: "沃埃家订单" },
      { value: "sQ2Q9o2", label: "EDI大客户" },
      { value: "sQ2Qbo2", label: "淘宝会员" },
      { value: "sQ2Qdo2", label: "阿里诚信通" },
      { value: "sQ2Qfo2", label: "阿里普通客" },
      { value: "sQ2Qho2", label: "顺心官网" },
      { value: "sQ2Qjo2", label: "微信下单" },
      { value: "sQ2Qlo2", label: "客户下单" },
      { value: "sQ2Qno2", label: "京东订单" },
      { value: "sQ2Qpo2", label: "400下单" },
      { value: "sQ2Qro2", label: "金蝶客户" },
      { value: "sQ2Qto2", label: "天猫订单" },
      { value: "sQ2Qvo2", label: "快递鸟" },
      { value: "sQ2Qxo2", label: "拼多多" },
      { value: "sQ2Qzo2", label: "发货易" },
      { value: "sQ2Q0p2", label: "官网小程序" },
    ],
    placeholder: "请不要选我",
    unitType: "selectUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    },
  },
  {
    id: "key00h",
    span: 6,
    label: "city",
    required: false,
    disabled: false,
    defaultValue: "",
    onSearchFn: (value) => {
      return [
        {
          value: "guangzhou",
          label: "广州",
        },
        {
          value: "shenzhen",
          label: "深圳",
        },
      ]
    },
    placeholder: "请输入关键字",
    unitType: "remoteSelectUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    },
  },
  {
    id: "key00i",
    span: 6,
    label: "目的",
    required: false,
    disabled: false,
    defaultValue: "",
    onSearchFn: (value) => {
      return [
        {
          value: "guangzhou",
          label: "广州",
        },
        {
          value: "shenzhen",
          label: "深圳",
        },
      ]
    },
    placeholder: "请输入关键字",
    unitType: "remoteSelectUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    },
  },
  {
    id: "key00j",
    span: 6,
    label: "区县",
    required: false,
    disabled: false,
    defaultValue: "",
    onSearchFn: (value) => {
      return [
        {
          value: "guangzhou",
          label: "广州",
        },
        {
          value: "shenzhen",
          label: "深圳",
        },
      ]
    },
    placeholder: "请输入关键字",
    unitType: "remoteSelectUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    },
  },
  {
    id: "key00k",
    span: 6,
    label: "产品",
    required: false,
    disabled: false,
    defaultValue: "",
    onSearchFn: function(value) {
      return [
        {
          value: "guangzhou",
          label: "广州",
        },
        {
          value: "shenzhen",
          label: "深圳",
        },
      ]
    },
    placeholder: "请输入关键字",
    unitType: "remoteSelectUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    },
  },
  {
    id: "key00l",
    span: 6,
    label: "inputUnit",
    required: false,
    disabled: false,
    defaultValue: "",
    optionals: [
      { value: "sQ2Qj6", label: "全部" },
      { value: "sQ2Ql6", label: "是" },
      { value: "sQ2Qn6", label: "否" },
    ],
    placeholder: "Don't input me",
    unitType: "radioUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    },
  },
  {
    id: "key00m",
    span: 6,
    label: "selectUnit",
    required: false,
    disabled: false,
    defaultValue: "",
    optionals: [
      { value: "sQ2Qj6", label: "全部" },
      { value: "sQ2Ql6", label: "是" },
      { value: "sQ2Qn6", label: "否" },
    ],
    placeholder: "请不要选我",
    unitType: "selectUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    },
  },
  {
    id: "key00n",
    span: 24,
    label: "selectUnit",
    required: false,
    disabled: false,
    defaultValue: "",
    optionals: [
      { value: "sQ2Qj6", label: "全部" },
      { value: "sQ2Ql6", label: "是" },
      { value: "sQ2Qn6", label: "否" },
    ],
    placeholder: "请不要选我",
    unitType: "tableUnit",
    onChange: function(object, objectValue) {
      //console.log(object, objectValue)
    },
  },
  {
    id: "key00o",
    span: 24,
    label: "submit",
    placeholder: "",
    unitType: "buttonUnit",
    onClick: function(object, objectValue) {
      this.searchFn(object, objectValue)
    },
  },
]
