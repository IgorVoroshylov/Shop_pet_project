//! FormProvider
import React from 'react';
import { useFela } from 'react-fela';
import { useFormContext, Controller } from 'react-hook-form';
import { ErrorMessage, inputWrapper } from './customInput.style';

const CustomInput: React.FC<OwnTypeCustomInput> = ({ name }) => {
  const { control } = useFormContext();
  const { css } = useFela();
  return (
    <Controller // позволяет работать с кастомными инпутами, кооторые не предоставляют api через ref (те где ref получить не возможно и нужно управлять вручную) паттерн рендер проп
      control={control}
      name={name}
      render={({ fieldState: { error }, field: { onChange, value } }) => (
        <div className={`row ${css(inputWrapper)}`}>
          <div className={`input-field col s12 ${css()}`}>
            <input
              onChange={onChange}
              name={name}
              value={value}
              style={{ height: '35px' }}
              className="validate"
            />
            <label className="active" htmlFor={name}>
              {name}
            </label>
            {error?.message ? (
              <div className={css(ErrorMessage(!!error?.message))}>
                {error?.message}
              </div>
            ) : null}
          </div>
        </div>
      )}
    />
  );
};
CustomInput.displayName = 'CustomInput';

export default CustomInput;

//! для ControllerandCustomInput & RegisterandCustomInput from Edit.tsx
// import React from 'react';
// import { useFela } from 'react-fela';
// import { ErrorMessage, inputWrapper } from './customInput.style';

// type OwnType = {
//   error: string | undefined;
//   name: string;
// };

// const CustomInput = React.forwardRef<HTMLInputElement, OwnType>(
//   (props, ref) => {
//     const { css } = useFela();
//     return (
//       <div className={`row ${css(inputWrapper)}`}>
//         <div
//           className={`input-field col s12 ${css(ErrorMessage(!!props.error))}`}
//         >
//           <input {...props} ref={ref} id={props.name} className="validate" />
//           <label className="active" htmlFor={props.name}>
//             {props.name}
//           </label>
//           {!!props.error ? <div>{props.error}</div> : null}
//         </div>
//       </div>
//     );
//   },
// );
// CustomInput.displayName = 'CustomInput';

// export default CustomInput;
