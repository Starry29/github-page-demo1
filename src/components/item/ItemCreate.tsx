import { defineComponent, PropType, ref } from 'vue';
import { MainLayout } from '../../layouts/MainLayout';
import { Icon } from '../../shared/Icon';
import { Tab, Tabs } from '../../shared/Tabs';
import s from './ItemCreate.module.scss';
export const ItemCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup(props, context) {
    const refKind = ref('支出')
    const onUpdateSelected = (name: string) => refKind.value = name
    return () => (
      <MainLayout>{
        {
          title: () => '记一笔',
          icon: () => <Icon name="left" class={s.navIcon} />,
          default: () => <>
            <Tabs v-model:selected={refKind.value}>
              <Tab name="支出">
                icon tabs
              </Tab>
              <Tab name="收入">
                icon tabs1
              </Tab>
            </Tabs>
          </>
        }
      }</MainLayout>
    )
  }
})