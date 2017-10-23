/**
 * Декоратор, который позволяет откладывать повторные вызовы функций на N милисекунд,
 * при этом, повторый вызов сбрасывает время и предыдущий вызов, и выполнентся только
 * по истечении N милисекунд
 *
 * @param {function} fn декорируемая функция
 * @param {number} ms время в милисекундах
 * @return {function}
 */

function debounce (fn, ms) {
  let pause = false
  return function () {
    if (!pause) {
      pause = true
      fn.apply(this, arguments)
      setTimeout(() => {
        pause = false
      }, ms)
    }
  }
}

var foo = debounce(function (msg) {
  console.log(msg)
}, 5000)


foo('test 1')
setTimeout(() => foo('test 2'), 0)
setTimeout(() => foo('test 3'), 3000)
setTimeout(() => foo('test 4'), 7500)
setTimeout(() => foo('test 5'), 14000)

// результат:
// >test 1
// >test 4
// >test 5