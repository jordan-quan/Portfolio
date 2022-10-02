import axios from 'axios'
import { useState } from 'react'
import SyncLoader from 'react-spinners/SyncLoader'
import { Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import HomeButton from 'components/HomeButton'
import Input from 'components/Input'
import * as styles from './styles'

const schema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().required('Required')
})

interface FormValues {
  name: string
  email: string
  message: string
}

const Contact = () => {
  const [messageState, setMessageState] = useState('unsent')
  const [sending, setSending] = useState(false)

  const onSubmit = async (formData: FormValues, { resetForm }: { resetForm: () => void }) => {
    try {
      setSending(true)
      await axios.post(`${process.env.PUBLIC_URL}/api/email`, {
        ...formData
      })
      setMessageState('success')
      resetForm()
    } catch (e) {
      setMessageState('failed')
    }
    setSending(false)
  }

  const messages: { [key: string]: string } = {
    unsent: '',
    success: 'Thanks for reaching out :)',
    failed: `Sorry, an issue occured. You can reach me at jordanquan5@gmail.com.`
  }

  const initialValues: FormValues = { name: '', email: '', message: '' }

  return (
    <styles.Contact
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}>
      <HomeButton />
      <styles.Container>
        <styles.Header>
          <styles.Title tag="h1">let's chat</styles.Title>
          <styles.Subtitle tag="h4">
            Feel free to reach out if you're interested in working together {':)'}
          </styles.Subtitle>
        </styles.Header>

        <styles.Content tag="div" delay={0.5}>
          <Formik initialValues={initialValues} validationSchema={schema} onSubmit={onSubmit}>
            <styles.Form>
              <styles.Error>
                <ErrorMessage name="name" />
              </styles.Error>
              <Input name="name" placeholder="Name" />
              <styles.Error>
                <ErrorMessage name="email" />
              </styles.Error>
              <Input name="email" placeholder="Email" />
              <styles.Error>
                <ErrorMessage name="message" />
              </styles.Error>
              <Input as="textarea" name="message" placeholder="Message" />
              <styles.SubmitArea>
                <styles.SubmitButton type="submit" text="Send Message" />
                {sending ? (
                  <styles.Spinner>
                    <SyncLoader />
                  </styles.Spinner>
                ) : (
                  <styles.SendFeedback state={messageState}>
                    {messages[messageState]}
                  </styles.SendFeedback>
                )}
              </styles.SubmitArea>
            </styles.Form>
          </Formik>
        </styles.Content>
      </styles.Container>
      <styles.Footer
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}>
        <styles.FooterLinks>
          <styles.Trademark>© 2022 - ALL RIGHTS RESERVED - Jordan Quan 2022</styles.Trademark>
          <styles.SocialSection>
            <styles.Social href="https://github.com/jordan-quan" target="blank">
              Github
            </styles.Social>
            <styles.Social href="https://www.linkedin.com/in/jordan-quan" target="blank">
              Linkedin
            </styles.Social>
            <styles.Social href="https://www.instagram.com/jordanquannn" target="blank">
              Instagram
            </styles.Social>
          </styles.SocialSection>
        </styles.FooterLinks>
      </styles.Footer>
    </styles.Contact>
  )
}

export default Contact
