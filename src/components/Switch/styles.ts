import styled, { keyframes } from "styled-components";
import variables from "../../variables";
import { Props } from ".";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SwitchWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  column-gap: ${variables.size.size.sm}px;
  position: relative;
`;

export const SwitchInput = styled.input.attrs<{
  loading?: boolean;
  size: "default" | "small";
}>((props: Props) => ({
  size: props.size,
  loading: props.loading,
}))`
  &[type="checkbox"] {
    height: 0;
    width: 0;
    visibility: hidden;
    position: absolute;
  }

  ${(props) => {
    switch (props.size) {
      case "small": {
        return `& + label {
          width: ${variables.size.size.lg}px;
          height: ${variables.size.height.xs}px;

          div {
            width: ${variables.size.size.sm}px;
            height: ${variables.size.size.sm}px;
          }

          &:active div {
            width: ${props.disabled ? variables.size.size.sm : variables.size.size.size}px;
          }

          svg {
            width: calc(${variables.size.size.sm}px - ${variables.size.size.xxs}px);
            height: calc(${variables.size.size.sm}px - ${variables.size.size.xxs}px);
          }
        }
      `;
      }
      default: {
        return `& + label {
          width: ${variables.size.size.xxl}px;
          height: ${variables.size.height.sm}px;

          div {
            width: ${variables.size.size.ms}px;
            height: ${variables.size.size.ms}px;
          }

          &:active div {
            width: ${props.disabled ? variables.size.size.ms : variables.size.size.lg}px;
          }

          svg {
            width: calc(${variables.size.size.ms}px - ${variables.size.size.xxs}px);
            height: calc(${variables.size.size.ms}px - ${variables.size.size.xxs}px);
          }
        }
      `;
      }
    }
  }}

  &:checked + label {
    background: ${variables.colors.brand.primary.colorPrimary.light};
  }
  &:checked + label div {
    transform: translateX(-100%);
    left: calc(100% - ${variables.size.size.xxxs}px);
  }

  ${(props) =>
    (props.disabled || props.loading) &&
    `& + label {
      opacity: 0.65;
      cursor: not-allowed;
    }
  `}

  ${(props) =>
    props.loading &&
    `& + label {
      svg {
        display: block;
        fill: ${props.checked ? variables.colors.brand.primary.colorPrimary.light : variables.colors.neutral.backgroundBase.colorBgMask.light};
      }
    }
  `}
`;

export const SwitchLabel = styled.label`
  cursor: pointer;
  text-indent: -9999px;
  background: ${variables.colors.neutral.backgroundBase.colorBgMask.light};
  display: block;
  border-radius: ${variables.size.radius.xxl}px;
  position: relative;

  svg {
    display: none;
    width: calc(${variables.size.size.ms}px - ${variables.size.size.xxs}px);
    height: calc(${variables.size.size.ms}px - ${variables.size.size.xxs}px);
    position: absolute;
    top: ${variables.size.size.xxxs}px;
    left: ${variables.size.size.xxxs}px;
    animation: ${rotate} 1s linear infinite;
  }

  div {
    position: relative;
    top: ${variables.size.size.xxxs}px;
    left: ${variables.size.size.xxxs}px;
    background: ${variables.colors.base.white};
    border-radius: ${variables.size.radius.xxl}px;
    transition: all 0.15s ease;
  }
`;
