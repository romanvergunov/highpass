/* eslint-disable max-len */
/* eslint-disable import/no-import-module-exports */
/* eslint-disable arrow-body-style */
import { series, parallel } from 'gulp';
import clean from './gulp/tasks/_clean';
import htmlPrimary from './gulp/tasks/_htmlPrimary';
import htmlPages from './gulp/tasks/_htmlPages';
import fonts from './gulp/tasks/_fonts';
import documents from './gulp/tasks/_documents';
import audio from './gulp/tasks/_audio';
import video from './gulp/tasks/_video';
import vector from './gulp/tasks/_vector';
import sprites from './gulp/tasks/_sprites';
import javascript from './gulp/tasks/_javascript';
import styles from './gulp/tasks/_styles';
import fileWatch from './gulp/tasks/_watch';
import { picturesJpg, picturesPng, picturesFavicon } from './gulp/tasks/_pictures';
import { config } from './gulp/config';

config.setEnv();

exports.clean = clean;
exports.sprites = sprites;
exports.picturesJpg = picturesJpg;
exports.picturesPng = picturesPng;
exports.picturesFavicon = picturesFavicon;

const build = series(
  fonts,
  audio,
  video,
  documents,
  vector,
  parallel(
    htmlPrimary,
    htmlPages,
    javascript,
    styles,
  ),
);

const watch = series(
  build,
  fileWatch,
);

const start = series(
  build,
  sprites,
  picturesJpg,
  picturesPng,
  picturesFavicon,
  fileWatch,
);

exports.build = build;
exports.watch = watch;
exports.start = start;
