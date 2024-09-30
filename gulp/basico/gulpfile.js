const gulp = require('gulp')
const {series, parallel} = require('gulp')


const antes1 = callback => {
    console.log('Tarefa antes 1')
    return callback()
}

const antes2 = callback => {
    console.log('Tarefa antes 1')
    return callback()
}


function copiar(callback) {
    gulp.src('pastaA/**/*txt')
        .pipe(gulp.dest('pastaB'))
    return callback()
}


const final = callback => {
    console.log('Tarefa antes 1')
    return callback()
}

module.exports.default = series (
    parallel(antes1, antes2),
    copiar, 
    final
)