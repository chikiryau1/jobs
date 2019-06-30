import React, {Component} from 'react'
import {Container, StyledForm} from '../styled'
import {Input} from '../primitives'
import { Button } from 'semantic-ui-react'

export default class Form extends Component {

  constructor(props) {
    super(props);
    this.restriction = /[a-zA-Z\s]+/;
    this.state = {
      value: '',
      error: false
    }
  }

  onChange = e => {
    const {
      onChange,
    } = this.props;
    const value = e.target.value;
    let error;
    if (value){
      const match = this.restriction.exec(value);
      error = match && match[0].length !== value.length
    }
    this.setState({value, error: error});
    onChange(e)
  };

  render() {
    const {
      onSubmit
    } = this.props;
    return <StyledForm onSubmit={onSubmit}>
      <Container>
        <Input
          name='description'
          value={this.state.value}
          onChange={this.onChange}
          error={this.state.error}
          placeholder='enter search query'
        />
        <Button type='submit' primary disabled={this.state.error || this.state.value === ''}>Find</Button>
      </Container>
    </StyledForm>
  }
}

