export const styles = {
  control: baseStyles => ({
    ...baseStyles,
    alignItems: 'flex-start',
    minHeight: '34px',
    paddingLeft: '100px',
    fontSize: '14px',
    lineHeight: 'calc(14 / 14)',
    backgroundColor: 'transparent',
    borderRadius: '5px',
    cursor: 'pointer',
  }),

  // option: baseStyles => ({
  //   ...baseStyles,
  //   padding: '16px 18px',
  //   width: '200px',
  // }),

  menu: baseStyles => ({
    ...baseStyles,
    width: '100%',

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

    '@media (min-width: 1440px)': {
      marginLeft: '10px',
    },
  }),

  menuList: baseStyles => ({
    ...baseStyles,
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    width: '131px',
    height: '150px',
    padding: '10px',
    marginLeft: 'auto',
    marginTop: '-6px',
    overflowX: 'hidden',
    color: 'var(--list-text-color)',
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
    lineHeight: 'calc(16 / 12)',
    fontWeight: 400,
    textWrap: 'nowrap',
    padding: 0,
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
    display: 'flex',
    flexWrap: 'nowrap',
  }),

  singleValue: baseStyles => ({
    ...baseStyles,
    width: '100%',
    textAlign: 'right',
    lineHeight: 'normal',
  }),

  input: baseStyles => ({
    ...baseStyles,
    lineHeight: 'normal',
    justifyContent: 'end',
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),
};
