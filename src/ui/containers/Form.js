import React, {Component} from 'react'
import {Button, Container, StyledForm} from '../styled'
import {Input} from '../components/Input'

export default class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  render() {
    const {
      onChange,
      onSubmit
    } = this.props;

    console.log(this.state.value);

    return <StyledForm onSubmit={onSubmit}>
      <Container>
        <Input
          name='input'
          value={this.state.value}
          onChange={onChange}
          error={null}
        />
        <Button type='submit'>Get</Button>
      </Container>
    </StyledForm>
  }
}

