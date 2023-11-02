<template>
  <div>
    <div class="parent">
      <div><span class="text-3xl font-bold pr-32">:</span></div>

      <div class="child mt-[-25px]">
        <form>
          <input
            v-for="(n, index) in code"
            :id="'input_' + index"
            :key="index"
            v-model="code[index]"
            type="number"
            pattern="\d*"
            class="border-2 border-gray-300 text-center rounded-lg max-w-[70px]"
            maxlength="1"
            @input="handleInput"
            @keypress="isNumber"
            @keydown.delete="handleDelete"
            @paste="onPaste"
          />
          <button
            type="button"
            class="py-2.5 px-5 mr-2 mb-2 text-md font-medium text-gray-900 focus:outline-none bg-white rounded-lg border-2 border-gray-300 hover:bg-gray-100 hover:text-green-600 focus:z-10 focus:ring-4 focus:ring-gray-200"
          >
            Reduce
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const code: string[] = Array(4).fill('')
let dataFromPaste: string[] | undefined
const keysAllowed: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const timeArr = ref(Array(4).fill(''))
function isNumber(event: Event) {
  ;(event.currentTarget as HTMLInputElement).value = ''
  const keyPressed: string = (event as KeyboardEvent).key
  if (!keysAllowed.includes(keyPressed)) {
    event.preventDefault()
  }
}
function handleInput(event: Event) {
  const inputType = (event as InputEvent).inputType
  let currentActiveElement = event.target as HTMLInputElement

  if (inputType === 'insertText')
    (currentActiveElement.nextElementSibling as HTMLElement)?.focus()

  if (inputType === 'insertFromPaste' && dataFromPaste) {
    for (const num of dataFromPaste) {
      const id: number = parseInt(currentActiveElement.id.split('_')[1])
      currentActiveElement.value = num
      code[id] = num
      if (currentActiveElement.nextElementSibling) {
        currentActiveElement =
          currentActiveElement.nextElementSibling as HTMLInputElement
        ;(currentActiveElement.nextElementSibling as HTMLElement)?.focus()
      }
    }
  }
  checkTimeValue(code)
}

function checkTimeValue(code: Array<string>) {
  if (code.some((element) => element !== '0' && element !== '')) {
    timeArr.value = code
  }
}

function handleDelete(event: Event) {
  const value = (event.target as HTMLInputElement).value
  const currentActiveElement = event.target as HTMLInputElement
  if (!value)
    (currentActiveElement.previousElementSibling as HTMLElement)?.focus()
}

function onPaste(event: Event) {
  dataFromPaste = (event as ClipboardEvent).clipboardData
    ?.getData('text')
    .trim()
    .split('')

  if (dataFromPaste) {
    for (const num of dataFromPaste) {
      if (!keysAllowed.includes(num)) event.preventDefault()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto;
}
.parent {
  text-align: center;
  position: relative;
  margin: auto;
  height: 100px;
}

.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

form {
  display: flex;
  flex-direction: row;
  gap: 18px;
}
input[type='number'] {
  width: 150px;
  height: 50px;
  font-size: 50px;
  text-align: center;
  caret-color: transparent !important;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}

@media only screen and (max-width: 1080px) {
  input[type='number'] {
    width: 80px;
  }
}
@media only screen and (max-width: 600px) {
  input[type='number'] {
    width: 40px;
  }
}
@media only screen and (max-width: 500px) {
  form {
    gap: 8px;
  }
  input[type='number'] {
    width: 12vw;
    font-size: 40px;
  }
}
</style>
