import logo from './logo.svg';
import style from './App.module.css';
import GazpromLogo from "./Components/GazpromLogo";
import ButtonDoTest from "./Components/ButtonStartTest";

function startTest() {
  return (
      <div>
        <GazpromLogo></GazpromLogo>
          <div className={style.quizQuastions}>
              <div>
                  <div className={style.TextUpStile}>Тест</div>
                  <div className={style.TextDouwstile}>Пройдите тест для опрдиления вашего уровня компетенций</div>
              </div>
              <ButtonDoTest></ButtonDoTest>
          </div>
      </div>
  );
}

export default startTest;
