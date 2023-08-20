import classNames from 'classnames';
import css from './main.module.scss';

export default function Home() {
  return(
    <>
      <div className={css.mainWrap}>
        <main className={classNames(css.main, 'contentWrap')}>

          <header className={classNames(css.header, "flex", "items-center", "justify-between")}>
            <h1 className={css.logo}>PET LOGO</h1>
            <button className={css.roundedBtn} type="button">LOGIN</button>
          </header>

          <main className={classNames(css.introHeader, 'text-center')}>
            <img src='/imgs/mainLogo.png' alt="개놀자로고" />
            <h2 className="text-3xl font-bold">반려동물 케어의 모든것</h2>
            <h3>우리 아이에게 꼭 맞는 케어 서비스를 이용해 보세요</h3>
            <div className={css.introBody}>
              <form action="e.preventDefault()">
                <fieldset className={classNames(css.fieldset, 'flex', 'items-center')}>
                  <legend className="a11yHidden">지역 입력</legend>
                  <label htmlFor='location' className={classNames(css.label, 'flex-none')}>위치</label>
                  <input id='location' className={css.inputArea} type="text" placeholder='지역을 입력해주세요'/>
                </fieldset>

                <fieldset className={classNames(css.fieldset, 'flex', 'items-center')}>
                  <legend className="a11yHidden">날짜 입력</legend>
                  <label htmlFor='date' className={classNames(css.label, 'flex-none')}>날짜</label>
                </fieldset>

                <fieldset className={classNames(css.fieldset, 'flex', 'items-center')}>
                  <legend className="a11yHidden">서비스 체크</legend>
                  <label className={classNames(css.label, 'flex-none')}>서비스</label>
                  <label htmlFor="hoteling">
                    <input type="checkbox" name="" id="hoteling" />호텔링
                  </label>
                  <label htmlFor="playRoom">
                    <input type="checkbox" name="" id="playRoom" />놀이방
                  </label>
                  <label htmlFor="both">
                    <input type="checkbox" name="" id="both" />호텔링 + 놀이방
                  </label>
                </fieldset>

                <fieldset className={classNames(css.fieldset, 'flex', 'items-center')}>
                  <label htmlFor='weight' className={classNames(css.label, 'flex-none')}>몸무게</label>
                  <select id='weight' name="몸무게">
                  <option value="전체">전체</option>
                    <option value="1kg~5kg">1kg이상~5kg미만</option>
                    <option value="5kg~10kg">5kg이상~10kg미만</option>
                    <option value="10kg~15kg">10kg이상~15kg미만</option>
                  </select>
                </fieldset>
              </form>
            </div>
            <button type='button'>검색</button>
          </main>
        </main>
        <div className={css.bottomBar}>
          <span className="a11yHidden">하단 막대바</span>
        </div>
      </div>
    </>
  )
}

