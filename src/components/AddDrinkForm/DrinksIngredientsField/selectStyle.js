export const styles = {
  control: baseStyles => ({
    ...baseStyles,
    width: '200px',
    height: '50px',
    alignItems: 'flex-start',
    padding: '16px',
    fontSize: '14px',
    lineHeight: 'calc(14 / 14)',
    backgroundColor: 'transparent',
    border: '1px solid var(--list-text-color)',
    borderRadius: '200px',
    cursor: 'pointer',
    '&:hover, &:focus': {
      borderColor: 'var(--text-color)',
    },

    '@media (min-width: 768px)': {
      width: '332px',
    },

    '@media (min-width: 1440px)': {
      width: '316px',
      height: '56px',
      fontSize: '17px',
      lineHeight: 'calc(26 / 17)',
    },
  }),

  menu: baseStyles => ({
    ...baseStyles,
    width: '182px',
    marginLeft: '10px',

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

    '@media (max-width: 393px)': {
      width: '163px',
    },

    '@media (min-width: 768px)': {
      width: '312px',
    },
  }),

  menuList: baseStyles => ({
    ...baseStyles,
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    width: '100%',
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
    textWrap: 'nowrap',
    padding: 0,
    color: state.isSelected ? 'var(--text-color)' : 'inherit',
    '&:hover': {
      color: 'var(--text-color)',
    },
  }),

  indicatorsContainer: baseStyles => ({
    ...baseStyles,
    height: '100%',

    '@media (min-width: 768px)': {
      marginTop: '1px',
    },
  }),

  dropdownIndicator: (base, state) => ({
    ...base,
    transition: 'transform ease-in-out 0.3s',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
  }),

  valueContainer: baseStyles => ({
    ...baseStyles,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
  }),

  singleValue: baseStyles => ({
    ...baseStyles,
    width: '100%',
    textAlign: 'left',
    overflow: 'visible',
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
