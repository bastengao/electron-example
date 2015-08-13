var gulp = require('gulp');
var electron = require('gulp-electron');
var packageJson = require('./src/package.json');

gulp.task('electron', function() {

    gulp.src("")
    .pipe(electron({
        src: './src',
        packageJson: packageJson,
        /* 打包输出目录 */
        release: './release',
        cache: './cache',
        /* electron 版本 */
        version: 'v0.30.4',
        packaging: true,
        /* 打包的平台 */
        platforms: ['win32-ia32', 'darwin-x64'],
        platformResources: {
            darwin: {
                CFBundleDisplayName: packageJson.name,
                CFBundleIdentifier: packageJson.name,
                CFBundleName: packageJson.name,
                CFBundleVersion: packageJson.version,
                /* 应用图标 */
                icon: 'gulp-electron.icns'
            },
            win: {
                "version-string": packageJson.version,
                "file-version": packageJson.version,
                "product-version": packageJson.version,
                /* 应用图标 */
                "icon": 'gulp-electron.ico'
            }
        }
    }))
    .pipe(gulp.dest(""));
});
