import React from 'react';
import { useFela } from 'react-fela';
import { Controller, useFormContext } from 'react-hook-form';
import { ErrorMessage, SelectRule } from './customSelect.style';

type OwnType = {
  name: string;
  defaultValue: string;
  options: Array<BrandAndType>;
};

const CustomSelect: React.FC<OwnType> = ({ name, options, defaultValue }) => {
  const { control } = useFormContext();
  const { css } = useFela();
  return (
    <Controller
      control={control}
      name={name}
      render={({ fieldState: { error }, field: { value, onChange } }) => (
        <div>
          <select
            className={css(SelectRule)}
            onChange={onChange}
            value={value}
            name={name}
          >
            <option value="">{defaultValue}</option>
            {options.map((item) => {
              return (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              );
            })}
          </select>
          {error?.message ? (
            <div className={css(ErrorMessage(!!error?.message))}>
              {error?.message}
            </div>
          ) : null}
        </div>
      )}
    />
  );
};

export default CustomSelect;
