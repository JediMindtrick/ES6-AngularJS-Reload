module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-browserify');
//  grunt.loadNpmTasks('grunt-simple-watch');

  grunt.initConfig({

    browserify: {
      client: {
        src: ['spa/clientBuild/**/*.js'],
        dest: 'spa/clientDist/app.js',
        options: {
          //external: ['jquery', 'momentWrapper'],
        }
      }
    },

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
        files: ['**/*.js','**/*.html','**/*.css','!serverDist/**','!spa/clientBuild/**','!spa/clientDist/**','!node_modules/','!**/node_modules/**'],
        tasks: ['express:dev:stop','clean','6to5:common','6to5:amd','express:dev'],
        options: {
          spawn: false,
        }
      }
    },

    clean: ['serverDist','spa/clientBuild','spa/clientDist'],
    '6to5': {
      options: {
        modules: 'common'
      },

      common:{
          options: {
            modules: 'common'
          },
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
            dest: 'spa/clientBuild/'
          },
          {
            expand: true,
            cwd: 'client/',
            src: ['**/*.js'],
            dest: 'spa/clientBuild/'
          }]
      },
      amd:{
        options: {
          modules: 'amd'
        },
        files: [{
          expand: true,
          cwd: 'shared/',
          src: ['**/*.js'],
          dest: 'spa/clientBuild/'
        },
        {
          expand: true,
          cwd: 'client/',
          src: ['**/*.js'],
          dest: 'spa/clientBuild/'
        }]
      }
    }
  });

  grunt.registerTask('default', ['clean','6to5:common','6to5:amd','express:dev','watch']);
  grunt.registerTask('prodBuild', ['clean','6to5:common','browserify']);
}
