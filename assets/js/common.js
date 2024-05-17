/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
document.addEventListener('DOMContentLoaded', () => {
  customToggler()
  customSelect()
})

const CUSTOME_TOGGLER = {
  'modal': {
    actavated() {
      document.body.style.overflow = 'hidden'

      const nav = document.body.querySelector('[data-target="header__burger"]')
      if (nav) {
        nav.classList.remove('header__burger--active')
      }
    },
    deactivated() {
      document.body.style.overflow = null
    }
  }
}

function customToggler() {
  document.querySelectorAll('[data-trigger]')?.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      document.querySelectorAll(`[data-target=${trigger.dataset.trigger}]`)?.forEach((target) => {
        const addFunc = CUSTOME_TOGGLER[target.dataset.handler]
        if (target.classList.contains(target.dataset.class)) {
          if (addFunc) addFunc.deactivated()
          target.classList.remove(target.dataset.class);
        } else {
          if (addFunc) addFunc.actavated()
          target.classList.add(target.dataset.class);
        }
      })
    })
  })
}

function customSelect() {
  const customSelects = document.querySelectorAll('.custom-select')

  customSelects.forEach((customSelect) => {
    const customSelectInput = customSelect.querySelector('.custom-select__input')
    const input = customSelectInput.querySelector('input')

    customSelectInput.addEventListener('click', () => {
      customSelect.classList.toggle('custom-select--active')
    })

    customSelect.addEventListener('click', (e) => {
      const isOption = e.target.closest('.custom-select__option')
      if (isOption) {
        const value = isOption.querySelector('input')?.value

        if (value) {
          input.value = value
        }
      }
    })

    document.addEventListener('click', (e) => {
      const isSelect = e.target.closest('.custom-select')

      if ((!isSelect || isSelect !== customSelect) && customSelect.classList.contains('custom-select--active')) {
        customSelect.classList.remove('custom-select--active')
      }
    })
  })
}
/******/ })()
;
//# sourceMappingURL=common.js.map