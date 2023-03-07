import { defineComponent, defineProps, PropType } from 'vue';
import s from './Icon.module.scss';

export type IconName = 'add' | 'chart' | 'clock' | 'cloud' | 'nodata' | 'details' | 'statistics' |
  'lime' | 'pig' | 'menu' | 'charts' | 'notify' | 'export' | 'left' | 'notes' | 'date' | 'add1'

export const Icon = defineComponent({
  props: {
    name: {
      type: String as PropType<IconName>,
      required: true,
    },
    onClick: {
      type: Function as PropType<(e: MouseEvent) => void>
    }
  },
  setup: (props, context) => {
    return () => (
      <svg class={s.icon} onClick={props.onClick}>
        <use xlinkHref={'#' + props.name}></use>
      </svg>
    )
  }
})

