import s from './welcome.module.scss';
import { FunctionalComponent } from 'vue';
export const First: FunctionalComponent = () => {
  return (
    <div class={s.card}>
      <svg class={s.svg}>
        <use xlinkHref='#pig'></use>
      </svg>
      <h2>会挣钱<br />还要会省钱</h2>
    </div>
  )
}

First.displayName = 'First'