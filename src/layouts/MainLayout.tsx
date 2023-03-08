import { defineComponent, PropType } from 'vue'
import { RouterLink } from 'vue-router'
import { Icon } from '../shared/Icon'
import { Navbar } from '../shared/Navbar'
import s from './MainLayout.module.scss'
export const MainLayout = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <Navbar class={s.navbar}>
          {{
            default: () => context.slots.title?.(),
            icon: () => context.slots.icon?.()
          }}
        </Navbar>

        {context.slots.default?.()}
      </div>
    )
  }
})

export const MainList = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper_list}>
        <nav class={s.bottom}>
          <ul class={s.action_list}>
          <li>
              <RouterLink to="/items" class={s.action} active-class={s.selected}>
                <Icon name="details" class={s.icon} />
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/items/create" class={s.action} >
                <Icon name="add" class={s.icon} />  
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/statistics" class={s.action} active-class={s.selected}>
                <Icon name="statistics" class={s.icon} />
              </RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
})
