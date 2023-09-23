import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/selectors';

import { UserMenu, UserIcon, UserName } from './UserLogo.styled';
import { UserLogoPopup } from 'components/UserLogoPopup/UserLogoPopup';

export const UserLogo = () => {
  const { name, avatarURL } = useSelector(selectUser);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const handleUserMenuShow = () => {
    setIsOpenDropdown(true);
  };
  //     const [isOpenLogout, setIsOpenLogout] = useState(false);
  //     const [isOpenEditProfile, setIsOpenEditProfile] = useState(false);

  //     const nodeRef = createRef(null);

  //     const handlerLogoutDropdownClick = () => setIsOpenLogout(!isOpenLogout);

  //     const handlerEditProfileClick = () => setIsOpenEditProfile(!isOpenEditProfile);

  //     const handlerUserDropdownClick = () => {
  //       setIsOpenDropdown(!isOpenDropdown);
  //       setIsOpenLogout(false);
  //       setIsOpenEditProfile(false);
  //     };

  //     const handlerBackdropClicks = (e) => {
  //       const backdrop = e.target.closest("#user_group") === null;
  //       const esc = e.key === "Escape";
  //       if (backdrop  esc) {
  //         setIsOpenDropdown(false);
  //         setIsOpenEditProfile(false);
  //         setIsOpenLogout(false);
  //       }
  //     };

  //     useEffect(() => {
  //       if (isOpenDropdown) {
  //         window.addEventListener("click", handlerBackdropClicks);
  //         window.addEventListener("keydown", handlerBackdropClicks);
  //       }

  //       return () => {
  //         window.removeEventListener("click", handlerBackdropClicks);
  //         window.removeEventListener("keydown", handlerBackdropClicks);
  //       };
  //     }, [isOpenDropdown]);

  return (
    <>
      <UserMenu onClick={handleUserMenuShow}>
        <UserIcon src={avatarURL} alt="User photo" />
        <UserName>{name}</UserName>

        {/* {isOpenDropdown && (
        <UserDropdown
          ref={nodeRef}
          handlerEditProfileClick={handlerEditProfileClick}
          handlerLogoutDropdownClick={handlerLogoutDropdownClick}
        />
      )}

      {isOpenEditProfile && (
        <EditUserModal
          ref={nodeRef}
          handlerEditProfileClick={handlerEditProfileClick}
          handlerUserDropdownClick={handlerUserDropdownClick}
        />
      )}

      {isOpenLogout && (
        <LogoutOptions
          ref={nodeRef}
          handlerLogoutDropdownClick={handlerLogoutDropdownClick}
        />
      )} */}
      </UserMenu>
      {isOpenDropdown && <UserLogoPopup />}
    </>
  );
};
