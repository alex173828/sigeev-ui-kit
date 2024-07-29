import { FC } from "react";
import { SwitchInput, SwitchLabel, SwitchWrapper } from "./styles";
import { Loading } from "../../icons/Loading";

export interface Props {
  uniqId?: string;
  labelFor?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  loading?: boolean;
  size: "default" | "small";
  label?: string;
  className?: string;
}

export const Switch: FC<Props> = ({
  checked,
  className,
  defaultChecked,
  disabled,
  loading,
  size = "default",
  labelFor = "switch",
  label,
  uniqId = "switch",
}) => {
  return (
    <SwitchWrapper className={className}>
      {label && <div>{label}</div>}
      <>
        <SwitchInput
          disabled={disabled || loading}
          checked={checked}
          defaultChecked={defaultChecked}
          type="checkbox"
          id={uniqId}
          size={size}
          loading={loading}
        />
        <SwitchLabel htmlFor={labelFor}>
          <div>
            <Loading />
          </div>
        </SwitchLabel>
      </>
    </SwitchWrapper>
  );
};
