import styled from 'styled-components'

export const PrimarySolidButton = styled.button`
  width: 100%;
  height: var(--button-height);
  border: 1px solid var(--color-primary);
  border-radius: 8px;
  background-color: var(--color-primary);
  color: var(--color-white);
  font-size: 16px;
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
`

type buttonVariant = 'normal' | 'dimmed' | 'warning'

const getButtonColor = (variant?: buttonVariant) => {
  switch (variant) {
    case 'normal':
    default:
      return 'var(--color-black)'
    case 'dimmed':
      return 'var(--color-typography-2)'
    case 'warning':
      return 'var( --color-warning)'
  }
}

export const TextButton = styled.button<{ variant?: buttonVariant }>`
  width: 100%;
  height: 26px;
  border: none;
  background-color: transparent;
  color: ${(p) => getButtonColor(p.variant)};
  font-size: 16px;
  cursor: pointer;
`
