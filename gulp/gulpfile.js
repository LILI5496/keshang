/**
 * Created by lili on 17/3/12.
 */
var gulp=require('gulp');
var sass=require('sass');

gulp.task('test',function () {
    console.log('haha');
});
gulp.task('test2',function () {
    console.log('hehe');
});
gulp.task('default',['test','test2']);


