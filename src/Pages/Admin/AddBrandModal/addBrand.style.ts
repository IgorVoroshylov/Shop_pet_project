export const AddBrandContainer = (editMode: boolean) => ({
  position: 'fixed',
  top: '0',
  left: '0',
  height: '100vh',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  opacity: editMode ? '1' : '0',
  pointerEvents: editMode ? 'all' : 'none',
  transition: '0.5s',
});

export const AddBrandContent = (editMode: boolean) => ({
  padding: '25px',
  borderRadius: '5px',
  maxWidth: '500px',
  width: '100%',
  backgroundColor: '#fff',
  transform: editMode ? 'scale(1)' : 'scale(0.3)',
  transition: '0.4s all',
});

export const ButtonWrapper = () => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0px 10px',
  '& :first-child': {
    backgroundColor: 'transparent',
    border: '1px solid green',
    color: 'green',
    borderRadius: '5px',
    padding: '5px',
  },
  '& :last-child': {
    backgroundColor: 'transparent',
    border: '1px solid red',
    color: 'red',
    borderRadius: '5px',
    padding: '5px',
  },
});

export const InfoMessage = (success: boolean) => ({
  opacity: success ? '1' : '0',
  position: 'absolute',
  top: success ? '10px' : '-20px',
  left: '150px',
  color: 'green',
  marginBottom: '5px',
  transition: '0.4s all',
});
