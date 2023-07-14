import { onClickOutside } from '@vueuse/core'

export const useClickOutside = (target, callback) => {
  onClickOutside(target, (event) => callback(target, event))

  return { target }
}