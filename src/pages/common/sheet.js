export default {
  '@global': {
    '.btn': {
      fontSize: 16,
      borderRadius: 4,
      userSelect: 'none',
      boxShadow: '0 0 4px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24)',
      textDecoration: 'none',
      display: 'inline-block',
      '&_main': {
        backgroundColor: '#128fdc',
        color: '#fff',
        width: '100%',
        height: 35,
        lineHeight: '35px',
        textAlign: 'center',
        '&:active': {
          backgroundColor: '#0e74b3',
          boxShadow: 'none',
        },
      },
      '&_regular': {
        backgroundColor: '#128fdc',
        color: '#fff',
        height: 30,
        lineHeight: '30px',
        padding: [0, 30],
        '&:active': {
          backgroundColor: '#0e74b3',
          boxShadow: 'none',
        },
      },
      '&__group': {
        margin: [30, 'auto'],
        display: 'flex',
        justifyContent: 'space-around',
      },
      '&[disabled]': {
        boxShadow: 'none',
        filter: 'grayscale(100%)',
        opacity: 0.5,
      },
    },
  },
  container: {
    width: '100%',
    minHeight: '100%',
    height: '100%',
    overflow: ({ menuStatus }) => (menuStatus ? 'hidden' : 'auto'),
  },
  slider: {
    minHeight: 'calc(100% - 60px)',
    height: 'calc(100% - 60px)',
    position: 'relative',
    transition: '0.3s transform',
    willChange: 'transform',
    zIndex: 10,
    transform: menuSlider,
    backgroundColor: '#fff',
    '& > .screen': {
      pointerEvents: ({ menuStatus }) => (menuStatus ? 'none' : 'auto'),
    },
  },
  overlay: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
  },
};

function menuSlider({ menuStatus }) {
  return menuStatus ? 'translateX(100%) translateX(-75px) scale(0.9)' : 'translateX(0%)';
}
