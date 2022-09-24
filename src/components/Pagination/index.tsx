import { Arrow } from 'assets/svg'
import { PageLink } from 'ts/interfaces'
import * as styles from './styles'
import { useAnimation } from 'framer-motion'

type PaginationProps = {
  previous: PageLink | undefined
  next: PageLink | undefined
  color: string
}

const Pagination = ({ previous, next, color }: PaginationProps) => {
  const controls = useAnimation()

  const setColor = (color: string, x?: string) => {
    controls.start({
      x: x || '0px',
      background: color
    })
  }

  const transition = { duration: 0.5, ease: [0.77, 0, 0.175, 1] }

  return (
    <>
      <styles.Container>
        {previous && (
          <styles.Previous to={`/${previous.link}`}>
            <styles.LinkContent
              onMouseEnter={() => setColor(previous.colours.primary, '-25px')}
              onMouseLeave={() => setColor(color)}
              whileHover="hover"
              inital="inital"
              animate="animate">
              <styles.TextWrapper
                variants={{
                  hover: { x: '-20px' }
                }}
                transition={transition}>
                <styles.Title>{previous.title}</styles.Title>
                <styles.Subtitle>{previous.subtitle}</styles.Subtitle>
              </styles.TextWrapper>
              <styles.ArrowWrapper>
                <Arrow />
              </styles.ArrowWrapper>
              <styles.ImageWrapper
                variants={{
                  hover: { x: '50px' }
                }}
                transition={transition}>
                <styles.Image src={previous.imagePath} />
              </styles.ImageWrapper>
            </styles.LinkContent>
          </styles.Previous>
        )}
        <styles.Divider color={color} animate={controls} transition={transition} />
        {next && (
          <styles.Next to={`/${next.link}`}>
            <styles.LinkContent
              onMouseEnter={() => setColor(next.colours.primary, '25px')}
              onMouseLeave={() => setColor(color)}
              whileHover="hover"
              inital="inital"
              animate="animate">
              <styles.TextWrapperRight
                variants={{
                  hover: { x: '20px' }
                }}
                transition={transition}>
                <styles.Title>{next.title}</styles.Title>
                <styles.Subtitle>{next.subtitle}</styles.Subtitle>
              </styles.TextWrapperRight>
              <styles.ArrowWrapperRight>
                <Arrow />
              </styles.ArrowWrapperRight>
              <styles.ImageWrapperRight
                variants={{
                  hover: { x: '-50px' }
                }}
                transition={transition}>
                <styles.Image src={next.imagePath} />
              </styles.ImageWrapperRight>
            </styles.LinkContent>
          </styles.Next>
        )}
      </styles.Container>

      <styles.Footer>
        <styles.Line>
          <styles.FooterText>
            Let's work together, don't hesitate to{' '}
            <styles.ColorText to="/contact">say hi</styles.ColorText>
          </styles.FooterText>
        </styles.Line>

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

        <styles.Block />
      </styles.Footer>
    </>
  )
}

export default Pagination
