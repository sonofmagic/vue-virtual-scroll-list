import type { JestConfigWithTsJest } from 'ts-jest/dist/types'

const config: JestConfigWithTsJest = {
  preset: 'ts-jest',
  transformIgnorePatterns: ['<rootDir>/node_modules'],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['lcov', 'html', 'text-summary'],
  moduleFileExtensions: ['js', 'jsx', 'tsx', 'ts', 'vue']
}
export default config
