export default {
  card: {
    borderTop: '1px solid #e5e9f2',
    borderBottom: '1px solid #e5e9f2',
    width: '100%',
    height: window.innerHeight - 165,
    background: '#fff',
    position: 'relative',
  },
  wrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    padding: 5,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  key: {
    fontSize: 30,
    lineHeight: 2,
    margin: [15, 0],
  },
  values: {
    maxHeight: '60%',
    overflowY: 'auto',
    willChange: 'opacity',
    transition: '.3s opacity',
    opacity: ({ open }) => (open ? 1 : 0),
  },
  value: {
    color: '#128fdc',
    fontSize: 16,
    marginBottom: 10,
  },
  description: {
    color: '#a9a9a9',
    fontSize: 12,
    textAlign: 'left',
  },
};
