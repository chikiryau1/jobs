import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getJobsList, onChange} from '../../model/actions'
import Form from './Form'
import { Container } from '../styled'
import {Error, List, Pagination} from '../components'
import {Loader} from 'semantic-ui-react'

class Root extends Component {

  onSubmit = params => {
    getJobsList(params)
  };

  onPageChange = (e, data) => {
    const {
      form
    } = this.props;
    const {
      activePage
    } = data;

    onChange({
      page: activePage - 1
    });
    const { errors, ...values } = form;
    this.onSubmit({...values, page: activePage - 1})
  };

  render () {
    const {
      form: {
        page
      },
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
      <Container column>
        <Form
          onSubmit={this.onSubmit}
        />
        {items || fetching ? <Pagination numOfPages={5} onPageChange={this.onPageChange} activePage={(page || 0) + 1}/> : null}
      </Container>
      {
        fetching
          ? <Loader active inline='centered'>
            Fetching
          </Loader>
          : items && <List data={items}/>
      }
      {items ? <Pagination numOfPages={5} onPageChange={this.onPageChange} activePage={(page || 0) + 1}/> : null}
    </>
  }
}

export default connect(({jobList, form}) => ({jobList, form}))(Root)
