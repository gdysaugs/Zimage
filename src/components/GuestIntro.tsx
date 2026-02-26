type GuestIntroProps = {
  mode: 'image' | 'video'
  onSignIn: () => void
}

const ASSETS = {
  hero: '/media/top-banner.png',
  modeReal: '/media/mode-real-custom.webp',
  modeEdit: '/media/mode-edit-custom.png',
  modeVideo: '/media/mode-video-5s.mp4',
  modeVideo8: '/media/mode-video-8s.mp4',
}

const FAQ_ITEMS = [
  {
    q: '無料でできますか？',
    a: 'Googleアカウントの無料登録ですぐに開始できます。登録時にクレジット5枚を配布します。',
  },
  {
    q: 'ログインボーナスはありますか？',
    a: 'はい。1日3回、無料クレジットを受け取れます。',
  },
  {
    q: '生成時間はどれくらいですか？',
    a: '通常動画は平均1分、8秒動画は1分半から2分が目安です。',
  },
  {
    q: 'クレジットの有効期限はありますか？',
    a: '有効期限は原則ありません。',
  },
  {
    q: '生成に失敗した場合はどうなりますか？',
    a: '失敗時はクレジット返却なので安心です。',
  },
  {
    q: '対応画像形式と最大サイズは？',
    a: 'JPG / JPEG / PNG / WEBP に対応、最大10MBです。',
  },
  {
    q: '生成したものは公開されますか？',
    a: 'いいえ。生成物は外部公開されません。',
  },
  {
    q: '禁止コンテンツはありますか？',
    a: '暴力・低年齢・違法・なりすまし等、利用規約に反する内容は禁止です。',
  },
]

const ACHIEVEMENTS = [
  '個人クリエイターから制作会社まで幅広く導入されています。',
  'SNS運用、広告素材、ECビジュアル、動画制作の現場で活用されています。',
  '用途に合わせて画像生成・画像編集・動画生成を1つのUIで使えます。',
]

const SPEC_LABELS = [
  '販売事業者: MeltAI',
  '運営責任者: Sato Natsu',
  '所在地: 愛知県名古屋市中区',
  '電話番号: 080726276500',
  'メールアドレス: meltaispec456@gmail.com',
  '販売価格: 各プランページに表示',
  '支払方法: クレジットカード（Stripe）',
  '支払時期: 購入時に即時決済',
  '役務提供時期: 決済後すぐ利用可能',
]

export function GuestIntro({ mode: _mode, onSignIn }: GuestIntroProps) {
  return (
    <div className="melt-landing">
      <section className="melt-hero">
        <div className="melt-hero__copy">
          <p className="melt-hero__kicker">Melt AI</p>
          <h1>All In One AI Studio</h1>
          <p className="melt-hero__lead">画像生成、動画生成、画像編集。すべてをここで完結できます。</p>
          <div className="melt-hero__stats">
            <span>画像から動画生成</span>
            <span>無料登録でクレジット5枚配布</span>
            <span>1日3回無料</span>
            <span>リアルな高速生成</span>
          </div>
          <div className="melt-hero__actions">
            <button type="button" className="primary-button primary-button--pulse" onClick={onSignIn}>
              無料登録 / ログイン
            </button>
          </div>
        </div>
        <div className="melt-hero__media">
          <img src={ASSETS.hero} alt="Melt AI ヒーローバナー" loading="eager" />
        </div>
      </section>

      <section className="melt-modes">
        <article className="melt-mode-card">
          <h3>リアル生成</h3>
          <p>実写AIエンジンで高密度なリアル人物を生成。</p>
          <img className="melt-mode-card__image" src={ASSETS.modeReal} alt="リアル生成の説明画像" loading="lazy" />
        </article>
        <article className="melt-mode-card">
          <h3>編集</h3>
          <p>高機能編集で元画像を意図通りに変換。</p>
          <img className="melt-mode-card__image" src={ASSETS.modeEdit} alt="編集機能の説明画像" loading="lazy" />
        </article>
        <article className="melt-mode-card">
          <h3>動画化</h3>
          <p>画像から自然なモーションの動画を生成。</p>
          <video className="melt-mode-card__video" src={ASSETS.modeVideo} autoPlay loop muted playsInline preload="metadata" />
        </article>
        <article className="melt-mode-card">
          <h3>8秒動画</h3>
          <p>長めの尺でより表現力の高い動画生成に対応。</p>
          <video className="melt-mode-card__video" src={ASSETS.modeVideo8} autoPlay loop muted playsInline preload="metadata" />
        </article>
      </section>

      <section className="melt-faq">
        <div className="melt-howto__header">
          <h2>よくある質問</h2>
          <p>はじめる前によくある質問</p>
        </div>
        <div className="melt-faq__list">
          {FAQ_ITEMS.map((item) => (
            <article key={item.q} className="melt-faq__item">
              <h3 className="melt-faq__q">Q. {item.q}</h3>
              <p className="melt-faq__a">A. {item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="melt-legal">
        <h2>採用実績</h2>
        {ACHIEVEMENTS.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </section>

      <section className="melt-legal">
        <h2>特定商取引法に基づく表記</h2>
        {SPEC_LABELS.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </section>
    </div>
  )
}
