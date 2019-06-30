import React, {Component} from 'react'
import {connect} from 'react-redux'

import {getJobsList, onChange} from '../../model/actions'
import {Container, StyledForm} from '../styled'
import {Input} from '../primitives'
import { Button } from 'semantic-ui-react'

class Form extends Component {

  constructor(props) {
    super(props);
    this.restriction = /[a-zA-Z\s]+/;
    this.state = {
      value: '',
      error: false
    }
  }

  onChange = e => {
    const value = e.target.value;
    const name = e.target.name || 'name';
    let error;
    if (value){
      const match = this.restriction.exec(value);
      error = !match || match[0].length !== value.length
    }
    onChange(
      {
        [name]: value,
        errors: {
          [name]: error,
        }
      })
  };

  onSubmit = e => {
    const {
      onSubmit,
      form
    } = this.props;
    e.preventDefault();

    const { errors, ...values } = form;

    onSubmit(values)
  };

  isSubmitDisabled = () => {
    const {
      form
    } = this.props;
    return (form.errors && form.errors.description) || !form.description || form.description === ''
  };

  render() {
    const {
      form
    } = this.props;
    return <StyledForm onSubmit={this.onSubmit}>
      <Container>
        <Input
          name='description'
          value={form.description || ''}
          onChange={this.onChange}
          error={form.errors && form.errors.description}
          placeholder='enter search query'
        />
        <Button type='submit' primary disabled={this.isSubmitDisabled()}>Find</Button>
      </Container>
    </StyledForm>
  }
}

export default connect(({form}) => ({form}))(Form)
