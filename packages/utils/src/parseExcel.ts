import { utils, write } from "xlsx"
import type { WritingOptions, WorkSheet, WorkBook } from 'xlsx/types'
import data from "./data.json"

export function tableToSheet(el: string, colCount: number, name: string = "sheet1.xlsx") {
  const sheet = utils.table_to_sheet(document.querySelector(el))
  sheet["!cols"] = Array.from({ length: colCount }).map(() => ({ wpx: 100 }))
  openDownloadDialog(sheet2blob(sheet), name)
}
function sheet2blob(sheet: WorkSheet, sheetName: string = "sheet1"): Blob {
  const workbook: WorkBook = {
    SheetNames: [sheetName],
    Sheets: {},
  }
  workbook.Sheets[sheetName] = sheet // 生成excel的配置项

  const wopts: WritingOptions = {
    type: "binary",
    bookType: "xlsx",
    bookSST: false,
  }
  const wbout = write(workbook, wopts)
  const blob = new Blob([s2ab(wbout)], {
    type: "application/octet-stream",
  })
  function s2ab(s: any) {
    var buf = new ArrayBuffer(s.length)
    var view = new Uint8Array(buf)
    for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff
    return buf
  }
  return blob
}

function openDownloadDialog(blob: Blob, saveName: string = "") {
  const url = URL.createObjectURL(blob)
  const aLink: HTMLAnchorElement = document.createElement("a")
  aLink.href = url
  aLink.download = saveName
  var event
  if (window.MouseEvent) event = new MouseEvent("click")
  else {
    event = document.createEvent("MouseEvents")
    event.initMouseEvent(
      "click",
      true,
      false,
      window,
      0,
      0,
      0,
      0,
      0,
      false,
      false,
      false,
      false,
      0,
      null
    )
  }
  aLink.dispatchEvent(event)
}
