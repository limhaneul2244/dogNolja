import classNames from 'classnames';
import css from './main.module.scss';

export default function Home() {
  return(
    <>
      <div className={css.mainWrap}>
        <main className={css.main}>
          <header className={classNames(css.header, "flex", "items-center", "justify-between")}>
            <h1 className={css.logo}>PET LOGO</h1>
            <button className={css.roundedBtn} type="button">LOGIN</button>
          </header>
          <article className={css.introHeader}>
            <h2 className="text-3xl font-bold underline">반려동물 케어의 모든것</h2>
            <h3>우리 아이에게 꼭 맞는 케어 서비스를 이용해 보세요</h3>
          </article>
          <article className={css.introBody}>
            
          </article>
        </main>
        <div className={css.bottomBar}>
          <span className="a11yHidden">하단 막대바</span>
        </div>
      </div>
    </>
  )
}

