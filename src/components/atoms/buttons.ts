import styled from 'styled-components'

export const PrimarySolidButton = styled.button`
  width: 100%;
  height: var(--button-height);
  border: 1px solid var(--color-primary);
  border-radius: 8px;
  background-color: var(--color-primary);
  color: var(--color-white);
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  &:disabled {
    border: 1px solid var(--color-disabled);
    background-color: var(--color-disabled);
    color: var(--color-typography-1);
    cursor: default;
  }
`

export const PrimaryOutlineButton = styled(PrimarySolidButton)`
  background-color: var(--color-white);
  color: var(--color-typography-1);
`

export const FixedButton = styled(PrimarySolidButton)`
  position: fixed;
  left: var(--spacing-m);
  bottom: var(--spacing-m);
  width: calc(100% - 2 * var(--spacing-m));
  box-shadow: 0 var(--spacing-xxs) var(--spacing-xxs) rgba(0, 0, 0, 0.2);
`
