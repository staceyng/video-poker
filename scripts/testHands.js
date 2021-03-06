// test script used to test logic in checkStates file
// To run and test: open terminal -> node testHands.js

import {
  checkRoyalFlush,
  checkStraightFlush,
  checkStraight,
  checkFlush,
  checkFourKind,
  checkHighCard,
  checkTwoKind,
  checkThreeKind,
  checkFullHouse,
} from "./checkStates.js";

const testCases = [
  {
    name: "test royal flush",
    fn: checkRoyalFlush,
    inputArr: [
      {
        name: "ace",
        suit: "spades",
        rank: 1,
        color: "black",
        displayName: "A",
        suitSymbol: "♠️",
      },
      {
        name: "10",
        suit: "spades",
        rank: 10,
        color: "black",
        displayName: "10",
        suitSymbol: "♠️",
      },
      {
        name: "jack",
        suit: "spades",
        rank: 11,
        color: "black",
        displayName: "J",
        suitSymbol: "♠️",
      },
      {
        name: "queen",
        suit: "spades",
        rank: 12,
        color: "black",
        displayName: "Q",
        suitSymbol: "♠️",
      },
      {
        name: "king",
        suit: "spades",
        rank: 13,
        color: "black",
        displayName: "K",
        suitSymbol: "♠️",
      },
    ],
    expOutput: true,
  },
  {
    name: "test straight flush",
    fn: checkStraightFlush,
    inputArr: [
      {
        name: "9",
        suit: "spades",
        rank: 9,
        color: "black",
        displayName: "ace",
        suitSymbol: "♠️",
      },
      {
        name: "10",
        suit: "spades",
        rank: 10,
        color: "black",
        displayName: "10",
        suitSymbol: "♠️",
      },
      {
        name: "jack",
        suit: "spades",
        rank: 11,
        color: "black",
        displayName: "J",
        suitSymbol: "♠️",
      },
      {
        name: "queen",
        suit: "spades",
        rank: 12,
        color: "black",
        displayName: "Q",
        suitSymbol: "♠️",
      },
      {
        name: "king",
        suit: "spades",
        rank: 13,
        color: "black",
        displayName: "K",
        suitSymbol: "♠️",
      },
    ],
    expOutput: true,
  },
  {
    name: "test four of a kind",
    fn: checkFourKind,
    inputArr: [
      {
        name: "ace",
        suit: "spades",
        rank: 1,
        color: "black",
        displayName: "A",
        suitSymbol: "♠️",
      },
      {
        name: "ace",
        suit: "clubs",
        rank: 1,
        color: "black",
        displayName: "A",
        suitSymbol: "♣️",
      },
      {
        name: "ace",
        suit: "diamonds",
        rank: 1,
        color: "red",
        displayName: "A",
        suitSymbol: "♦️",
      },
      {
        name: "ace",
        suit: "hearts",
        rank: 1,
        color: "red",
        displayName: "A",
        suitSymbol: "♥️",
      },
      {
        name: "king",
        suit: "spades",
        rank: 13,
        color: "black",
        displayName: "K",
        suitSymbol: "♠️",
      },
    ],
    expOutput: true,
  },
  {
    name: "test full house",
    fn: checkFullHouse,
    inputArr: [
      {
        name: "ace",
        suit: "spades",
        rank: 1,
        color: "black",
        displayName: "A",
        suitSymbol: "♠️",
      },
      {
        name: "ace",
        suit: "clubs",
        rank: 1,
        color: "black",
        displayName: "A",
        suitSymbol: "♣️",
      },
      {
        name: "ace",
        suit: "diamonds",
        rank: 1,
        color: "red",
        displayName: "A",
        suitSymbol: "♦️",
      },
      {
        name: "7",
        suit: "hearts",
        rank: 7,
        color: "red",
        displayName: "7",
        suitSymbol: "♥️",
      },
      {
        name: "7",
        suit: "spades",
        rank: 7,
        color: "black",
        displayName: "7",
        suitSymbol: "♠️",
      },
    ],
    expOutput: true,
  },
  {
    name: "test flush",
    fn: checkFlush,
    inputArr: [
      {
        name: "7",
        suit: "spades",
        rank: 7,
        color: "black",
        displayName: "7",
        suitSymbol: "♠️",
      },
      {
        name: "9",
        suit: "spades",
        rank: 9,
        color: "black",
        displayName: "9",
        suitSymbol: "♠️",
      },
      {
        name: "2",
        suit: "spades",
        rank: 2,
        color: "black",
        displayName: "2",
        suitSymbol: "♠️",
      },
      {
        name: "3",
        suit: "spades",
        rank: 3,
        color: "black",
        displayName: "3",
        suitSymbol: "♠️",
      },
      {
        name: "jack",
        suit: "spades",
        rank: 11,
        color: "black",
        displayName: "J",
        suitSymbol: "♠️",
      },
    ],
    expOutput: true,
  },
  {
    name: "test three of a kind (3,1,1)",
    fn: checkThreeKind,
    inputArr: [
      {
        name: "7",
        suit: "spades",
        rank: 7,
        color: "black",
        displayName: "7",
        suitSymbol: "♠️",
      },
      {
        name: "7",
        suit: "clubs",
        rank: 7,
        color: "black",
        displayName: "7",
        suitSymbol: "♣️",
      },
      {
        name: "7",
        suit: "diamonds",
        rank: 7,
        color: "red",
        displayName: "7",
        suitSymbol: "♦️",
      },
      {
        name: "4",
        suit: "spades",
        rank: 4,
        color: "black",
        displayName: "4",
        suitSymbol: "♠️",
      },
      {
        name: "2",
        suit: "spades",
        rank: 2,
        color: "black",
        displayName: "2",
        suitSymbol: "♠️",
      },
    ],
    expOutput: true,
  },
  {
    name: "test three of a kind (3,2)",
    fn: checkThreeKind,
    inputArr: [
      {
        name: "7",
        suit: "spades",
        rank: 7,
        color: "black",
        displayName: "7",
        suitSymbol: "♠️",
      },
      {
        name: "7",
        suit: "clubs",
        rank: 7,
        color: "black",
        displayName: "7",
        suitSymbol: "♣️",
      },
      {
        name: "7",
        suit: "diamonds",
        rank: 7,
        color: "red",
        displayName: "7",
        suitSymbol: "♦️",
      },
      {
        name: "2",
        suit: "hearts",
        rank: 2,
        color: "red",
        displayName: "2",
        suitSymbol: "♥️",
      },
      {
        name: "2",
        suit: "spades",
        rank: 2,
        color: "black",
        displayName: "2",
        suitSymbol: "♠️",
      },
    ],
    expOutput: true,
  },
  {
    name: "test two of a kind",
    fn: checkTwoKind,
    inputArr: [
      {
        name: "2",
        suit: "spades",
        rank: 2,
        color: "black",
        displayName: "2",
        suitSymbol: "♠️",
      },
      {
        name: "2",
        suit: "hearts",
        rank: 2,
        color: "red",
        displayName: "2",
        suitSymbol: "♥️",
      },
      {
        name: "7",
        suit: "spades",
        rank: 7,
        color: "black",
        displayName: "7",
        suitSymbol: "♠️",
      },
      {
        name: "7",
        suit: "clubs",
        rank: 7,
        color: "black",
        displayName: "7",
        suitSymbol: "♣️",
      },
      {
        name: "8",
        suit: "clubs",
        rank: 8,
        color: "black",
        displayName: "8",
        suitSymbol: "♣️",
      },
    ],
    expOutput: true,
  },
  {
    name: "test straight (all number cards)",
    fn: checkStraight,
    inputArr: [
      {
        name: "3",
        suit: "clubs",
        rank: 3,
        color: "black",
        displayName: "3",
        suitSymbol: "♣️",
      },
      {
        name: "4",
        suit: "diamonds",
        rank: 4,
        color: "red",
        displayName: "4",
        suitSymbol: "♦️",
      },
      {
        name: "5",
        suit: "spades",
        rank: 5,
        color: "black",
        displayName: "5",
        suitSymbol: "♠️",
      },
      {
        name: "6",
        suit: "hearts",
        rank: 6,
        color: "red",
        displayName: "6",
        suitSymbol: "♥️",
      },
      {
        name: "7",
        suit: "clubs",
        rank: 7,
        color: "black",
        displayName: "7",
        suitSymbol: "♣️",
      },
    ],
    expOutput: true,
  },
  {
    name: "test straight (ace high straight)",
    fn: checkStraight,
    inputArr: [
      {
        name: "ace",
        suit: "clubs",
        rank: 1,
        color: "black",
        displayName: "A",
        suitSymbol: "♣️",
      },
      {
        name: "10",
        suit: "diamonds",
        rank: 10,
        color: "red",
        displayName: "10",
        suitSymbol: "♦️",
      },
      {
        name: "queen",
        suit: "hearts",
        rank: 12,
        color: "red",
        displayName: "Q",
        suitSymbol: "♥️",
      },
      {
        name: "jack",
        suit: "spades",
        rank: 11,
        color: "black",
        displayName: "J",
        suitSymbol: "♠️",
      },
      {
        name: "king",
        suit: "clubs",
        rank: 13,
        color: "black",
        displayName: "K",
        suitSymbol: "♣️",
      },
    ],
    expOutput: true,
  },
  {
    name: "test straight (9, 10, pictures)",
    fn: checkStraight,
    inputArr: [
      {
        name: "9",
        suit: "clubs",
        rank: 9,
        color: "black",
        displayName: "9",
        suitSymbol: "♣️",
      },
      {
        name: "10",
        suit: "diamonds",
        rank: 10,
        color: "red",
        displayName: "10",
        suitSymbol: "♦️",
      },
      {
        name: "queen",
        suit: "hearts",
        rank: 12,
        color: "red",
        displayName: "Q",
        suitSymbol: "♥️",
      },
      {
        name: "jack",
        suit: "spades",
        rank: 11,
        color: "black",
        displayName: "J",
        suitSymbol: "♠️",
      },
      {
        name: "king",
        suit: "clubs",
        rank: 13,
        color: "black",
        displayName: "K",
        suitSymbol: "♣️",
      },
    ],
    expOutput: true,
  },
  {
    name: "test invalid straight (Q, K, A, 2, 3)",
    fn: checkStraight,
    inputArr: [
      {
        name: "2",
        suit: "clubs",
        rank: 2,
        color: "black",
        displayName: "2",
        suitSymbol: "♣️",
      },
      {
        name: "3",
        suit: "diamonds",
        rank: 3,
        color: "red",
        displayName: "3",
        suitSymbol: "♦️",
      },
      {
        name: "queen",
        suit: "hearts",
        rank: 12,
        color: "red",
        displayName: "Q",
        suitSymbol: "♥️",
      },
      {
        name: "ace",
        suit: "spades",
        rank: 1,
        color: "black",
        displayName: "A",
        suitSymbol: "♠️",
      },
      {
        name: "king",
        suit: "clubs",
        rank: 13,
        color: "black",
        displayName: "K",
        suitSymbol: "♣️",
      },
    ],
    expOutput: false,
  },
];

const testCheckStatesFunctions = () => {
  for (let i = 0; i < testCases.length; i += 1) {
    const test = testCases[i];
    // console.log(`Testing ${i} - ${test.name}`);
    const actualOuput = test.fn(test.inputArr);
    if (actualOuput === test.expOutput) {
      const res = "passed";
      console.log("\x1b[32m%s\x1b[0m", `TEST ${i} - ${test.name} - ${res}`);
    } else {
      const res = "failed";
      console.log("\x1b[31m%s\x1b[0m", `TEST ${i} - ${test.name} - ${res}`);
    }
  }
};

testCheckStatesFunctions();
