/* Jest will only instrument files for coverage if they have been required
while our tests are running and, because the subtract module isn't being
required in our test, it's not getting instrumented for coverage and is
therefore excluded in our coverage report. */

import sum from './sum'
import subtract from './subtract'
test('Adding 1 and 2', () => {
  expect(sum(1, 2)).toBe(3);
})
