import styled from 'styled-components'

export const AdminContainer = styled.div`
  display: grid;
  place-items: center;
  /* max-width: 100%; */
  @media screen and (max-width: 770px) {
    /* max-width: 50%;
    width: 50%; */
  }
`
export const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 80%;
  /* width: 100%; */
  padding: 1rem;
  @media screen and (max-width: 770px) {
    padding: 0;
    max-width: 100%;
  }
`
export const Table = styled.table`
  /* max-width: 10%; */
  table-layout: fixed;
  border: 2px solid var(--background1-main);
  th {
    border: 1px solid var(--background1-main);
  }
  td {
    border: 1px solid var(--background1-main);
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
  }
  @media screen and (max-width: 770px) {
    padding: 10px;
    overflow-x: auto;
    display: block;
  }
`
