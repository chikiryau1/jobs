import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {Item as ItemUi} from 'semantic-ui-react'
import noImage from '../images/no-image.png'

const SLink = styled(Link)`
  width: inherit;
  display: flex;
  align-items: center;
`;

const StyledContent = styled(ItemUi.Content)`
  display: inline-block;
  margin-left: 20px;
`;

export const Item = ({title, id, company_logo, location, created_at, company}) => (
  <ItemUi>
    <SLink to={id}>
      <ItemUi.Image size='tiny' src={company_logo || noImage}/>
      <StyledContent>
        <ItemUi.Header>{title}</ItemUi.Header>
        <ItemUi.Meta>{company}, {location}</ItemUi.Meta>
        <ItemUi.Extra>created at: {created_at}</ItemUi.Extra>
      </StyledContent>
    </SLink>
  </ItemUi>
);
