import Connected from "../Connected/Connected"
import Styles from "./Header.module.css"
const Header = ({connectWallet,connected,userInfo}) => {
  return (
    <div className={Styles.root}>
        <span className={Styles.logo}>STAKER<span> <img src="icon.svg" alt="logo"/> </span></span>
        <div className="xx">
         { connected ? <Connected
         
         token_balance={userInfo.token_balance}
            matic_balance={userInfo.matic_balance}
            address={userInfo.address}
         /> :
            <button onClick={connectWallet}  className={Styles.connect_btn}>Connect Wallet</button>
  }
          
        </div>
    </div>
  )
}

export default Header