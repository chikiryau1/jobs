import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Button} from 'semantic-ui-react'
import styled from 'styled-components'
import {getJob} from '../../model/actions'
import {Loader} from 'semantic-ui-react'

import {Container} from '../styled'
import {Error, Details} from "../components";

const ButtonWrapper = styled.div`
  position: absolute;
  left: 0;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

class Job extends PureComponent {
  constructor(props) {
    super(props);
    getJob(this.props.match.params.id)
  }

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    const {
      id
    } = this.props.match.params;
    const {
      job: {
        fetching,
        error,
        job
      }
    } = this.props;
    return <Container>
      {
        error
          ? <Error error={error.message}/>
          : null
      }
      <ButtonWrapper>
        <Button onClick={this.goBack} content='Back' icon='left arrow' labelPosition='left'/>
      </ButtonWrapper>
      <Wrap>
        {fetching
          ? <Loader active inline='centered'/>
          : job ? <Details item={job}/> : null
        }
      </Wrap>
    </Container>
  }
}

export default connect(({job}) => ({job}))(Job)
