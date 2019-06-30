import React, {PureComponent} from 'react'
import {Container, Card, Grid, Image, Header} from 'semantic-ui-react'
import noImage from "../images/no-image.png";
import styled from 'styled-components'

const CardWrapper = styled(Grid.Column)`
  margin-top: 80px;
`;

export default class Details extends PureComponent {
  render() {
    const {
      item: {
        company_logo,
        description,
        company,
        created_at,
        location,
        company_url,
        url,
        title,
        type
      }
    } = this.props;
    return <Container>
      <Grid>
        <CardWrapper width={6}>
          <Card>
            <Image src={company_logo || noImage} wrapped ui={false}/>
            <Card.Content>
              <Card.Header><a target='_blank' rel='noopener noreferrer' href={company_url}>{company}</a></Card.Header>
              <Card.Meta>{location}</Card.Meta>
              <Card.Meta>{created_at}</Card.Meta>
              <Card.Description>
                <b>{title}</b>
                <br/>
                {type}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a href={url} target='_blank' rel='noopener noreferrer'>
                Link to apply
              </a>
            </Card.Content>
          </Card>
        </CardWrapper>
        <Grid.Column width={10}>
          <Header as='h2'>{title}</Header>
          <div dangerouslySetInnerHTML={{__html: description}}/>
        </Grid.Column>
      </Grid>
    </Container>
  }
}