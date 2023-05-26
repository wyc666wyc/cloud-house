import { useRoute } from 'vue-router'
import Parser from '@/components/Parser'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const route = useRoute()
    return () => (
      <div>
        页面容器
        {/* <KeepAlive>
          <RouterView key={route.path}></RouterView>
        </KeepAlive> */}
        <router-view v-slot={{ default: (scope) => (
            <keep-alive>
              <component is={scope.Component} />
            </keep-alive>
        )}}>
        </router-view>
      </div>
    )
  }
  // render() {
  //   const route = useRoute()
  //   return (
  //     <div>
  //       页面容器
  //       {route?.params?.id}
  //       <Parser id={route?.params?.id}></Parser>
  //     </div>
  //   )
  // }
})