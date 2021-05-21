import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import userSlice from "../modules/reducers/user";
import "../assets/scss/Home.scss";

const Home = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [married, setMarried] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmitUserData = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const payload = {
        name: name,
        age: age,
        married: married,
        agent: window.navigator.userAgent,
      };
      dispatch(userSlice.actions.setUserData(payload));
      history.push("/map");
    }, [name, age, married, dispatch, history]);

  return (
    <>
      <nav className="black-nav">맵샷</nav>
      <div className="center-div">
        <h1>당신의 정보를 적어주세요.</h1>
        <form onSubmit={onSubmitUserData} className="home-form">
          <input
            type="text"
            placeholder="이름을 적어주세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="나이를 적어주세요"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <div
            style={{
              margin: "15px 0",
            }}
          >
            <input
              type="checkbox"
              checked={married}
              onChange={(e) => setMarried(e.target.checked)}
              id="checkMarried"
              className="married"
            />
            <label htmlFor="checkMarried">결혼 하셨나요?</label>
          </div>
          <button type="submit">등록</button>
        </form>
      </div>
    </>
  );
};

export default Home;
