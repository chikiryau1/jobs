import React from 'react'
import { Pagination } from 'semantic-ui-react'

export default ({numOfPages, onPageChange, activePage}) => (
  <Pagination
    firstItem={null}
    lastItem={null}
    pointing
    secondary
    totalPages={numOfPages}
    onPageChange={onPageChange}
    activePage={activePage}
  />
);
