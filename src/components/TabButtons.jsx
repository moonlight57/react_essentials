function TabButtons({ children, handleClick, isSelected }) {
  return (
    <>
      <li>
        <button className={isSelected ? "active" : null} onClick={handleClick}>
          {children}
        </button>
      </li>
    </>
  );
}

export default TabButtons;
