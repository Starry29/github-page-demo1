import { defineComponent, PropType } from 'vue'
import { useRouter } from 'vue-router'
import { MainLayout, MainList } from '../layouts/MainLayout'
import { BackIcon } from './BackIcon'
import { Button } from './Button'
import { Center } from './Center'
import s from './ComingSoon.module.scss'
import { Icon } from './Icon'
export const ComingSoon = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const router = useRouter()
    const onClick = () => {
      router.back()
    }
    return () => (
      <MainLayout class={s.layout}>
        {{
          title: () => '返回',
          icon: () => <BackIcon />,
          default: () => (
            <>
              <div>  
                <Center class={s.nodata_wrapper}>
                  <Icon name="developer" class={s.nodata} />
                </Center>
                <p class={s.text}>功能尚未开发，敬请期待哦~</p>  
              </div>
              <div class={s.list}>
                <MainList/>
              </div>
            </>
          )
        }}
      </MainLayout>
    )
  }
})
