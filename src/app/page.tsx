import css from './main.module.scss'

export default function Home() {
  return(
    <div className={css.box}>
      <section>
        <h1>반려동물 케어의 모든것</h1>
        <h2>우리 아이에게 꼭 맞는 케어 서비스를 이용해 보세요</h2>
        <article>
          
        </article>
      </section>
      <div className={css.bottomBar}>
        <span className="a11yHidden">하단 막대바</span>
      </div>
    </div>
  )
}

