import clsx from "clsx";
import React, { useState } from "react";
import Modal from "../Modal/Modal";
import Card from "./Card/Card";
import Styles from "./MyStake.module.css";

const MyStake = ({stakeInput,stakeHandler,onChangeInputHandler,reward,stakeAmount,withdrawInput,withdrawHandler}) => {
  const [show, setShow] = useState(false);
  const modalHandler = () => {
    setShow(!show);
  };



  return (
    <div className={Styles.root}>
      <div className={Styles.staking}>
        <div>
      <h2 className={Styles.heading}>Dashboard</h2>
      </div>
      <div  className={Styles.inputBox}>
        <input className={Styles.searchBox} disabled={true} type="text" placeholder="search stakers"/>
        <span className={Styles.icon}><img src="/lens.svg" alt='search-icon'/></span>
      </div>
      </div>
      <div>
        <div className={Styles.stake_body}>
          <div className={Styles.card_container}>
            <Card cardKey="Total Staked" cardValue={stakeAmount} />
            <Card cardKey="Net Profit" cardValue={reward} />
          </div>
          <form onSubmit={stakeHandler} className={Styles.form}>
            <input
              type="number"
              placeholder="Amount to stake"
              value={stakeInput}
              onChange={onChangeInputHandler}
              className={Styles.input}
              id="stake"
            />
            <button
              type="submit"
              className={clsx({
                [Styles.stake_btn]: true,
                [Styles.btn_diabled]: false,
              })}
              // disabled = {!connected}
            >
              Stake
            </button>
          </form>

          <form onSubmit={withdrawHandler} className={Styles.form}>
            <input
              type="number"
              placeholder="Amount to withdraw"
              className={Styles.input}
              id="withdraw"
              value={withdrawInput}
              onChange={onChangeInputHandler}
            />
            <button
              type="submit"
              className={clsx({
                [Styles.unstake_btn]: true,
                [Styles.btn_diabled]: false,
              })}
            >
              Withdraw
            </button>
          </form>
        </div>

        {show && (
          <Modal onClose={modalHandler}>
            <div className={Styles.md}>
            <form  className={Styles.form}>
            <input
              type="text"
              placeholder="Search Detail of staker"
              className={Styles.input}
              id="address"
            />
            <button
              // type="submit"
              className={clsx({ [Styles.stake_btn]: true })}
            >
              Search
            </button>
          </form>
            </div>
            <div className={Styles.card}>
             <div className={Styles.header}>
             <h4 className={Styles.cc}>Get Details of staker</h4>
              <button className={Styles.clear} onClick={modalHandler}>*</button>
             </div>         
              <div className={Styles.cc}>
                <h4>Amount Staked</h4>
              </div>
              <div className={Styles.cc}>
                <h4>Time Staked</h4>
              </div>
              
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default MyStake;
