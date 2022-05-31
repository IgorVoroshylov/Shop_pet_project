export const DeleteModal = (addMode: boolean) => ({
  position: 'fixed',
  zIndex: '20',
  top: '0',
  left: '0',
  height: '100vh',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  opacity: addMode ? '1' : '0',
  pointerEvents: addMode ? 'all' : 'none',
  transition: '0.5s',
});

export const DeleteModalContent = (addMode: boolean) => ({
  position: 'relative',
  padding: '25px 25px 25px 25px',
  borderRadius: '5px',
  backgroundColor: '#fff',
  transform: addMode ? 'scale(1)' : 'scale(0.3)',
  transition: '0.4s all',
});

export const ButtonBlock = () => ({
  display: 'flex',
  justifyContent: 'space-between',
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

export const ModalTitle = () => ({
  marginBottom: '15px',
  fontSize: '18px',
});
