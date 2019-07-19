import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from './welcome.stories';
import Button from '../app/components/Button';
import PageChange from '../app/components/pageChange';
import SmoothScroll from '../app/components/smoothScroll';

storiesOf('Intro', module).add('Что это', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Анимации', module)
  .add('Анимация перехода между страницами', () => <PageChange />)
  .add('Плавный скроллинг', () => <SmoothScroll />);
