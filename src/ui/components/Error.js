import React, {PureComponent} from 'react'
import { Confirm } from 'semantic-ui-react'

export default class Error extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      open: !!props.error,
    };
  }

  close = () => this.setState({ open: false });

  render() {
    const {
      error
    } = this.props;
    return <Confirm
      open={this.state.open}
      onCancel={this.close}
      onConfirm={this.close}
      content={error}
      header='Error'
    />
  }
}
