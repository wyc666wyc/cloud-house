import { tableToSheet } from "@dynamic-form/utils/src/parseExcel"
import { ref } from "vue"
import data from "@dynamic-form/utils/src/data.json"
import data2 from "@dynamic-form/utils/src/data2.json"
// const str = `<thead> <tr> <td  colspan="${Name.length}" style="text-align:center;">${module.fileName}</td></tr><tr id='table-thead-tr-ex'></tr></thead>
// <tbody id='table-tbody-tr-ex'></tbody>`
const title = "测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试"
const colCount = ref(0)
export default function () {
  return (
    <div>
      <el-button onClick={handleDownload}>下载模板</el-button>
      <table id="table" border cellspacing="0">
        {/* <thead>
          <tr>
            <td colspan={colCount.value}>{title}</td>
          </tr>
        </thead> */}
        {/* <thead>
          <tr>
            <th rowspan={2}>流域</th>
            <th rowspan={2}>水体</th>
            <th rowspan={1} colspan={2}>水质</th>
          </tr>
          <tr>
            <th>因子1</th>
            <th>因子2</th>
          </tr>
        </thead> */}
        {/* <thead>
          <tr class="firstHead">
            <th colspan="5">基本工资</th>
            <th colspan="3">基础性绩效</th>
            <th colspan="1">奖励性绩效</th>
            <th colspan="1" rowspan="2">
              绩效考核奖
            </th>
            <th colspan="1" rowspan="2">
              上年度绩效工资
            </th>
            <th colspan="1" rowspan="2">
              上年度绩效考核奖
            </th>
            <th colspan="1" rowspan="2">
              X项目小计
            </th>
            <th colspan="1" rowspan="2">
              上年度X项目小计
            </th>
            <th colspan="1" rowspan="2">
              房贴
            </th>
            <th colspan="1" rowspan="2">
              德育导师
            </th>
            <th colspan="1" rowspan="2">
              临时补发
            </th>
            <th colspan="2" rowspan="2">
              应发工资
            </th>
          </tr>
          <tr class="twoHead">
            <th colspan="2">岗位工资</th>
            <th>薪级工资</th>
            <th>临时性补贴</th>
            <th>小计</th>
            <th>岗位津贴</th>
            <th>生活补贴</th>
            <th>小计</th>
            <th>院聘</th>
          </tr>
        </thead> */}
        <tr>{renderThead(parseData2(data2))}</tr>
      </table>
    </div>
  )
}
const handleDownload = () => {
  tableToSheet("#table", colCount.value, "测试.xlsx")
}
const parseData = (data: any) => {
  const fields = data.fields[0].__config__.children
  colCount.value = fields.filter(
    (field: any) => field.__config__.tag !== "option"
  ).length
  return fields
    .filter((field: any) => field.__config__.tag !== "option")
    .map((field: any) => {
      const { label } = field.__config__
      return <td>{label}</td>
    })
}
const parseData2 = (data: any) => {
  const fields = data.fields[0].__config__.children
  const property = {
    length: 1
  }
  const thead: Array<any> = []
  const callback = (list: Array<any>) => {
    const temp: Array<any> = []
    list.map((item: any) => {
      const { label, tag } = item.__config__
      if (tag === "option") return
      let rowspan = 2, colspan = 1
      if (item.__config__.children) {
        rowspan = 1
        colspan = 2
        callback(item.__config__.children)
      }
      temp.push({ label, rowspan, colspan })
    })
    thead.push(temp)
  }
  callback(fields)
  return thead.reverse()
}
const renderThead = (thead: Array<any>) => {
  const trs = thead.map((tr: Array<any>) => {
    const tds = tr.map((td: any) => {
      const { label, rowspan, colspan } = td
      return <td rowspan={rowspan} colspan={colspan}>{label}</td>
    })
    return <tr>{tds}</tr>
  })
  return trs
}