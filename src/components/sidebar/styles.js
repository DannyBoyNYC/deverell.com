import styled from 'styled-components';

export const SidebarSC = styled.div`
  color: rgba(255, 255, 255, 0.9);
  background-color: var(--black);
  @media (min-width: 1266px) {
    min-height: 100vh;
    width: 40%;
  }
  .sidebar-container {
    width: 80%;
    text-align: left;
    margin-left: auto;
    margin-right: auto;
  }
  .side-subhead {
    font-style: italic;
    font-size: 2rem;
    margin-top: 1rem;
    text-align: center;
    @media (min-width: 1266px) {
      padding-right: 5rem;
    }
  }
  .main {
    background-color: #e6e6e6;
    @media (min-width: 1266px) {
      width: 60%;
    }
    .container {
      width: 94%;
      padding-top: 3em;
      padding-bottom: 4em;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .page-details {
    margin-top: 5em;
    padding-bottom: 5em;
    .book-container {
      margin-top: 2rem;
      max-width: 400px;
    }
  }
`;
