import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { navigateAtom } from "@stores/navigate";
import { useAtom } from "jotai";

const KakaoLogin = () => {
  const navigate = useNavigate();
  const [navigateUrl] = useAtom(navigateAtom);

  const [readyLogin, setReadyLogin] = useState(false);

  // 로그인 완료되면 상태 확인
  useEffect(() => {
    if (readyLogin) {
      navigate(navigateUrl);
    }
  }, [readyLogin]);

  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    const fetchData = async () => {
      if (code) {
        try {
          // 인가 코드 서버에 전송
          console.log(code);

          setReadyLogin(true);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchData();
  }, [code, navigate]);

  return <div></div>;
};

export default KakaoLogin;
