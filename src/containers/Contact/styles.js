import { motion } from 'framer-motion'
import styled from 'styled-components'

import { Form as FormComponent } from 'formik'

import AnimatedText from 'components/AnimatedText'
import Button from 'components/Button'
import AnimatedBlock from 'components/AnimatedBlock'

export const Contact = styled(motion.div)`
  position: relative;
  height: 100vh;
`

export const SubmitButton = styled(Button)`
  margin: 0px 40px 0px -20px;
`

export const Spinner = styled.div`
  margin: 17px 0px 17px -10px;
  transform: scale(0.8);
`

export const SendFeedback = styled.h4`
  padding: 10px 20px;
  margin: auto 0px;
  font-weight: 400;
  font-size: 16px;
  ${({ state }) => {
    switch (state) {
      case 'unsent':
        return 'opacity: 0'
      case 'success':
        return 'background: #d8f1d9;'
      case 'failed':
        return 'background: #f0cbcb;'
    }
  }}
`

export const SubmitArea = styled.div`
  display: flex;
  margin-top: 20px;
`

export const Container = styled(motion.div)`
  width: 70%;
  padding: 100px;
  margin: 0px auto;
  height: 100%:
`

export const Form = styled(FormComponent)`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Title = styled(AnimatedBlock)`
  text-transform: lowercase;
  font-size: 52px;
  font-weight: 600;
`

export const Subtitle = styled(AnimatedText)`
  margin-top: 20px;
  margin-bottom: 40px;
  font-weight: 200;
  font-size: 16px;
`

export const Header = styled.div`
  text-align: left;
  margin-left: 10px;
  color: #363636;
`

export const Error = styled.h4`
  margin: 0px;
  text-transform: uppercase;
  font-weight: 200px;
  font-size: 12px;
  color: #ae3131;
`

export const Content = styled(AnimatedText)`
  display: flex;
  justify-content: center;
  font-size: 16px;
`
export const FooterLinks = styled.div`
  margin-top: 50px;
  position: relative;
  text-transform: uppercase;
  font-weight: 200;
  font-size: 13px;
  color: white;
  font-family: 'Montserrat', sans-serif;
`

export const Trademark = styled.div`
  position: absolute;
  left: 100px;
`

export const SocialSection = styled.div`
  position: absolute;
  right: 100px;
`

export const Social = styled.a`
  margin-left: 30px;
  text-decoration: none;
  color: white;
`
export const Footer = styled(motion.div)`
  position: absolute;
  bottom: 0px;
  background: black;
  height: 125px;
  width: 100%;
  z-index: 30;
`
