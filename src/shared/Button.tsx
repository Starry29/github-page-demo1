import { defineComponent } from 'vue';
import s from './Button.module.scss'

interface Props {
  onClick: (e: MouseEvent) => void
}

export const Button = defineComponent<Props>({
  setup(prop, context) {
    return () => (
      <button class={s.button}>
        {context.slots.default?.()}
      </button>
    )
  }
})