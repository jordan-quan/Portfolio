import { Field } from 'formik'
import { InputHTMLAttributes } from 'react'

import { useAnimation } from 'framer-motion'

import * as styles from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  as?: 'textarea' | 'input'
}

const Input = ({ as = 'input', ...props }: InputProps) => {
  const controls = useAnimation()
  const FieldControls = useAnimation()

  const onFocus = () => {
    controls.start({
      width: '100%'
    })
    FieldControls.start({
      background: '#e5e5e5'
    })
  }

  const onBlur = () => {
    controls.start({
      width: '0%'
    })
    FieldControls.start({
      background: '#ffffff'
    })
  }

  return (
    <styles.InputWrapper animate={FieldControls} transition={{ duration: 0 }}>
      <styles.FieldWrapper tag={as}>
        <Field as={as} onFocus={onFocus} onBlur={onBlur} {...props} />
      </styles.FieldWrapper>
      <styles.LightUnderline />
      <styles.Underline
        initial={{ width: '0%' }}
        animate={controls}
        transition={{ duration: 0.4 }}
      />
    </styles.InputWrapper>
  )
}

export default Input
