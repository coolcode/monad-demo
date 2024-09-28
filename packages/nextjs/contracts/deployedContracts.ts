/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  41454: {
    YourContract: {
      address: "0xeedb46bfff0ad1bd372d953898d00e95a36dc68a",
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "_owner",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "pull",
          inputs: [
            {
              name: "isTeam1",
              type: "bool",
              internalType: "bool",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "ropePosition",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "int256",
              internalType: "int256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "team1Score",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "team2Score",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "event",
          name: "RopePositionChanged",
          inputs: [
            {
              name: "newPosition",
              type: "int256",
              indexed: false,
              internalType: "int256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "ScoreUpdated",
          inputs: [
            {
              name: "team1Score",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "team2Score",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
      ],
      inheritedFunctions: {},
    },
  },
  11155111: {
    YourContract: {
      address: "0x5adee6f7320731bf0b931da3b2bf526682bb350d",
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "_owner",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getWinStatus",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "maxScoreDifference",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "pull",
          inputs: [
            {
              name: "isTeam1",
              type: "bool",
              internalType: "bool",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "reSet",
          inputs: [
            {
              name: "_maxScoreDifference",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "ropePosition",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "int256",
              internalType: "int256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "team1Score",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "team2Score",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
