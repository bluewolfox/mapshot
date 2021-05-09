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
    (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const payload = {
        name: name,
        age: age,
        married: married,
        agent: window.navigator.userAgent,
      };
      dispatch(userSlice.actions.setUserData(payload));
      history.push("/map");
    },
    [name, age, married]
  );

  const onChangeName = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  const onChangeAge = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  }, []);

  const onChangeMarried = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    setMarried(!married);
  }, []);

  return (
    <>
      <nav className="black-nav">이용준 개새끼</nav>
      <div className="center-div">
        <h1>당신의 정보를 적어주세요.</h1>
        <form onSubmit={onSubmitUserData} className="home-form">
          <input
            type="text"
            placeholder="이름을 적어주세요"
            value={name}
            onChange={onChangeName}
          />
          <input
            type="number"
            placeholder="나이를 적어주세요"
            value={age}
            onChange={onChangeAge}
          />
          <div
            style={{
              margin: "15px 0",
            }}
          >
            <input
              type="checkbox"
              checked={married}
              onChange={onChangeMarried}
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
