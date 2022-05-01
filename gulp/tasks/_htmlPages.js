/* eslint-disable arrow-body-style */
import { src, dest } from 'gulp';
import browserSync from 'browser-sync';
import htmlmin from 'gulp-htmlmin';
import gulpIf from 'gulp-if';
import gulpInclude from 'gulp-file-include';
import { config } from '../config';

const htmlPages = () => {
  return src(config.source.htmlPages)
    .pipe(gulpInclude({
      prefix: '@',
    }))
    .pipe(gulpIf(config.isProd, htmlmin({
      collapseWhitespace: true,
      removeComments: true,
      removeEmptyAttributes: true,
      useShortDoctype: true,
      collapseBooleanAttributes: true,
    })))
    .pipe(dest(config.build.htmlPages))
    .pipe(browserSync.stream());
};

export default htmlPages;
