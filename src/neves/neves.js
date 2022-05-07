export var objects = [
  {
    id: 'headerbox',
    span: 24,
    unitType: 'boxUnit',
    children: [
      {
        id: 'header',
        span: 24,
        label: 'header',
        placeholder: '',
        unitType: 'headerUnit',
        onLoad: function (object, objectValue) {
          this.$router.push('/ject/list')
        }
      }
    ]
  },
  {
    id: 'leftbox',
    span: 4,
    unitType: 'boxUnit',
    children: [
      {
        id: 'lefttree',
        span: 24,
        label: 'header',
        placeholder: '',
        unitType: 'leftUnit',
        onLoad: function (object, objectValue) {
          this.$router.push('/ject/list')
        }
      }
    ]
  },
  {
    id: 'rightbox',
    span: 20,
    unitType: 'boxUnit',
    children: [
      {
        id: 'rightCounent',
        span: 24,
        label: 'header',
        placeholder: '',
        unitType: 'rightUnit',
        onLoad: function (object, objectValue) {
          this.$router.push('/ject/list')
        }
      }
    ]
  }
]
