import classNames from 'classnames';
import css from './main.module.scss';

export default function Home() {
  return(
    <>
      <header className={classNames(css.contentWrap, css.header)}>
        <h1 className={css.logo}>PET LOGO</h1>
        <button type="button">LOGIN</button>
      </header>
      <div className={css.mainWrap}>
        <main>
          <h2>반려동물 케어의 모든것</h2>
          <h3>우리 아이에게 꼭 맞는 케어 서비스를 이용해 보세요</h3>
          <article>
            
          </article>
        </main>
        <div className={css.bottomBar}>
          <span className="a11yHidden">하단 막대바</span>
        </div>
      </div>
    </>
  )
}

