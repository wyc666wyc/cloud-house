import { onBeforeUnmount, ref, nextTick } from 'vue'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'

export const useMonacoEditor = (lang = 'javascript') => {
  monaco.languages
  let monacoEditor: monaco.editor.IStandaloneCodeEditor | null = null
  let initReadOnly = false

  const el = ref<HTMLElement | null>(null)
  const createEditor = (editorOption: monaco.editor.IStandaloneEditorConstructionOptions = {}) => {
    if (!el.value) return
    const model = monaco.editor.createModel('', lang)
    initReadOnly = !!editorOption.readOnly
    monacoEditor = monaco.editor.create(el.value, {
      model,
      // 是否启用预览图
      minimap: { enabled: false },
      // 圆角
      roundedSelection: true,
      // 主题
      theme: 'vs-dark',
      // 主键
      multiCursorModifier: 'ctrlCmd',
      // 滚动条
      scrollbar: {
        verticalScrollbarSize: 8,
        horizontalScrollbarSize: 8
      },
      // 行号
      lineNumbers: 'on',
      // tab大小
      tabSize: 2,
      //字体大小
      fontSize: 16,
      // 控制编辑器在用户键入、粘贴、移动或缩进行时是否应自动调整缩进
      autoIndent: 'advanced',
      // 自动布局
      automaticLayout: true,
      ...editorOption
    })
    return monacoEditor
  }
  const format = () => {

  }
  const update = () => {

  }
  onBeforeUnmount(() => {
    if (monacoEditor) monacoEditor.dispose()
  })
  return {
    el,
    createEditor
  }
}