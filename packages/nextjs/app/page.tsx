"use client"

// import Link from "next/link";
import type { NextPage } from "next"
// import { useAccount } from "wagmi";
// import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import { Address } from "~~/components/scaffold-eth";
// import styles from "TugOfWar.css";

// import styles from "~~/styles/TugOfWar.css";‘

import "../styles/globals.css"
import {
  useAccount, useSendTransaction, useWaitForTransactionReceipt,
  useReadContract, useWriteContract, type BaseError
} from "wagmi"
// import { parseEther } from 'viem'
// import deployedContracts from "~~/contracts/deployedContracts" 
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth"

// const wagmiContractConfig = {
//   address: deployedContracts.sepolia.YourContract.address,
//   abi: deployedContracts.sepolia.YourContract.abi,
// }

const Home: NextPage = () => {
  //   const { address: connectedAddress } = useAccount();

  const ropePosition = 0

  // const ropeStyle = {
  //   left: `${50 + (20 * 5)}%`
  // };

  // const flagStyle = {
  //   left: `calc(${50 + (ropePosition * 2.5)}% - 15px)`  // 调整旗子的位置
  // };
  // const flagStyle = {
  //   // left: `calc(${50 + ropePosition * 2.5}% - 15px)`  // 调整旗子的位置
  //   left: `${ropePosition * 1.5 - 15}px`  // 调整旗子的位置
  // };


  const team1Score = 0
  const team2Score = 0

  const { data: ropePositionOnChain } = useScaffoldReadContract({
    contractName: "YourContract",
    functionName: 'ropePosition',
    // args: [],
  })

  const { data: team1ScoreOnChain } = useScaffoldReadContract({
    contractName: "YourContract",
    functionName: 'team1Score',
    // args: [],
  })

  const { data: team2ScoreOnChain } = useScaffoldReadContract({
    contractName: "YourContract",
    functionName: 'team2Score',
    // args: [],
  })

  const {
    data: hash,
    error,
    isPending,
    writeContract
  } = useScaffoldWriteContract("YourContract")

  const pullRope = (isTeam1: boolean) => {
    writeContract({
      functionName: "pull",
      args: [isTeam1],
    })
    console.log("hash:", hash)
    // console.log(_bool);
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    })




  // 计算旗子偏移量
  const flagOffset = (ropePositionOnChain ? Number(ropePositionOnChain) : ropePosition) * 5 // 每单位移动5%

  console.log("Rendering with rope position:", ropePosition, "Flag offset:", flagOffset)

  return (
    <div className="tug-of-war-container">
      <h1 className="tug-of-war-title">Tug of War</h1>
      <div className="tug-of-war-score-board">
        <div className="tug-of-war-team1-score">Team 1 scores: {team1ScoreOnChain ? Number(team1ScoreOnChain) : team1Score}</div>
        <div className="tug-of-war-team2-score">Team 2 scores: {team2ScoreOnChain ? Number(team2ScoreOnChain) : team2Score}</div>
      </div>

      <div className="tug-of-war-field">
        <div className="tug-of-war-team1">Team 1</div>

        <div
          className="tug-of-war-rope-line"
          style={{ "--flag-offset": `${flagOffset}%` }}
        >
          <div className="tug-of-war-rope-center"></div>
          <div className="tug-of-war-flag">
            <div className="tug-of-war-flag-triangle"></div>

          </div>
        </div>
        <div className="tug-of-war-team2">Team 2</div>
      </div>

      <div className="tug-of-war-controls">
        <button className="tug-of-war-pull-button" onClick={() => pullRope(true)}>Cheer for Team 1</button>
        <button className="tug-of-war-pull-button" onClick={() => pullRope(false)}>Cheer for Team 2</button>
      </div>
      <div className="m-4">
        <p>[OnChain] ropePosition: {Number(ropePositionOnChain)},
          team1Score: {Number(team1ScoreOnChain)},
          team2Score: {Number(team2ScoreOnChain)},
        </p>
        {isPending && 'Confirming...'}
        {hash && <div>Transaction Hash:
          <a href={`https://sepolia.etherscan.io/tx/${hash}`} target="_blank">{hash}</a>
        </div>
        }
        {isConfirming && <div>Waiting for confirmation...</div>}
        {isConfirmed && <div>Transaction confirmed.</div>}
        {error && (
          <div>Error: {(error as BaseError).shortMessage || error.message}</div>
        )}
      </div>
    </div>
  )





}

export default Home