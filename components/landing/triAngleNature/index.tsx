import React from 'react';
import style from './style.module.scss';
interface Props {}

const TriAngleNatureBanner = (props: Props) => {
  return (
    <div>
      <div className={style.clip}>
        <div className={style.mountain4}></div>
        <div className={style.mountain3}></div>
        <div className={`${style.cloud} ${style.cloud1}`}></div>
        <div className={style.mountain1}></div>
        <div className={style.mountain2}></div>
        <div className={`${style.tree} ${style.tree2}`}></div>
        <div className={`${style.tree} ${style.tree1}`}></div>
        <div className={`${style.tree} ${style.tree0}`}></div>
        <div className={style.cloud}></div>
        <div className={`${style.tree} ${style.tree3}`}></div>
        <div className={`${style.tree} ${style.tree4}`}></div>
        <div className={`${style.tree} ${style.tree5}`}></div>
        <div className={style.close2}></div>
        <div className={style.close1}></div>
        <div className={style.drycontainer}>
          <div className={style.dry}></div>
          <div className={`${style.dry} ${style.dry1}`}></div>
          <div className={`${style.dry} ${style.dry2}`}></div>
          <div className={`${style.dry} ${style.dry11}`}></div>
          <div className={`${style.dry} ${style.dry22}`}></div>
        </div>
        <div className={`${style.drycontainer} ${style.dry0}`}>
          <div className={style.dry}></div>
          <div className={`${style.dry} ${style.dry1}`}></div>
          <div className={`${style.dry} ${style.dry2}`}></div>
          <div className={`${style.dry} ${style.dry11}`}></div>
          <div className={`${style.dry} ${style.dry22}`}></div>
        </div>
      </div>
    </div>
  );
};

export default TriAngleNatureBanner;
