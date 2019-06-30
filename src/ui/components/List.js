import React, {PureComponent} from 'react'
import {Item as ListItem} from '../primitives/ListItem'
import {Item} from 'semantic-ui-react'
import styled from "styled-components";

const Wrap = styled(Item.Group)`
  padding: 0 30px;
`;

export default class List extends PureComponent {
  render() {
    const {
      data
    } = this.props;
    return data
      ? <Wrap divided>
        {
          data.map(item => <ListItem key={item.id} {...item}/>)
        }
      </Wrap>
      : 'No jobs found'
  }
}
