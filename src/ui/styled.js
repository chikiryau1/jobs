import styled from 'styled-components'

export const StyledForm = styled.form`
  display: flex;
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: ${p => p.column ? 'column' : 'row'};
  align-items: ${p => p.column ? 'center' : 'flex-start'};
  padding: 30px;
`;
