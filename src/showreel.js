import React from 'react';
import shortId from 'shortid';
import Tabs from './lib/Navigation/Tabs/Tabs';
import Navbar from './lib/Navigation/Navbar/Navbar';
import * as Embed from './lib/Media';
import Button from './lib/Form/Button/Button';
import DropDown from './lib/Form/DropDowns/DropDown';
import Input from './lib/Form/Input/Input';
import Select from './lib/Form/Select/Select';
import Textarea from './lib/Form/Textarea/Textarea';

import Facet from './lib/Misc/Facet/';
import ButtonGroup from './lib/Misc/ButtonGroup/ButtonGroup';
import InputGroup from './lib/Misc/InputGroup/InputGroup';
import Mention from './lib/Misc/Mention/Mention';
import Cloud from './lib/Charts/Cloud/Cloud';
import Progress from './lib/Misc/Progress/Progress';
import MultiBar from './lib/Misc/Progress/MultiBars';
import Pagination from './lib/Misc/Pagination/Pagination';
import Jumbotron from './lib/Misc/Jumbotron/Jumbotron';
import Bar from './lib/Charts/Bar/Bar';
import Area from './lib/Charts/Area/Area';
import Line from './lib/Charts/Line/Line';
import Pyramid from './lib/Charts/Pyramid/Pyramid';
import Pie from './lib/Charts/Pie/Pie';
import Donut from './lib/Charts/Donut/Donut';

import Toggle from "./lib/Form/Toggle/Toggle"
import Headings from './lib/Typography/Headings/Headings';
import Bubble from './lib/Charts/Bubble/Bubble';
import Spiderweb from './lib/Charts/Spiderweb/Spiderweb';
import Sunburst from './lib/Charts/Sunburst/Sunburst';
import Activity from './lib/Charts/Activity/Activity';
import LevelsTreeMap from './lib/Charts/TreeMap/LevelsTreeMap';
import LargeTreeMap from './lib/Charts/TreeMap/LargeTreeMap';
import SemiCircle from './lib/Charts/Donut/SemiCircle';
import InfluencerMedia from "./lib/Misc/InfluencerMedia/InfluencerMedia";


import Row from "./lib/Grid/Row";

import Display from './lib/Typography/Display/Display';
import Snippet from './lib/Typography/Snippet';

import Icon from './lib/Typography/Icon';
import IconSquare from './lib/Misc/IconSquare';

import MediaIcon from './lib/Media/MediaIcon/MediaIcon';
import InfluencerMediaOverlap from "./lib/Misc/InfluencerMedia/InfluencerMediaOverlap";
import Dismiss from './lib/Containers/Alerts/Dismiss';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardImage,
  CardLink,
  CardList,
  CardSubtitle,
  CardText,
  CardTitle
} from "./lib/Containers/Card";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalTitle,
  ModalClose,
  ModalContent
} from './lib/Containers/Modal';

import Table from './lib/Table/Simple';
import LegendBox from './lib/Misc/Metrics/LegendBox';
import LegendCircle from './lib/Misc/Metrics/LegendCircle';
import LegendArrow from './lib/Misc/Metrics/LegendArrow';

import Badge from './lib/Typography/Badge';

import 'bootstrap-material-design/dist/css/bootstrap-material-design.css';
import RangeSlideBar from "./lib/Misc/RangeSlideBar/RangeSlideBar";

const tabsComponents = [
  {
    tab: 'Tab 1',
    content: (
      <div>
        <Headings level={6} text={'Tab 1'} classes={'mt-3'}/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip
          ex ea commodo consequat.
        </p>
      </div>
    )
  },
  {
    tab: 'Tab 2',
    content: (
      <div>
        <Headings level={6} text={'Tab 2'} classes={'mt-3'}/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip
          ex ea commodo consequat.
        </p>
      </div>
    )
  },
  {
    tab: 'Tab 3',
    content: (
      <div>
        <Headings level={6} text={'Tab 3'} classes={'mt-3'}/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip
          ex ea commodo consequat.
        </p>
      </div>
    )
  }
];

const btns = [
  {text: "All", type: "success"},
  {text: "Neg", type: "danger"},
  {text: "None", type: "Secondary"},
  {text: "Card", type: "primary"},
];

