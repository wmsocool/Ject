import { quest, postparam, ask } from "./axiosSeting.js"
export function generateWarrantyBOM(param) {
  return postparam({
    method: "POST",
    url: scoreUrl + "BXBOM/generateWarrantyBOM",
    data: param,
  })
}
//导出Excel
export function exportExcel(param) {
  var url = scoreUrl + "BOM/bxBOM/inwork/export"
  var forms =
    "<form method='post' action='" +
    url +
    "'><input name='param' value='" +
    JSON.stringify(param) +
    "' ></form>"
  $(forms)
    .appendTo("body")
    .submit()
    .remove()
}
//导出
export function exportWholeBom(param) {
  var url = scoreUrl + "BXBOM/wholeBOM/export"
  var forms =
    "<form method='post' action='" +
    url +
    "'><input name='pboid' value='" +
    param.pboid +
    "' ><input name='view' value='" +
    param.view +
    "' ></form>"
  // $(forms).appendTo("body").submit().remove();
  if (!$("#idownloadurl").length) {
    $(
      '<iframe style="display:none" width="0" height="0" name="downloadurl" id="idownloadurl"></iframe>'
    ).appendTo("body")
  }
  let $html = $(forms)
  $($html)
    .appendTo("body")
    .submit()
    .remove()
}
export function exportForm(param) {
  var list = []
  for (const key in param) {
    var obj = {}
    obj.name = key
    obj.value = param[key]
    list.push(obj)
  }
  var url = `/export`
  var form = document.createElement("form")
  form.id = "form1"
  form.name = "form1"
  document.body.appendChild(form)
  list.forEach((item) => {
    var input = document.createElement("input")
    input.type = "text"
    input.name = item.name
    input.value = item.value
    form.appendChild(input)
  })
  form.method = "GET"
  form.action = url
  form.submit()
  document.body.removeChild(form)
}

export function importThirdPartyDelete(params) {
  var formData = new FormData()
  formData.append("uploadfile", params.raw)
  return formSubmit({
    url: `/api/goalTeam/importThirdPartyDelete`,
    method: "POST",
    timeout: 1800000,
    data: formData,
  })
}
