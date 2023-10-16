export const stylesMeasure = {
  control: baseStyles => ({
    ...baseStyles,
    height: '50px',
    alignItems: 'center',
    fontSize: '14px',
    lineHeight: 'calc(14 / 14)',
    cursor: 'pointer',

    '@media (min-width: 768px)': {
      fontSize: '17px',
      lineHeight: 'calc(26 / 17)',
      height: '56px',
    },
  }),

  menu: baseStyles => ({
    ...baseStyles,
    '@keyframes fadeIn': {
      '0%': {
        opacity: 0,
        transform: 'translateY(40px)',
      },
      '100%': {
        opacity: 1,
        transform: 'translateY(0)',
      },
    },

    animation: 'fadeIn 0.2s ease-in-out',
  }),

  menuList: baseStyles => ({
    ...baseStyles,
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    width: '55px',
    height: '150px',
    padding: '10px',
    marginLeft: '-12px',
    marginTop: '-6px',
    overflowX: 'hidden',
    color: 'var(--list-text-color)',
    textAlign: 'center',
    borderRadius: '12px',
    backgroundColor: 'var(--list-color)',
    '::-webkit-scrollbar': {
      width: '5px',
      height: '80px',
    },
  }),

  option: (baseStyles, state) => ({
    ...baseStyles,
    fontSize: '12px',
    textWrap: 'nowrap',
    color: state.isSelected ? 'var(--text-color)' : 'inherit',
    cursor: 'pointer',
    '&:hover': {
      color: 'var(--text-color)',
    },
  }),

  indicatorsContainer: baseStyles => ({
    ...baseStyles,
    height: '100%',
    cursor: 'pointer',
  }),

  dropdownIndicator: (base, state) => ({
    ...base,
    transition: 'transform ease-in-out 0.3s',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
  }),

  valueContainer: baseStyles => ({
    ...baseStyles,
  }),

  singleValue: baseStyles => ({
    ...baseStyles,
    width: '100%',
    overflow: 'visible',
  }),

  input: baseStyles => ({
    ...baseStyles,
    lineHeight: 'normal',
    justifyContent: 'center',
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),
};
