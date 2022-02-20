export const SelectRule = () => ({
  display: 'block',
  borderRadius: '5px',
  fontFamily: 'OpenSans-Semibold',
  color: '#616161',
  fontSize: '1rem',
  marginBottom: '10px',
});

export const ErrorMessage = (hasError: boolean) => ({
  color: hasError ? 'red' : 'black',
  marginBottom: '5px',
});
