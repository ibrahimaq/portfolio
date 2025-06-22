import { KeyboardEvent, useEffect, useState } from "react"
import { ErrorType, ITextfieldProps } from "./Textfield"
import Label from "./Label"
import ErrorMessage from "./ErrorMessage"
import React from "react"
import { validator, getInputStyle } from "../../tools/tools"

interface ITextAreaProps extends Omit<ITextfieldProps, "type"> {}

const TextArea = ({
  onValueUpdate,
  label,
  id,
  placeholder,
  initialError,
}: ITextAreaProps) => {
  const [value, setValue] = useState<string>("")
  const [error, setError] = useState<ErrorType>(initialError || null)
  const [validated, setValidated] = useState<boolean>(false)

  useEffect(() => {
    if (validated) {
      // console.log(type, value)
      onValueUpdate(value, id)
    }
    if (!validated) {
      onValueUpdate("", id)
    }
  }, [value, validated])

  useEffect(() => {
    if (initialError) setError(initialError)
    // console.log(initialError)
  }, [initialError])

  const handleBlur = () => {
    setError("")
    setValidated(false)
    // console.log(value.length)

    const result = validator("message", value)
    if (result.valid) setValidated(true)
    if (!result.valid) setError(result.message)
  }

  // prevent form submission on Enter
  // const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
  // 	if (e.key === "Enter") e.preventDefault();
  // };

  return (
    <>
      <div className="flex flex-col">
        <Label label={label} id={id} />
        <textarea
          name={id}
          id={id}
          value={value}
          placeholder={placeholder}
          onBlur={handleBlur}
          // onKeyDown={e => onKeyDown(e)}
          onChange={e => setValue(e.target.value)}
          className={`p-5 rounded-md focus:outline-sky-500 resize-none
            ${getInputStyle({ error, validated })}
            `}
        />
        <span className={`${value.length > 500 && "text-red-400"}`}>
          {value.length}/500
        </span>
        {error && <ErrorMessage error={error} />}
      </div>
    </>
  )
}

export default TextArea
