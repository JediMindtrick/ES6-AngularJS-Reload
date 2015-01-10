module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');

  grunt.initConfig({
    express: {
      options: {
        // Override defaults here
      },
      dev: {
        options: {
          script: 'app.js',
          background: true
        }
      }
    },

    watch:   {
      scripts: {
        files: ['**/*.js','**/*.html','**/*.css'],
        tasks: ['clean','6to5','express:dev'],
        options: {
          spawn: false,
        }
      }
    },

    clean: ['serverDist','spa/clientDist'],
    '6to5': {
      options: {
        modules: 'common'
      },

      build: {
        files: [{
          expand: true,
          cwd: 'shared/',
          src: ['**/*.js'],
          dest: 'serverDist/'
        },
        {
          expand: true,
          cwd: 'server/',
          src: ['**/*.js'],
          dest: 'serverDist/'
        },
        {
          expand: true,
          cwd: 'shared/',
          src: ['**/*.js'],
          dest: 'spa/clientDist/'
        },
        {
          expand: true,
          cwd: 'client/',
          src: ['**/*.js'],
          dest: 'spa/clientDist/'
        }],
      }
    }
  });

  grunt.registerTask('default', ['clean','6to5','express:dev','watch']);
}
