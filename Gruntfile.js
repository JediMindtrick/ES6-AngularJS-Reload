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
        files: ['**/*.js','**/*.html','**/*.css','!serverDist/**','!spa/clientBuild/**','!spa/clientDist/**','!**/node_modules/**'],
        tasks: ['express:dev:stop','clean:all','6to5:common','6to5:amd','clean:maps','express:dev'],
        options: {
          spawn: false,
        }
      }
    },

    clean: {
        all: {
            src: ['serverDist/**','spa/clientBuild/**','spa/clientDist/**']
        },
        maps: {
            src: ['serverDist/**.map','spa/clientBuild/**.map','spa/clientDist/**.map']
        }
    },

    '6to5': {
      options: {
        modules: 'common'/*,
        sourceMap: 'inline'*/
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

  grunt.registerTask('default', ['clean:all','6to5:common','6to5:amd','clean:maps','express:dev','watch']);
  grunt.registerTask('prodBuild', ['clean:all','6to5:common','browserify']);
}
