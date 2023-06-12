import { useRoute } from 'vue-router'
import Parser from '@/components/Parser'
import { defineComponent } from 'vue'
import { MonacoEditor } from '@/components/MonacoEditor'

export default defineComponent({
  setup() {
    const route = useRoute()
    return () => (
      <div class="h-full">
        <MonacoEditor></MonacoEditor>
        <router-view v-slot={{ default: (scope) => (
            <keep-alive>
              <component is={scope.Component} />
            </keep-alive>
        )}}>
        </router-view>
      </div>
    )
  }
})