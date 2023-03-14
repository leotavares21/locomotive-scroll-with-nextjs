import styled from 'styled-components';

export const Container = styled.header`
  color: var(--dark);
  background: var(--light);
  border-bottom: 1px solid var(--gray-100);
  z-index: 100;

  position: sticky;
  top: 0;

  .wrapper-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7rem;
    position: relative;

    & > h3 span {
      font-size: 2rem;
      color: var(--primary);
      display: flex;
      align-items: center;
      gap: 0.25rem;

      cursor: pointer;
      font-family: 'Righteous', sans-serif;
    }
  }

  .wrapper-drop {
    background: var(--light);
  }

  nav > ul {
    display: flex;
    align-items: center;
  }

  .nav-list {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
`;

export const Toggle = styled.li`
  margin-left: 2rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  display: flex;
  align-items: center;

  position: relative;

  a {
    color: var(--dark);
  }

  cursor: pointer;

  &:nth-of-type(3) {
    border-right: 1px solid var(--gray-100);
    padding-right: 2rem;
  }

  .icon {
    transition: transform 0.2s;
    transform: ${props => (props.isActive ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;

export const Dropdown = styled.div`
  background: var(--light);
  position: absolute;
  width: 100%;
  top: 7rem;
  z-index: 100;
  box-sizing: border-box;

  border: 1px solid var(--gray-100);

  h3 {
    color: var(--primary);
    margin-top: 3rem;
  }

  ul {
    z-index: 100;

    li {
      margin: 0.5rem 0;

      &:last-of-type {
        margin-bottom: 3rem;
      }
    }

    a {
      color: var(--dark);
    }
  }
`;
