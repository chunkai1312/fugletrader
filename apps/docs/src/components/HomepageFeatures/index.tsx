import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '無縫的 API 整合',
    Svg: require('@site/static/img/undraw_personal_data.svg').default,
    description: (
      <>
        輕鬆連接富果 API，實現即時股票交易與數據訪問。
      </>
    ),
  },
  {
    title: '使用者友善的 CLI',
    Svg: require('@site/static/img/undraw_programming.svg').default,
    description: (
      <>
        簡單明瞭的命令列介面，使交易與數據管理直觀且高效。
      </>
    ),
  },
  {
    title: '主動回報通知',
    Svg: require('@site/static/img/undraw_texting.svg').default,
    description: (
      <>
        支援多種平台，包括 LINE、Discord 和 Telegram，讓您能隨時接收下單委託及成交回報通知。
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
