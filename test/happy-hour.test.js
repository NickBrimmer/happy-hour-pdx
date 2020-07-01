// IMPORT MODULES under test here:
import { findById } from '../common/utils.js';
import listOfBeers from '../data/bar-list.js'

const test = QUnit.test;

test('findById() takes an array and the id of an object and finds that object in the array', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const aaltoLounge = 'aalto-lounge';

    //Act 
    // Call the function you're testing and set the result to a const

    const found = findById(listOfBeers, aaltoLounge);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(found, listOfBeers[0]);
});
