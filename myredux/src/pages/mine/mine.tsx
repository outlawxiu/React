import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHook";
import { getUserAccount } from "../../store/userStore";
import style from "./mine.module.scss";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom'
const mine = () => {
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.user.profile);
  useEffect(() => {
    const cookie = localStorage.getItem("cookie");
    if (cookie) {
      dispatch(getUserAccount(cookie));
    }
  }, []);
  return (
    <>
      <div className={style.whole}>
        <div className={style.top}>
        <img src={profile.backgroundUrl} className={style.bg} />
          <Avatar
            size={100}
            icon={<UserOutlined />}
            src={profile.avatarUrl}
          ></Avatar>
          <Link to="">立即登录</Link>
          <p>{profile.nickname}</p>
          {/* <p>{profile.signature}</p> */}
        </div>
      </div>
    </>
  );
};

export default mine;
