import styled from 'styled-components'

export const PrimaryButton = styled.button`
  width: 100%;
  height: var(--button-height);
  border: none;
  border-radius: var(--spacing-xs);
  background-color: var(--color-blue-primary);
  color: var(--color-white);
  font-size: 1.5rem;

  &:hover {
    background-color: var(--color-blue-dark);
  }
`

export const FixedButton = styled(PrimaryButton)`
  position: fixed;
  left: var(--spacing-m);
  bottom: var(--spacing-m);
  width: calc(100% - 2 * var(--spacing-m));
  box-shadow: 0 var(--spacing-xxs) var(--spacing-xxs) rgba(0, 0, 0, 0.2);
`
