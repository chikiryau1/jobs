import React, { Component } from 'react'
import Form from './Form'
import { Container } from '../styled'

export default class Root extends Component {
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
