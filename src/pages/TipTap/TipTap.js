import React from 'react';
import Zooming from 'zooming';
import FaApple from 'react-icons/lib/fa/apple';
import MdAndroid from 'react-icons/lib/md/android';
import TiDevicePhone from 'react-icons/lib/ti/device-phone';
import TiCalendarOutline from 'react-icons/lib/ti/calendar-outline';

// Components
import Row from './../../components/Row/Row';
import Tag from './../../components/Tag/Tag';
import Tags from './../../components/Tags/Tags';
import Card from './../../components/Card/Card';
import Banner from './../../components/Banner/Banner';
import Button from './../../components/Button/Button';
import Column from './../../components/Column/Column';
import Picture from './../../components/Picture/Picture';
import CallToAction from './../../components/CallToAction/CallToAction';
import ProjectDetail from './../../components/ProjectDetail/ProjectDetail';
import VerticalSeparator from './../../components/VerticalSeparator/VerticalSeparator';
import ProjectDetailContainer from './../../components/ProjectDetailContainer/ProjectDetailContainer';

import TipTapBanner from './../../assets/img/tiptap/tiptap_banner.jpg';
import TipTapPromo from './../../assets/img/tiptap/tiptap_promo.jpg';

// Utils
import projects from './../../utils/getProjectList';

const zooming = new Zooming({ bgColor: '#070606' });

export default ({ route }) => (
  <article>
    {/* Banner */}
    <Banner src={TipTapBanner} />
    {/* Content */}
    <section className={'wrapper'}>
      {/* Intro */}
      <h2>TipTap</h2>
      {/* Project Details */}
      <ProjectDetailContainer>
        <ProjectDetail>
          <TiDevicePhone /> Mobile App Development
        </ProjectDetail>
        <ProjectDetail>
          <TiCalendarOutline /> March 2018
        </ProjectDetail>
      </ProjectDetailContainer>
      {/* Tags */}
      <Tags>
        <Tag>React</Tag>
        <Tag>React Native</Tag>
        <Tag>Javascript</Tag>
        <Tag>Mobile App Dev</Tag>
      </Tags>
      {/* Description */}
      <h3>Tipping made easy.</h3>
      <p>
        TipTap is a quick and easy tipping calculator. Simply enter an amount and you'll instantly get a tip amount and a total bill amount.
        You can also set your preferred tips so you can quickly swap between them when entering an amount.
        Want to see all your tips and their totals for a certain amount? Simply press the Calculate button and you can view a detailed list of tips.
        TipTap also allows you to split the bill with up to 11 other people.
      </p>
    </section>
    <Picture alt={'TipTap Promotion'} zooming={zooming} src={TipTapPromo} />
    {/* CTA */}
    <CallToAction>
      <h3>Download the App now!</h3>
      {/* App Store */}
      <a href={'https://itunes.apple.com/us/app/tiptap-tip-calculator/id1360335414'} target={'_blank'} rel={'noopener noreferrer'}>
        <Button>
          <FaApple size={28} /> App Store
        </Button>
      </a>
      <VerticalSeparator>or</VerticalSeparator>
      {/* Play Store */}
      <a href={'https://play.google.com/store/apps/details?id=com.tiptap'} target={'_blank'} rel={'noopener noreferrer'}>
        <Button>
          <MdAndroid size={28} /> Play Store
        </Button>
      </a>
      <p>
        Made in collaboration with <a href={'http://goodhombres.blogspot.com/'} target={'_blank'} rel={'noopener noreferrer'}>Christian Medina</a>.
      </p>
    </CallToAction>
    <Row wrap>
      {
        projects
          .filter((project) => project.link !== route)
          .map((project, index, list) => {
            return (
              <Column key={index} space={parseInt(100 / list.length, 10)} full>
                <Card
                  project={project}
                />
              </Column>
            );
          })
      }
    </Row>
  </article>
);