const bars = [
  {
    value: 15,
    color: 'red'
  },
  {
    value: 8,
    color: 'gray'
  },
  {
    value: 77,
    color: 'green'
  }
];

const facets = [{
  bodyTop: true,
  body: <Input type='text' form/>
}, {
  bodyTop: true,
  title: 'ranking',
  body: <RangeSlideBar/>
}, {
  title: 'saved',
  body: (
    <div>
      <a href='/' className='btn active'>All</a>
      <a href='/' className='btn btn-link active'>Yes</a>
      <a href='/' className='btn btn-link active'>No</a>
    </div>
  )
}, {
  title: 'sentiment',
  bodyTop: true,
  body: <ButtonGroup buttons={btns} size='md'/>
}, {
  title: 'media type',
  collapsible: true,
  body: (
    <Card>
      <CardBody>
        <CardList items={['Facebook', 'Instagram', 'Twitter', 'Youtube', 'Linkedin']}/>
      </CardBody>
    </Card>
  )
}];

export default () => {
  return (
    <div className='container-fuild'>
      <div className={"col-12"}>
        <hr/>
        <div className='row'>
          <div className='col-4'>
            <div className="list-group">
              {facets.map(facet => (
                <Facet key={shortId.generate()} title={facet.title}
                       bodyTop={facet.bodyTop} body={facet.body}
                       collapsible={facet.collapsible}/>
              ))}
            </div>
          </div>
        </div>
        <hr/>
        <Display level={3} content={"Kitchenette v0.1.0"}/>
        <Headings level={1} text={"Badges"}/>
        <Row cols={[
          <Badge type={"danger"} text={"Danger"}/>,
          <Badge type={"success"} text={"Success"}/>,
          <Badge type={"primary"} text={"Primary"}/>,
          <Badge type={"dark"} text={"Dark"}/>,
          <Badge type={"warning"} text={"Warning"}/>,
          <Badge type={"info"} text={"Info"}/>,
          <Badge type={"light"} text={"Light"}/>,
          <Badge type={"secondary"} text={"secondary"}/>
        ]}/>

        <Headings level={1} text={"Badges Pills"}/>
        <Row cols={[
          <Badge type={"danger"} text={"Danger"} pill/>,
          <Badge type={"success"} text={"Success"} pill/>,
          <Badge type={"primary"} text={"Primary"} pill/>,
          <Badge type={"dark"} text={"Dark"} pill/>,
          <Badge type={"warning"} text={"Warning"} pill/>,
          <Badge type={"info"} text={"Info"} pill/>,
          <Badge type={"light"} text={"Light"} pill/>,
          <Badge type={"secondary"} text={"secondary"} pill/>
        ]}/>

        <Headings level={1} text={"Icon Square"}/>
        <IconSquare/>
        <Headings level={1} text={"Metrics's Legend with arrows"}/>
        <LegendArrow data={[
          {value: '9.1 k', subLabel: "people talking about", icon: {icon: "map", type: "regular", size: 40}},
          {value: '18 k', subLabel: "mentions", icon: {icon: "compass", type: "regular", size: 40}},
          {value: '4 m', subLabel: "estimated reach", icon: {icon: "comments", type: "regular", size: 40}},
          {value: '31.2 k', subLabel: "social interactions", icon: {icon: "newspaper", type: "regular", size: 40}}
        ]}/>
        <Headings level={1} text={"Metrics's Legend simple"}/>
        <LegendArrow data={[
          {value: '9.1 k', subLabel: "people talking about", icon: {icon: "map", type: "regular", size: 40}},
          {value: '18 k', subLabel: "mentions", icon: {icon: "compass", type: "regular", size: 40}},
          {value: '4 m', subLabel: "estimated reach", icon: {icon: "comments", type: "regular", size: 40}},
          {value: '31.2 k', subLabel: "social interactions", icon: {icon: "newspaper", type: "regular", size: 40}}
        ]}/>

        <div className={"row justify-content-center"}>
          <LegendBox
            icon={{icon: "angry", type: "regular", size: 40}}
            value={"100k"}
            label={"negative"}
            subLabel={"mentions"}/>
          <LegendBox
            icon={{icon: "meh", type: "regular", size: 40}}
            value={"4k"}
            label={"neutral"}
            subLabel={"mentions"}/>
          <LegendBox
            icon={{icon: "grin-beam", type: "regular", size: 40}}
            value={"50k"}
            label={"positive"}
            subLabel={"mentions"}/>
        </div>
        <div className={"row justify-content-center"}>
          <LegendCircle
            percent={5}
            value={"675"}
            label={"mentions"}/>
          <LegendCircle
            percent={5}
            value={"88 k"}
            label={"mentions"}/>
          <LegendCircle
            percent={5}
            value={"5 k"}
            label={"mentions"}/>
        </div>
        <Headings level={1} text={'Avatar Media'}/>
        <InfluencerMediaOverlap mediaType='facebook' size='128' mediaPosition='tr'/>
        <Headings level={1} text={'Media Icon'}/>
        <MediaIcon mediaType="twitter" size={32}/>
        <MediaIcon mediaType="facebook" size={32}/>
        <MediaIcon mediaType="instagram" size={32}/>
        <Headings level={1} text={'Avatar'}/>
        <InfluencerMedia/>
        <Headings level={1} text={'Icons'}/>
        <Row cols={[
          <Row cols={[
            <Icon icon={"github"} collection={"brand"} size={36} type='fa'/>,
            <Icon icon={"google"} collection={"brand"} size={36} type='fa'/>,
            <Icon icon={"facebook"} collection={"brand"} size={36} type='fa'/>,
            <Icon icon={"twitter"} collection={"brand"} size={36} type='fa'/>,
            <Icon icon={"youtube"} collection={"brand"} size={36} type='fa'/>,
            <Icon icon={"microsoft"} collection={"brand"} size={36} type='fa'/>,
            <Icon icon={"amazon"} collection={"brand"} size={36} type='fa'/>,
            <Icon icon={"android"} collection={"brand"} size={36} type='fa'/>,
            <Icon icon={"apple"} collection={"brand"} size={36} type='fa'/>,
            <Icon icon={"instagram"} collection={"brand"} size={36} type='fa'/>,
          ]}/>,
          <Snippet code={"<Icon icon={'github'} collection={'brand'} size={36} type='fa'/>"}/>
        ]}/>

        <Row cols={[
          <Row cols={[
            <Icon icon={"angry"} collection={"solid"} size={36} type='fa'/>,
            <Icon icon={"meh"} collection={"solid"} size={36} type='fa'/>,
            <Icon icon={"grin-beam"} collection={"solid"} size={36} type='fa'/>,
            <Icon icon={"comments"} collection={"solid"} size={36} type='fa'/>,
            <Icon icon={"compass"} collection={"solid"} size={36} type='fa'/>,
            <Icon icon={"map"} collection={"solid"} size={36} type='fa'/>,
            <Icon icon={"paper-plane"} collection={"solid"} size={36} type='fa'/>,
            <Icon icon={"thumbs-down"} collection={"solid"} size={36} type='fa'/>,
            <Icon icon={"thumbs-up"} collection={"solid"} size={36} type='fa'/>,
            <Icon icon={"newspaper"} collection={"solid"} size={36} type='fa'/>
          ]}/>,
          <Snippet code={'<Icon icon={"angry"} collection={"solid"} size={36} type=\'fa\'/>'}/>
        ]}/>

        <Row cols={[
          <Row cols={[
            <Icon icon={"angry"} collection={"regular"} size={36} type='fa'/>,
            <Icon icon={"meh"} collection={"regular"} size={36} type='fa'/>,
            <Icon icon={"grin-beam"} collection={"regular"} size={36} type='fa'/>,
            <Icon icon={"comments"} collection={"regular"} size={36} type='fa'/>,
            <Icon icon={"compass"} collection={"regular"} size={36} type='fa'/>,
            <Icon icon={"map"} collection={"regular"} size={36} type='fa'/>,
            <Icon icon={"paper-plane"} collection={"regular"} size={36} type='fa'/>,
            <Icon icon={"thumbs-down"} collection={"regular"} size={36} type='fa'/>,
            <Icon icon={"thumbs-up"} collection={"regular"} size={36} type='fa'/>,
            <Icon icon={"newspaper"} collection={"regular"} size={36} type='fa'/>
          ]}/>,
          <Snippet code={'<Icon icon={"angry"} collection={"regular"} size={36} type=\'fa\'/>'}/>
        ]}/>

        <Row cols={[
          <Row cols={[
            <Icon icon='cake' size={36} type='md'/>,
            <Icon icon='domain' size={36} type='md'/>,
            <Icon icon='notifications' size={36} type='md'/>,
            <Icon icon='pages' size={36} type='md'/>,
            <Icon icon='poll' size={36} type='md'/>,
            <Icon icon='whatshot' size={36} type='md'/>,
            <Icon icon='plus_one' size={36} type='md'/>,
            <Icon icon='share' size={36} type='md'/>,
            <Icon icon='all_inclusive' size={36} type='md'/>,
          ]}/>,
          <Snippet code={"<Icon icon='cake' size={36} type='md'/>"}/>
        ]}/>

        <Headings level={1} text={'Tables'}/>
        <Table data={[
          {values: ["batata", "batata"]},
          {values: ["batata", "batata"]},
          {values: ["batata", "batata"]},
          {values: ["batata", "batata"]}
        ]}/>

        <Headings level={1} text={'Charts'}/>
        <Headings level={2} text={'Mutibar Charts'}/>
        <div className={"row"}>
          <div className="col-6">
            <MultiBar bars={bars} size='lg'/>
          </div>
          <div className="col-6">
            <Snippet code={"<MultiBar bars={bars} size='lg'/>"}/>
          </div>
        </div>

        <Headings level={2} text={'Semi circle Charts'}/>
        <div className={"row"}>
          <div className="col-6">
            <SemiCircle/>
          </div>
          <div className="col-6">
            <Snippet code={"<SemiCircle/>"}/>
          </div>
        </div>

        <Headings level={2} text={'Large Tree Charts'}/>
        <div className={"row"}>
          <div className="col-6">
            <LargeTreeMap/>
          </div>
          <div className="col-6"/>
        </div>

        <Headings level={2} text={'Tree with levels Charts'}/>
        <div className={"row"}>
          <div className="col-6">
            <LevelsTreeMap/>
          </div>
          <div className="col-6"/>
        </div>

        <Headings level={2} text={'Activity Charts'}/>
        <div className={"row"}>
          <div className="col-6">
            <Activity/>
          </div>
          <div className="col-6"/>
        </div>

        <Headings level={2} text={'Bubble Charts'}/>
        <div className={"row"}>
          <div className="col-6">
            <Bubble/>
          </div>
          <div className="col-6"/>
        </div>

        <Headings level={2} text={'Spiderweb Charts'}/>
        <div className={"row"}>
          <div className="col-6">
            <Spiderweb/>
          </div>
          <div className="col-6"/>
        </div>

        <Headings level={2} text={'Sunburst Charts'}/>
        <div className={"row"}>
          <div className="col-6">
            <Sunburst/>
          </div>
          <div className="col-6"/>
        </div>

        <Headings level={2} text={'Bar Charts'}/>
        <div className={"row"}>
          <div className="col-6">
            <Bar/>
          </div>
          <div className="col-6"/>
        </div>

        <Headings level={2} text={'Line Charts'}/>
        <div className={"row"}>
          <div className="col-6">
            <Line/>
          </div>
          <div className="col-6"/>
        </div>

        <Headings level={2} text={'Area Charts'}/>
        <div className={"row"}>
          <div className="col-6">
            <Area/>
          </div>
          <div className="col-6"/>
        </div>

        <Headings level={2} text={'Pyramid Charts'}/>
        <div className={"row"}>
          <div className="col-6">
            <Pyramid/>
          </div>
          <div className="col-6"/>
        </div>

        <Headings level={2} text={'Pie Charts'}/>
        <div className={"row"}>
          <div className="col-6">
            <Pie/>
          </div>
          <div className="col-6"/>
        </div>

        <Headings level={2} text={'Donut Charts'}/>
        <div className={"row"}>
          <div className="col-6">
            <Donut/>
          </div>
          <div className="col-6"/>
        </div>

        <Headings level={1} text={'Tag Cloud'}/>
        <div className={"row"}>
          <div className="col-6">
            <Cloud/>
          </div>
          <div className="col-6"/>
        </div>


        <Headings level={1} text={'Progress Bars'}/>
        <div className={"row"}>
          <div className="col-6">
            <Progress value={10} size={'xs'} showLabel={false}/><br/>
            <Progress color={'success'} value={25} showLabel={false} size={'sm'}/><br/>
            <Progress color={'info'} value={50} size={'md'}/><br/>
            <Progress color={'warning'} value={75} size={'lg'}/><br/>
            <Progress color={'danger'} value={100}/><br/>
          </div>
          <div className="col-6"/>
        </div>
        <hr/>
        {/*Card example*/}
        <div>
          <div>
            <Headings level={3} text={"Card"}/>
            <hr/>
          </div>
          <div style={{maxWidth: '400px'}}>
            <Card>
              <CardImage alt='card image' image=''/>
              <CardHeader classes='text-center'>
                This is a header
              </CardHeader>
              <CardBody>
                <CardTitle h='5' content='Card Title'/>
                <CardSubtitle h='6' classes={['text-muted', 'mb-2']}>
                  Card Subtitle
                </CardSubtitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                  nisi ut aliquip
                  ex ea commodo consequat.
                </CardText>
              </CardBody>
              <CardList items={['item 1', 'item 2', 'item 3']}/>
              <CardBody classes='text-center'>
                <CardLink href='#'>Card link</CardLink>
                <CardLink href='#'>Another link</CardLink>
              </CardBody>
              <CardFooter classes='text-center'>
                This is a footer
              </CardFooter>
            </Card>
          </div>
        </div>
        <hr/>
        {/*Modal example*/}
        <div>
          <div>
            <Headings level={3} text={"Modal"}/>
            <hr/>
          </div>
          <div>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                Add New Social Account
            </button>
          </div>
            <Modal>
              <ModalContent>
                <ModalHeader>
                  This is a header
                  <ModalClose />
                </ModalHeader>
                <ModalBody>
                  <ModalTitle h='5' content='Modal Title'/>
                </ModalBody>
                <ModalFooter>
                  This is a footer
                </ModalFooter>
              </ModalContent>
             </Modal>
          </div>
      <hr/>
        {/*Forms example*/}
        <div>
          <div>
            <Headings level={3} text={"Forms :"}/>
          </div>
          <div>
            <Headings level={3} text={"1-Buttons testing"}/>
            <Headings level={5} text={"1-1-Normal Buttons "}/>
            <Row cols={[
              <Button type="primary">Primary Button</Button>,
              <Button type="Secondary">Secondary Button</Button>,
              <Button type="success">success Button</Button>,
              <Button type="danger">danger Button</Button>,
              <Button type="warning">warning Button</Button>,
              <Button type="info">info Button</Button>,
              <Button type="light">light Button</Button>,
              <Button type="dark">dark Button</Button>,
              <Button type="link">link Button</Button>
            ]}/>


            <Headings level={5} text={"1-2-Outline Buttons"}/>
            <Row cols={[
              <Button outlined type="primary">Primary Button</Button>,
              <Button outlined type="Secondary">Secondary Button</Button>,
              <Button outlined type="success">success Button</Button>,
              <Button outlined type="danger">danger Button</Button>,
              <Button outlined type="warning">warning Button</Button>,
              <Button outlined type="info">info Button</Button>,
              <Button outlined type="light">light Button</Button>,
              <Button outlined type="dark">dark Button</Button>,
              <Button outlined type="link">link Button</Button>
            ]}/>

            <Headings level={5} text={"1-2-Raised Buttons"}/>
            <Row cols={[
              <Button raised type="primary">Primary Button</Button>,
              <Button raised type="Secondary">Secondary Button</Button>,
              <Button raised type="success">success Button</Button>,
              <Button raised type="danger">danger Button</Button>,
              <Button raised type="warning">warning Button</Button>,
              <Button raised type="info">info Button</Button>,
              <Button raised type="light">light Button</Button>,
              <Button raised type="dark">dark Button</Button>,
              <Button raised type="link">link Button</Button>
            ]}/>

            <div className={"col-8"}>
              <Headings level={5} text={"1-2-Floating Actions"}/>
              <Row cols={[
                <Button floating type="primary"><Icon icon={"thumbs-up"} collection={"solid"} size={20}
                                                      type='fa'/></Button>,
                <Button floating type="Secondary"><Icon icon={"thumbs-up"} collection={"solid"} size={20}
                                                        type='fa'/></Button>,
                <Button floating type="success"><Icon icon={"thumbs-up"} collection={"solid"} size={20}
                                                      type='fa'/></Button>,
                <Button floating type="danger"><Icon icon={"thumbs-up"} collection={"solid"} size={20}
                                                     type='fa'/></Button>,
                <Button floating type="warning"><Icon icon={"thumbs-up"} collection={"solid"} size={20}
                                                      type='fa'/></Button>,
                <Button floating type="info"><Icon icon={"thumbs-up"} collection={"solid"} size={20}
                                                   type='fa'/></Button>,
                <Button floating type="light"><Icon icon={"thumbs-up"} collection={"solid"} size={20}
                                                    type='fa'/></Button>,
                <Button floating type="dark"><Icon icon={"thumbs-up"} collection={"solid"} size={20}
                                                   type='fa'/></Button>,
                <Button floating type="link"><Icon icon={"thumbs-up"} collection={"solid"} size={20}
                                                   type='fa'/></Button>
              ]}/>
            </div>


            <Headings level={5} text={"1-2-Sizing Buttons"}/>
            <Headings level={5} text={"Large Buttons : "}/>
            <Button type="primary" size="lg">Primary Button</Button>
            <Button type="secondary" size="lg">Secondary Button</Button>
            <Button type="danger" size="lg">Danger Button</Button>
            <Button type="info" size="lg">Info Button</Button>
            <Button type="light" size="lg">Light Button</Button>
            <Headings level={5} text={"Small Buttons : "}/>
            <Button type="primary" size="sm">Primary Button</Button>
            <Button type="secondary" size="sm">Secondary Button</Button>
            <Button type="danger" size="sm">Danger Button</Button>
            <Button type="info" size="sm">Info Button</Button>
            <Button type="light" size="sm">Light Button</Button>

            <Headings level={5} text={"1-3-Block level buttons "}/>
            <Button type="info" block>info Button</Button>
            <Button outlined type="warning" block>outline warning Button</Button>
            <Button type="danger" block>danger Button</Button>
            <Button outlined type="secondary" block>outline Secondary Button</Button>
            <Button type="success" block>success Button</Button>
            <Button outlined type="primary" block>outline primary Button</Button>
            <hr/>
            <Headings level={5} text={"1-4-Active Buttons : "}/>
            <Button type="danger" active>danger Button is active</Button>
            <Button outlined type="warning" active>outline active Button</Button>
            <Headings level={5} text={"1-5-Disabled Buttons : "}/>
            <Button type="danger" disabled>Button is disabled</Button>
            <Button outlined type="dark" disabled>outline Button disabled</Button>
            <Headings level={5} text={"Alerts : "}/>
            <Dismiss type="success">This is a success alert—check it out!</Dismiss>
            <Dismiss type="danger" close>This is a danger alert that can be dismissed!</Dismiss>
            <Dismiss type="primary" close>This is a primary alert that can be dismissed!</Dismiss>
            <Dismiss type="light" close>This is a light alert that can be dismissed!</Dismiss>
            <Headings level={5} text={"Pagination : "}/>
            <Pagination lg page={[
              {link: "previous"},
              {link: "1"},
              {link: "2"},
              {link: "3"},
              {link: "next"},
            ]}/>

            <Headings level={5} text={"Jumbotrons : "}/>
            <Headings level={6} text={"1-Simple Jumbotron : "}/>
            <Jumbotron jumbotron/>
            <Headings level={6} text={"2-Fluid Jumbotron : "}/>
            <Jumbotron fluidJumbotron/>


            <Headings level={5} text={"Radios : "}/>

            <Input type="checkbox"> Check me out</Input>
            <div className="checkbox">
              <label>
                <input type="checkbox"/>
                Im selected because I seem like the safe choice
              </label>
            </div>
            <div className="checkbox disabled">
              <label>
                <input type="checkbox"/>
                Option is disabled because it is scary
              </label>
            </div>
            <label className="checkbox-inline">
              <input type="checkbox"/> 1
            </label>
            <label className="checkbox-inline">
              <input type="checkbox"/> 2
            </label>
            <label className="checkbox-inline">
              <input type="checkbox"/> 3
            </label>

            <Headings level={5} text={"1-6-Toggle state : "}/>
            <Button type="primary" data="button" pressed="false" autocomplete="off">Single
              Toggle</Button>
            <Button type="secondary" data="button" pressed="false" autocomplete="off">Single
              Toggle</Button>
            <Button type="success" outlined data="button" pressed="false" autocomplete="off">Single
              Toggle</Button>

            <hr/>
            <Headings level={5} text={"Toggle test"}/>
            <Headings level={5} text={"Toggle rounded : "}/>
            <Toggle rounded/>
            <Headings level={5} text={" Toggle unchecked : "}/>
            <Toggle/>
            <Headings level={5} text={"Toggle checked : "}/>
            <Toggle checked/>
            <Headings level={5} text={"Toggle rounded & checked : "}/>
            <Toggle rounded checked/>
            <hr/>
            <Headings level={3} text={"Input test"}/>
            <Input form type="password" placeholder="write ..."/><br/>
            <Input form type="Search" placeholder="Search"/>
            <hr/>
            <Headings level={3} text={"Select test"}/>
            <Select value={["choix1", "choix2", "choix3", "choix4"]}/>
            <hr/>
            <Headings level={3} text={"Textarea test"}/>
            <Textarea row="4"/>
            <hr/>
            <Headings level={3} text={"Button_Groups testing"}/>
            <ButtonGroup buttons={btns}/>
            <hr/>
            <Headings level={3} text={"InputGroup testing"}/>
            <InputGroup type="text" icon="search" placeholder="Search"/>
            <hr/>
            <Mention src="http://placekitten.com/g/90/90" title="c'est un titre">
              Cras sit amet nibh libero, in gravida nulla.
              Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
              Donec lacinia congue felis in faucibus...
            </Mention>
            <hr/>
          </div>
        </div>
        {/*Navbar example*/}
        <div>
          <div>
            <Headings level={3} text={"Navigation"}/>
            <hr/>
          </div>
          <div>
            <Navbar values={
              [
                {text: "navbar1"},
                {text: "navbar2", href: '#'},
                {text: "navbar3", href: '#'}
              ]}/>
          </div>
          <hr/>
          <div>
            <DropDown right values={
              [
                {text: 'drop', href: '#'},
                {text: 'up', href: '#'},
                {text: 'down', href: '#'}
              ]}
                      vals={
                        [
                          {text: 'black', href: '#'},
                          {text: 'white', href: '#'},
                          {text: 'blue'}
                        ]}> DropDown
            </DropDown>
          </div>
        </div>
        <hr/>
        Tabs example
        <div>
          <div>
            <Headings level={3} text={"Tabs"}/>
            <hr/>
          </div>
          <div style={{maxWidth: '600px'}}>
            <Tabs components={tabsComponents}/>
          </div>
        </div>
        <hr/>
        Media embed example
        <div>
          <div>
            <Headings level={3} text={"Embed media"}/>
            <hr/>
          </div>
          <div className='row'>
            <div className='col-4'>
              <Headings level={5} text={"Youtube Player"} classes={"text-center"}/>
              <Embed.YoutubePlayer id='AfWYO8t7ed4'/>
            </div>
            <div className='col-4'>
              <Headings level={5} text={"Vimeo Player"} classes={"text-center"}/>
              <Embed.VimeoPlayer id='74354564'/>
            </div>
            <div className='col-4'>
              <Headings level={5} text={"Dailymotion Player"} classes={"text-center"}/>
              <Embed.DailymotionPlayer id='x6l5c9r'/>
            </div>
          </div>
        </div>
        <hr/>
      </div>
    </div>
  );
};
