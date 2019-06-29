import React, { Component } from 'react'
import {getJobsList} from '../../model/actions'
import Form from './Form'
import { Container } from '../styled'

export default class Root extends Component {
  constructor(props){
    super(props);
    getJobsList({})
  }
  render () {
    return <>
      <Container>
        <Form
          onSubmit={Function.prototype}
          onChange={Function.prototype}
        />
      </Container>
    </>
  }
}
