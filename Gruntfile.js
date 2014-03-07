module.exports = function(grunt) {

  grunt.initConfig({
    traceur: {
      dist: {
        files: {
          'build/all.js': [
            'assets/js/orderMatters/jquery.js',
            'assets/js/orderMatters/underscore.js',
            'assets/js/orderMatters/backbone-min.js',
            'assets/js/orderMatters/jszip/jszip.js',
            'assets/js/orderMatters/jszip/jszip-inflate.js',
            'assets/js/orderMatters/jszip/jszip-deflate.js',
            'assets/js/orderMatters/jszip/jszip-load.js',
            'assets/js/lib/**/*.js',
            'build/templates.js',
            'assets/js/*.js',
            'assets/bootstrap/*.js'
          ],
        }
      }
    },
    sass: {
      dist: {
        options: {
          includePaths: [
            'assets/bootstrap/'
          ]
        },
        files: {
          'build/all.css' : 'app.scss'
        }
      }
    },
    handlebars: {
      dist: {
          options: {
            processName: function(filename) {
              return filename.split('/').slice(-1)[0].split('.')[0];
            }
          },
          files: {
            'build/templates.js' : [ 'assets/mediaWidgets/**/*.hbs', 'assets/templates/*']
          }
      }
    }
  });

  grunt.loadNpmTasks('grunt-traceur');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-handlebars');

  grunt.registerTask('build', ['sass', 'handlebars', 'traceur']);

};