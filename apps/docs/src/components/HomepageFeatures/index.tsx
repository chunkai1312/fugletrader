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
        輕鬆連接富果 API，實現即時股票交易和資料訪問。
      </>
    ),
  },
  {
    title: '使用者友善的 CLI',
    Svg: require('@site/static/img/undraw_programming.svg').default,
    description: (
      <>
        簡單的命令列介面，使交易和資料管理直觀且高效。
      </>
    ),
  },
  {
    title: 'LINE Notify 通知',
    Svg: require('@site/static/img/undraw_texting.svg').default,
    description: (
      <>
        可選擇啟用 LINE Notify，即時取得下單的委託回報和成交回報。
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
