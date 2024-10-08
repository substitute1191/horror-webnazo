import { useState } from "react"

const InputComponent = ({
  label,
  value,
  placeholder,
  onChange,
}: {
  label: string
  value: string
  placeholder: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="group relative mb-4 mt-6 text-4xl">
      <input
        type="text"
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={isFocused || value ? placeholder : ""}
        className="peer w-full rounded-full border-2 border-pink-300 bg-white px-4 py-2 text-5xl text-gray-700 outline-none transition-all duration-300 ease-in-out focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
      />
      <label
        className={`absolute left-4 origin-left transform text-gray-500 transition-all duration-300 ease-in-out ${isFocused || value ? "-translate-y-6 scale-75 text-pink-500" : "translate-y-2 scale-100"} ${isFocused ? "text-pink-500" : ""}`}
      >
        {label}
      </label>
    </div>
  )
}

export default InputComponent
