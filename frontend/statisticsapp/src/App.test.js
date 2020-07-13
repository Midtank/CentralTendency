import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {FindMean, FindMedian, FindMode, FindStdDev} from './logic/logic.js'


test('Tests mean function', () => {
  const testArray1 = [1,2,3,4,5];
  const testArray2 = [10, 15]
  const mean1 = FindMean(testArray1);
  const mean2 = FindMean(testArray2);
  expect(mean1).toBe(3); 
  expect(mean2).toBe(12.5)
});

test('Tests median function', () => {
  const testArray1 = [1,2,3,4,5];
  const testArray2 = [1,2,3,4];
  const median1 = FindMedian(testArray1);
  const median2 = FindMedian(testArray2)
  expect(median1).toBe(3); 
  expect(median2).toBe(2.5);
});

test('Tests mode function', () => {
  const testArray1 = [1,2,2,3,4,5];
  const testArray2 = [1,2,3];
  const mode1 = FindMode(testArray1);
  const mode2 = FindMode(testArray2);
  expect(mode1).toBe(2); 
  expect(mode2).toBe(1);
});

test('Tests std dev function', () => {
  const testArray1 = [1,2,3,4,5];
  const testArray2 = [1,2,50];
  const stdDev1 = FindStdDev(testArray1);
  const stdDev2 = FindStdDev(testArray2);
  expect(stdDev1).toBeCloseTo(1.414, 3); 
  expect(stdDev2).toBeCloseTo(22.8667,3);
})