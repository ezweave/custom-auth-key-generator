module.exports = {
    rootDir: '.',
    testEnvironment: 'node',
    collectCoverage: true,
    collectCoverageFrom: [
      '<rootDir>/**/*.ts',
      '!<rootDir>/types/**/*.ts',
      '!<rootDir>/**/*.spec.ts',
      '!<rootDir>/__fixtures__/**/*.ts',
      '!<rootDir>/test/**/*.ts',
      '!<rootDir>/dist/**/*.ts',
    ],
    coverageThreshold: {
      global: {
        'functions': 44,
        'statements': 44 
      }
    },
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/internals/mocks/fileMock.js',
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy'
    },
    moduleFileExtensions: [
      'ts',
      'js',
      'json'
    ],
    moduleDirectories: [
      'node_modules'
    ],
    setupFiles: [
      './test/test.ts'
    ],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    testMatch: [
      '<rootDir>/src/**/?(*.)(spec|test).ts?(x)'
    ]
  }
