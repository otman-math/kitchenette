import React from 'react';
import {configure, mount} from 'enzyme';
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  CardLink,
  CardList,
  CardSubtitle,
  CardText,
  CardImage,
  CardTitle
} from './index';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

/**
 * @test {Card}
 */
describe('Card Component', () => {
  it('should render Card with content inside it', () => {
    const wrapper = mount(
      <Card>
        <CardHeader>
          <h5>Header</h5>
        </CardHeader>
        <CardImage/>
        <CardBody>
          <CardTitle h='5' content='Title'/>
          <CardSubtitle h='6' content='Subtitle'/>
          <CardText content='text'/>
          <CardLink content='link'/>
        </CardBody>
        <CardList items={['item1', 'item2', 'item3']}/>
        <CardFooter>
          <h5>Footer</h5>
        </CardFooter>
      </Card>
    );
    const card = wrapper.find('.card');
    expect(card.exists()).toBe(true);

    const cardHeader = wrapper.find('.card-header');
    expect(cardHeader.exists()).toBe(true);
    expect(cardHeader.find('h5').exists()).toBe(true);
    expect(cardHeader.find('h5').text()).toBe('Header');

    const cardImg = wrapper.find('.card-img-top');
    expect(cardImg.exists()).toBe(true);

    const cardBody = wrapper.find('.card-body');
    expect(cardBody.exists()).toBe(true);

    const cardTitle = wrapper.find('.card-title');
    expect(cardTitle.exists()).toBe(true);
    expect(cardTitle.type()).toBe('h5');
    expect(cardTitle.text()).toBe('Title');

    const cardSubtitle = wrapper.find('.card-subtitle');
    expect(cardSubtitle.exists()).toBe(true);
    expect(cardSubtitle.type()).toBe('h6');
    expect(cardSubtitle.text()).toBe('Subtitle');

    const cardText = wrapper.find('.card-text');
    expect(cardText.exists()).toBe(true);
    expect(cardText.type()).toBe('p');
    expect(cardText.text()).toBe('text');

    const cardLink = wrapper.find('.card-link');
    expect(cardLink.exists()).toBe(true);
    expect(cardLink.type()).toBe('a');
    expect(cardLink.text()).toBe('link');

    const cardList = wrapper.find('.list-group');
    expect(cardList.exists()).toBe(true);
    expect(cardList.type()).toBe('ul');
    expect(cardList.children().length).toBe(3);

    const cardFooter = wrapper.find('.card-footer');
    expect(cardFooter.exists()).toBe(true);
    expect(cardFooter.find('h5').exists()).toBe(true);
    expect(cardFooter.find('h5').text()).toBe('Footer');
  });
});
