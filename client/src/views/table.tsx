
import { tableToSheet } from '@dynamic-form/utils/src/parseExcel'
// const str = `<thead> <tr> <td  colspan="${Name.length}" style="text-align:center;">${module.fileName}</td></tr><tr id='table-thead-tr-ex'></tr></thead>
// <tbody id='table-tbody-tr-ex'></tbody>`
const title = '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试'
export default function () {
  return (
    <div>
      <el-button onClick={handleDownload}>下载模板</el-button>
      <table id="table">
        <thead>
          <tr><td colspan={4}>{ title }</td></tr>
        </thead>
        <tr>
          <th>排名</th>
          <th>班级</th>
          <th>项目</th>
          <th>方法论</th>
        </tr>
        <tr>
          <td>1</td>
          <td>dsa</td>
          <td>sf</td>
          <td>11</td>
        </tr>
      </table>
    </div>
  )
}
const handleDownload = () => {
  tableToSheet('#table', [100, 50, 100, 200])
}