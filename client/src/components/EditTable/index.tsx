import { defineComponent, ref, h, nextTick } from "vue";

export interface Column {
  key: string,
  title: string
}
export const ShowOrEdit = defineComponent({
  props: {
    editRender: Object,
    value: [String, Number]
  },
  setup(props) {
    const isEdit = ref(false)
    const inputRef = ref(null)
    const inputValue = ref(props.value)
    const handleClick = () => {
      isEdit.value = true
      nextTick(() => {
        inputRef.value.focus()
      })
    }
    const handleChange = () => {
      console.log('change')
      isEdit.value = false
      props.onUpdateValue(inputValue.value)
    }
    return () => (
      <div onClick={handleClick}>
        {
          isEdit.value
          ? h(props.editRender, {
            ref: inputRef,
            value: inputValue.value,
            onInput: (v) => {
              console.log('input', v)
              inputValue.value = v
            },
            onChange: handleChange,
            onBlur: handleChange
          })
          : props.value
        }
      </div>
    )
  }
})

export default defineComponent({
  props: {
    columns: Array<Column>,
    data: Array<any>
  },
  setup(props, { emit }) {
    const { columns, data } = props
    return () => (
      <table border={1} style={{borderCollapse: 'collapse'}}>
        {
          columns?.map(col => (
            <th>{ col.title }</th>
          ))
        }
        {
          data?.map((item, index) => (
            <tr>
              {
                columns?.map(col => (
                  <td style={{padding: '10px 20px'}}>
                    {
                      col.render ? col.render(item, col, index) : item[col.key]
                    }
                  </td>
                ))
              }
            </tr>
          ))
        }
      </table>
    )
  }
})
