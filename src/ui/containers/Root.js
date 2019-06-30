import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getJobsList} from '../../model/actions'
import Form from './Form'
import { Container } from '../styled'
import {Error, List} from '../components'
import {Loader} from 'semantic-ui-react'

class Root extends Component {

  onSubmit = e => {
    e.preventDefault();
    getJobsList({description: e.target.description.value})
  };

  render () {
    const {
      jobList: {
        error,
        fetching,
        items
      }
    } = this.props;
    return <>
      {
        error
          ? <Error error={error.message}/>
          : null
      }
      <Container>
        <Form
          onSubmit={this.onSubmit}
          onChange={Function.prototype}
        />
      </Container>
      {
        fetching
          ? <Loader active inline='centered'>
            Fetching
          </Loader>
          : <List data={items}/>
      }
    </>
  }
}

export default connect(({jobList}) => ({jobList}))(Root)
