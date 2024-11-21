import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHook";
import { getUserAccount } from "../../store/userStore";
import style from "./mine.module.scss";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
const mine = () => {
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.user.profile);
  console.log(profile);

  useEffect(() => {
    const cookie = localStorage.getItem("cookie");
    if (cookie) {
      dispatch(getUserAccount(cookie));
    }
  }, []);
  return (
    <div className={style.whole}>
      <Avatar size={180} icon={<UserOutlined />} src={profile.avatarUrl} ></Avatar>
    </div>
  );
};

export default mine;
