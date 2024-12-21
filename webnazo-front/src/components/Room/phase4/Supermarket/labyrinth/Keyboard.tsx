interface KeyboardType {
  str: string
}
const Keyboard = (props: KeyboardType) => {
  return (
    <kbd className="rounded-lg border border-gray-200 bg-gray-100 px-2 py-1.5 text-2xl font-semibold text-gray-800 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100">
      {props.str}
    </kbd>
  )
}
export default Keyboard
