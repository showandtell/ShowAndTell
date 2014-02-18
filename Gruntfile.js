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
            'assets/js/*.js',
            'assets/bootstrap/*.js'
          ],
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-traceur');

  grunt.registerTask('build', ['traceur']);

};