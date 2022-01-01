import React from 'react';

import {PROJECTS} from 'constants/projects'
import AbilitiesPanel from 'components/AbilitiesPanel';
import CardSelect from 'components/CardSelect'
import Gallery from 'components/Gallery';
import Footer from 'components/Footer'
import * as styles from './styles'

const cards = PROJECTS.map(({name, url, imagePath, subtitle, year })=> ({link: url, title: name, subtitle, imagePath, year}))

const App = () => {
  return (
    <styles.Container>
      {/* Intro Screen */}
      {/* <AbilitiesPanel/> */}
      <CardSelect/>
      <Gallery data={cards}/>
      <Footer/>
    </styles.Container>
  )
};

export default App;
