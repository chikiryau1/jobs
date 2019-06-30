import React, {PureComponent} from 'react'
import {Item as ListItem} from '../primitives/ListItem'
import {Item} from 'semantic-ui-react'

export default class List extends PureComponent {
  render() {
    const {
      data
    } = this.props;
    return data
      ? <Item.Group divided>
        {
          data.map(item => <ListItem key={item.id} {...item}/>)
        }
      </Item.Group>
      : 'No jobs found'
  }
}
