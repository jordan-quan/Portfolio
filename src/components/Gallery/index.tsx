import React, {useEffect, useState} from 'react';
import {cacheImages} from 'utils/cacheImages'
import PerspectiveCard from 'components/PerspectiveCard';
import Button from 'components/Button'

import * as styles from './styles';

interface Card {
  link: string;
  title: string;
  subtitle: string;
  year: number;
  imagePath: string;
}

interface Props {
  data: Card[]
}

const Gallery = ({data}: Props) => {

  useEffect(()=>{
    cacheImages(data.map(({imagePath}) => imagePath));;
  },[])

	return (
    <styles.Gallery>
        <styles.TwoTall>
          <h1>Take a look at some of the projects i've done:</h1>
        </styles.TwoTall>
        <styles.ThreeTall>
          <PerspectiveCard {...data[0]}/>
        </styles.ThreeTall>
        <styles.ThreeTall>
          <PerspectiveCard {...data[2]}/>
        </styles.ThreeTall>
        <styles.ThreeTall addMargin>
         <PerspectiveCard {...data[1]}/>
        </styles.ThreeTall>
        <styles.ButtonWrapper>
          <Button link='projects/' text='View More' />
        </styles.ButtonWrapper>


    </styles.Gallery>

	);
};



export default Gallery;