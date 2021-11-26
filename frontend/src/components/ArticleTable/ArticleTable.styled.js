import styled from 'styled-components'

export const AdminContainer = styled.div`
  display: grid;
  place-items: center;
`
export const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1rem;
`
export const Table = styled.table`
  max-width: 70%;
  border: 2px solid var(--background1-main);
  th,
  td {
    border: 1px solid var(--background1-main);
  }
`
