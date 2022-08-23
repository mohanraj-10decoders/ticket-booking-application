import React from 'react';
import classes from './DisplayCard.module.css';

export default function DisplayCard() {
  return (
    <div className={classes.content}>
      <img
        src='https://img.happyeasygo.com/oss/ossuploadfile/advertising/2021/11/16/6b3c3642133d486da50930273a988908.png'
        alt='Card'
        className={classes.cardImage}
      />
      <img
        src='https://img.happyeasygo.com/oss/ossuploadfile/advertising/2021/10/21/f40b96e293f54b4baaac1ebc104ffd5c.png'
        alt='Card'
        className={classes.cardImage}
      />
    </div>
  );
}
