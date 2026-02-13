type GuestIntroProps = {
  mode: 'image' | 'video'
  onSignIn: () => void
}

const ASSETS = {
  hero: '/media/melt-banner.png',
  modeReal: '/media/mode-real-v2.jpg',
  modeAnime: '/media/mode-anime-v2.png',
  modeEdit: '/media/mode-edit-v2.png',
  promptTipReal: '/media/prompt-tip-real.jpg',
  promptTipAnime: '/media/prompt-tip-anime.png',
}

export function GuestIntro({ mode: _mode, onSignIn }: GuestIntroProps) {
  return (
    <div className="melt-landing">
      <section className="melt-hero">
        <div className="melt-hero__copy">
          <p className="melt-hero__kicker">Melt AI</p>
          <h1>生成AIスタジオ</h1>
          <p className="melt-hero__lead">
            リアル生成、アニメ生成、画像編集を1つのUIで完結。
            <br />
            プロンプトを入力して、すぐに結果を確認できます。
          </p>
          <div className="melt-hero__stats">
            <span>全世界ユーザー 50,000+</span>
            <span>今すぐ登録で5回無料</span>
            <span>高速生成エンジン</span>
            <span>神絵師イラストを誰でも</span>
            <span>絵師スタイル自由自在</span>
            <span>超リアルな実写生成</span>
          </div>
          <div className="melt-hero__actions">
            <button type="button" className="primary-button primary-button--pulse" onClick={onSignIn}>
              登録 / ログイン
            </button>
          </div>
        </div>
        <div className="melt-hero__media">
          <img src={ASSETS.hero} alt="Melt AI ヒーロー画像" loading="eager" />
        </div>
      </section>

      <section className="melt-modes">
        <article className="melt-mode-card">
          <h3>リアル</h3>
          <p>実写AIエンジンで高密度なリアル画像を生成。</p>
          <img className="melt-mode-card__image" src={ASSETS.modeReal} alt="リアル生成の説明画像" loading="lazy" />
        </article>
        <article className="melt-mode-card">
          <h3>アニメ</h3>
          <p>神絵師超えのアニメイラストを瞬時に生成。</p>
          <img className="melt-mode-card__image" src={ASSETS.modeAnime} alt="アニメ生成の説明画像" loading="lazy" />
        </article>
        <article className="melt-mode-card">
          <h3>編集</h3>
          <p>高機能編集で元画像を意図通りに変換。</p>
          <img className="melt-mode-card__image" src={ASSETS.modeEdit} alt="編集機能の説明画像" loading="lazy" />
        </article>
      </section>

      <section className="melt-howto">
        <div className="melt-howto__header">
          <h2>プロンプトのコツ</h2>
          <p>リアルとアニメで書き方を切り替えると、狙った画に近づきます。</p>
        </div>
        <div className="melt-howto__flow">
          <div className="melt-howto__card">
            <p>リアル画像（自然言語）</p>
            <img src={ASSETS.promptTipReal} alt="リアル生成のプロンプト例" loading="lazy" />
            <strong>日本人の女性がカフェでアイスを笑顔で食べる</strong>
            <small>リアル画像は自然言語で記述可能</small>
          </div>
          <div className="melt-howto__card">
            <p>アニメ画像（タグ形式）</p>
            <img src={ASSETS.promptTipAnime} alt="アニメ生成のプロンプト例" loading="lazy" />
            <strong>1girl, masterpiece, best quality, coat, long skirt, @anime</strong>
            <small>アニメ画像はタグ形式がおすすめ（@で絵師スタイル指定可能）</small>
          </div>
        </div>
      </section>
    </div>
  )
}
